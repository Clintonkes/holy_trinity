from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime, date


class BookingCreate(BaseModel):
    address: str
    name: str
    email: EmailStr
    phone: str
    frequency: Optional[str] = None
    preferred_date: Optional[date] = None
    preferred_time: Optional[str] = None
    service: Optional[str] = None
    lawn_size: Optional[str] = None
    notes: Optional[str] = None


class BookingResponse(BaseModel):
    id: int
    reference: str
    address: str
    frequency: Optional[str] = None
    name: str
    email: str
    phone: Optional[str]
    preferred_date: Optional[date]
    preferred_time: Optional[str]
    service: Optional[str] = None
    lawn_size: Optional[str] = None
    notes: Optional[str] = None
    status: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class BookingStatusUpdate(BaseModel):
    status: str


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: Optional[str] = None
    message: str


class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: Optional[str]
    subject: Optional[str]
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
