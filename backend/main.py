from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import datetime, timezone
import time
import random
import string
import os

from database import init_db, get_db, Appointment, Contact, Admin
from schemas import (
    AppointmentCreate, AppointmentResponse, AppointmentStatusUpdate,
    ContactCreate, ContactResponse, ContactStatusUpdate,
    AdminLogin, Token,
)
from auth import verify_password, get_password_hash, create_access_token, get_current_admin
from email_service import (
    send_email, appointment_confirmation_html, appointment_status_html,
    contact_confirmation_html, contact_admin_notification_html,
)

app = FastAPI(title="Holy Trinity Hospital API", version="1.0.0")

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://localhost:4028",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:4028",
    "https://clintonkes.github.io",
]
site_url = os.getenv("NEXT_PUBLIC_SITE_URL")
if site_url:
    origins.append(site_url)
render_url = os.getenv("RENDER_EXTERNAL_URL")
if render_url:
    origins.append(render_url)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup():
    init_db()
    _seed_admin()


def _seed_admin():
    from database import SessionLocal
    admin_password = os.getenv("ADMIN_PASSWORD")
    if not admin_password:
        # No ADMIN_PASSWORD set in this environment: leave whatever admin
        # account already exists untouched, and don't create one with a
        # guessable default.
        return

    admin_email = os.getenv("ADMIN_EMAIL", "hr@holytrinityhospital.ng")
    db = SessionLocal()
    try:
        existing = db.query(Admin).first()
        if existing:
            existing.email = admin_email
            existing.hashed_password = get_password_hash(admin_password)
            db.commit()
            print(f"Admin credentials synced from environment: {admin_email}")
        else:
            db.add(Admin(email=admin_email, hashed_password=get_password_hash(admin_password)))
            db.commit()
            print(f"Admin seeded: {admin_email}")
    finally:
        db.close()


def _generate_reference():
    ts = str(int(time.time()))[-6:]
    rand = "".join(random.choices(string.digits, k=3))
    return f"HTH-{ts}{rand}"


# ── Public Endpoints ──────────────────────────────────────────────

@app.post("/api/appointments", response_model=AppointmentResponse, status_code=201)
def create_appointment(data: AppointmentCreate, db: Session = Depends(get_db)):
    reference = _generate_reference()
    appointment = Appointment(
        reference=reference,
        first_name=data.first_name,
        last_name=data.last_name,
        phone=data.phone,
        email=data.email,
        dob=data.dob,
        department=data.department,
        preferred_date=data.preferred_date,
        preferred_time=data.preferred_time,
        visit_type=data.visit_type,
        existing_patient=data.existing_patient,
        reason=data.reason,
        status="pending",
    )
    db.add(appointment)
    db.commit()
    db.refresh(appointment)

    if data.email:
        send_email(
            to_email=data.email,
            subject=f"Your Holy Trinity Hospital Appointment Request {reference}",
            html_body=appointment_confirmation_html(
                name=data.first_name,
                reference=reference,
                department=data.department,
                visit_type=data.visit_type,
                preferred_date=data.preferred_date,
                preferred_time=data.preferred_time,
            ),
        )

    return appointment


@app.post("/api/contacts", response_model=ContactResponse, status_code=201)
def create_contact(data: ContactCreate, db: Session = Depends(get_db)):
    contact = Contact(
        name=data.name,
        email=data.email,
        phone=data.phone,
        subject=data.subject,
        category=data.category,
        message=data.message,
        status="new",
    )
    db.add(contact)
    db.commit()
    db.refresh(contact)

    send_email(
        to_email=data.email,
        subject="Thank you for contacting Holy Trinity Hospital",
        html_body=contact_confirmation_html(
            name=data.name,
            subject=data.subject,
            message=data.message,
        ),
    )

    admin_email = os.getenv("ADMIN_EMAIL", "hr@holytrinityhospital.ng")
    send_email(
        to_email=admin_email,
        subject=f"New Contact: {data.subject or 'No subject'}",
        html_body=contact_admin_notification_html(
            name=data.name,
            email=data.email,
            subject=data.subject,
            message=data.message,
        ),
    )

    return contact


