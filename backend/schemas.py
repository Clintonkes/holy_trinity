from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime, date


class AppointmentCreate(BaseModel):
    first_name: str
    last_name: str
    phone: str
    email: Optional[EmailStr] = None
    dob: Optional[date] = None
    department: str
    preferred_date: Optional[date] = None
    preferred_time: Optional[str] = None
    visit_type: Optional[str] = "consultation"
    existing_patient: Optional[str] = "no"
    reason: Optional[str] = None


class AppointmentResponse(BaseModel):
    id: int
    reference: str
    first_name: str
    last_name: str
    phone: str
    email: Optional[str] = None
    dob: Optional[date] = None
    department: str
    preferred_date: Optional[date]
    preferred_time: Optional[str]
    visit_type: Optional[str] = None
    existing_patient: Optional[str] = None
    reason: Optional[str] = None
    status: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class AppointmentStatusUpdate(BaseModel):
    status: str


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: Optional[str] = None
    category: Optional[str] = "general"
    message: str


class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: Optional[str]
    subject: Optional[str]
    category: Optional[str] = "general"
    message: str
    status: str = "new"
    created_at: datetime

    class Config:
        from_attributes = True


class ContactStatusUpdate(BaseModel):
    status: str


class AdminLogin(BaseModel):
    email: EmailStr
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str
