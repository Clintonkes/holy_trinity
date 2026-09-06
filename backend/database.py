from sqlalchemy import create_engine, Column, Integer, String, DateTime, Date, Text, Enum, inspect, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime, timezone
import enum
import os

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./aveness.db")

connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}
engine = create_engine(
    DATABASE_URL,
    connect_args=connect_args,
    pool_pre_ping=True,
    pool_recycle=300,
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


class AppointmentStatus(str, enum.Enum):
    pending = "pending"
    confirmed = "confirmed"
    approved = "approved"
    cancelled = "cancelled"
    completed = "completed"


class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)
    reference = Column(String, unique=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    email = Column(String, nullable=True)
    dob = Column(Date, nullable=True)
    department = Column(String, nullable=False)
    preferred_date = Column(Date, nullable=True)
    preferred_time = Column(String, nullable=True)
    visit_type = Column(String, nullable=True)
    existing_patient = Column(String, nullable=True)
    reason = Column(Text, nullable=True)
    status = Column(String, default=AppointmentStatus.pending.value)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))


class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String, nullable=True)
    subject = Column(String, nullable=True)
    category = Column(String, default="general")
    message = Column(Text, nullable=False)
    status = Column(String, default="new")
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))


class Admin(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))


def _ensure_columns():
    """Add columns introduced after a table already exists in production.
    There's no migration framework here, so this brings existing
    tables up to date with the current models on startup.
    """
    inspector = inspect(engine)
    table_names = set(inspector.get_table_names())

    if "appointments" in table_names:
        existing = {col["name"] for col in inspector.get_columns("appointments")}
        with engine.begin() as conn:
            if "visit_type" not in existing:
                conn.execute(text("ALTER TABLE appointments ADD COLUMN visit_type VARCHAR"))
            if "existing_patient" not in existing:
                conn.execute(text("ALTER TABLE appointments ADD COLUMN existing_patient VARCHAR"))
            if "dob" not in existing:
                conn.execute(text("ALTER TABLE appointments ADD COLUMN dob DATE"))

    if "contacts" in table_names:
        existing = {col["name"] for col in inspector.get_columns("contacts")}
        with engine.begin() as conn:
            if "status" not in existing:
                conn.execute(text("ALTER TABLE contacts ADD COLUMN status VARCHAR DEFAULT 'new'"))
            if "category" not in existing:
                conn.execute(text("ALTER TABLE contacts ADD COLUMN category VARCHAR DEFAULT 'general'"))


def init_db():
    Base.metadata.create_all(bind=engine)
    _ensure_columns()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