# ── Auth Endpoints ────────────────────────────────────────────────

@app.post("/api/admin/login", response_model=Token)
def admin_login(data: AdminLogin, db: Session = Depends(get_db)):
    admin = db.query(Admin).filter(Admin.email == data.email).first()
    if not admin or not verify_password(data.password, admin.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )
    access_token = create_access_token(data={"sub": admin.email})
    return {"access_token": access_token, "token_type": "bearer"}


# ── Admin Endpoints ───────────────────────────────────────────────

@app.get("/api/admin/appointments", response_model=list[AppointmentResponse])
def list_appointments(
    db: Session = Depends(get_db),
    admin: Admin = Depends(get_current_admin),
):
    return db.query(Appointment).order_by(Appointment.created_at.desc()).all()


@app.patch("/api/admin/appointments/{appointment_id}", response_model=AppointmentResponse)
def update_appointment_status(
    appointment_id: int,
    data: AppointmentStatusUpdate,
    db: Session = Depends(get_db),
    admin: Admin = Depends(get_current_admin),
):
    if data.status not in ("pending", "confirmed", "approved", "cancelled", "completed"):
        raise HTTPException(status_code=400, detail="Invalid status")

    appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()
    if not appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")

    appointment.status = data.status
    appointment.updated_at = datetime.now(timezone.utc)
    db.commit()
    db.refresh(appointment)

    if appointment.email:
        send_email(
            to_email=appointment.email,
            subject=f"Holy Trinity Hospital Appointment Update: {appointment.reference}",
            html_body=appointment_status_html(
                name=appointment.first_name,
                reference=appointment.reference,
                status=data.status,
                department=appointment.department,
            ),
        )

    return appointment


@app.get("/api/admin/contacts", response_model=list[ContactResponse])
def list_contacts(
    db: Session = Depends(get_db),
    admin: Admin = Depends(get_current_admin),
):
    return db.query(Contact).order_by(Contact.created_at.desc()).all()


@app.get("/api/admin/me")
def admin_me(admin: Admin = Depends(get_current_admin)):
    return {"id": admin.id, "email": admin.email, "role": "admin"}


@app.patch("/api/admin/contacts/{contact_id}", response_model=ContactResponse)
def update_contact_status(
    contact_id: int,
    data: ContactStatusUpdate,
    db: Session = Depends(get_db),
    admin: Admin = Depends(get_current_admin),
):
    if data.status not in ("new", "read", "archived"):
        raise HTTPException(status_code=400, detail="Invalid status")

    contact = db.query(Contact).filter(Contact.id == contact_id).first()
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")

    contact.status = data.status
    db.commit()
    db.refresh(contact)
    return contact


@app.delete("/api/admin/appointments/{appointment_id}")
def delete_appointment(
    appointment_id: int,
    db: Session = Depends(get_db),
    admin: Admin = Depends(get_current_admin),
):
    appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()
    if not appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")
    db.delete(appointment)
    db.commit()
    return {"detail": "Appointment deleted"}


@app.delete("/api/admin/contacts/{contact_id}")
def delete_contact(
    contact_id: int,
    db: Session = Depends(get_db),
    admin: Admin = Depends(get_current_admin),
):
    contact = db.query(Contact).filter(Contact.id == contact_id).first()
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    db.delete(contact)
    db.commit()
    return {"detail": "Contact deleted"}


@app.get("/api/admin/dashboard")
def dashboard_stats(
    db: Session = Depends(get_db),
    admin: Admin = Depends(get_current_admin),
):
    total = db.query(Appointment).count()
    pending = db.query(Appointment).filter(Appointment.status == "pending").count()
    approved = db.query(Appointment).filter(Appointment.status == "approved").count()
    completed = db.query(Appointment).filter(Appointment.status == "completed").count()
    cancelled = db.query(Appointment).filter(Appointment.status == "cancelled").count()
    contacts = db.query(Contact).count()
    return {
        "total_appointments": total,
        "pending": pending,
        "approved": approved,
        "completed": completed,
        "cancelled": cancelled,
        "total_contacts": contacts,
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
