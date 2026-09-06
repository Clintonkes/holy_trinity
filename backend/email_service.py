import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import logging
import os

logger = logging.getLogger(__name__)

# Email configuration - Resend API
RESEND_API_KEY = os.getenv("RESEND_API_KEY")
EMAIL_FROM = os.getenv("EMAIL_FROM", "onboarding@resend.dev")
EMAIL_ENABLED = bool(RESEND_API_KEY)


def send_email(to_email: str, subject: str, html_body: str) -> bool:
    if not EMAIL_ENABLED:
        logger.info(f"Email disabled. Would send to {to_email}: {subject}")
        return True

    try:
        import httpx

        response = httpx.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {RESEND_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "from": EMAIL_FROM,
                "to": [to_email],
                "subject": subject,
                "html": html_body,
            },
        )
        response.raise_for_status()
        logger.info(f"Email sent to {to_email}: {subject}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email to {to_email}: {e}")
        return False


TIME_WINDOW_LABELS = {
    "morning": "Morning (8am to 12pm)",
    "afternoon": "Afternoon (12pm to 4pm)",
    "evening": "Evening (4pm to 7pm)",
}

VISIT_TYPE_LABELS = {
    "consultation": "Consultation",
    "followup": "Follow-up Visit",
    "procedure": "Procedure / Treatment",
    "antenatal": "Antenatal Care",
    "lab": "Laboratory Test",
}


def appointment_confirmation_html(name: str, reference: str, department: str, visit_type: str = None, preferred_date=None, preferred_time: str = None) -> str:
    date_display = preferred_date.strftime("%B %-d, %Y") if preferred_date else "To be scheduled"
    time_display = TIME_WINDOW_LABELS.get(preferred_time, preferred_time or "To be scheduled")
    visit_display = VISIT_TYPE_LABELS.get(visit_type, visit_type or "Consultation")
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: 'Helvetica Neue', Arial, sans-serif; background: #F0F4F8; margin: 0; padding: 40px; }}
            .container {{ max-width: 600px; margin: 0 auto; background: white; border: 1px solid #C8D8E8; }}
            .header {{ background: #0B1F3A; padding: 40px; text-align: center; }}
            .header h1 {{ color: #F8FAFB; font-size: 24px; font-weight: 600; letter-spacing: 1px; margin: 0; }}
            .header p {{ color: #C9A84C; font-size: 11px; letter-spacing: 3px; margin-top: 8px; text-transform: uppercase; }}
            .body {{ padding: 40px; }}
            .body h2 {{ color: #0B1F3A; font-size: 22px; font-weight: 600; margin-bottom: 20px; }}
            .body p {{ color: #4A6080; line-height: 1.7; font-size: 15px; }}
            .details {{ background: #F0F4F8; padding: 24px; margin: 24px 0; border-left: 3px solid #0D7377; }}
            .details p {{ margin: 8px 0; font-size: 14px; color: #0B1F3A; }}
            .details strong {{ color: #0B1F3A; }}
            .ref {{ font-family: 'Courier New', monospace; font-size: 12px; color: #999; text-align: center; margin-top: 30px; letter-spacing: 2px; }}
            .footer {{ padding: 30px 40px; border-top: 1px solid #eee; text-align: center; }}
            .footer p {{ font-size: 12px; color: #999; margin: 4px 0; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Holy Trinity Hospital</h1>
                <p>&amp; Maternity Complex</p>
            </div>
            <div class="body">
                <h2>Thank you, {name}.</h2>
                <p>Your appointment request has been received. Our team will call you within 24 hours to confirm your booking.</p>
                <div class="details">
                    <p><strong>Department:</strong> {department}</p>
                    <p><strong>Visit Type:</strong> {visit_display}</p>
                    <p><strong>Preferred Date:</strong> {date_display}</p>
                    <p><strong>Preferred Time:</strong> {time_display}</p>
                    <p><strong>Status:</strong> Pending Confirmation</p>
                </div>
                <p>For emergencies, please do not wait for this appointment — call us directly at 08032763199.</p>
            </div>
            <div class="ref">REF · {reference}</div>
            <div class="footer">
                <p>HOLY TRINITY HOSPITAL &amp; MATERNITY COMPLEX</p>
                <p>NO 1 EZIOWELLE STREET, ABAKALIKI, EBONYI STATE</p>
            </div>
        </div>
    </body>
    </html>
    """


def appointment_status_html(name: str, reference: str, status: str, department: str) -> str:
    if hasattr(status, "value"):
        status = status.value

    display_status = status.capitalize()

    status_messages = {
        "approved": "Your appointment request has been <strong>approved</strong>. Our team will contact you shortly to finalize your visit.",
        "confirmed": "Your appointment has been <strong>confirmed</strong>. We look forward to seeing you.",
        "cancelled": "Your appointment request has been <strong>cancelled</strong>. If you believe this is an error, please contact us.",
        "completed": "Your appointment has been marked <strong>completed</strong>. Thank you for choosing Holy Trinity Hospital.",
    }

    status_colors = {
        "approved": "#0D7377",
        "confirmed": "#0D7377",
        "cancelled": "#c0392b",
        "completed": "#0B1F3A",
    }

    message = status_messages.get(status, f"Your appointment status has been updated to {display_status}.")
    color = status_colors.get(status, "#0B1F3A")

    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: 'Helvetica Neue', Arial, sans-serif; background: #F0F4F8; margin: 0; padding: 40px; }}
            .container {{ max-width: 600px; margin: 0 auto; background: white; border: 1px solid #C8D8E8; }}
            .header {{ background: #0B1F3A; padding: 40px; text-align: center; }}
            .header h1 {{ color: #F8FAFB; font-size: 24px; font-weight: 600; letter-spacing: 1px; margin: 0; }}
            .header p {{ color: #C9A84C; font-size: 11px; letter-spacing: 3px; margin-top: 8px; text-transform: uppercase; }}
            .body {{ padding: 40px; }}
            .body h2 {{ color: #0B1F3A; font-size: 22px; font-weight: 600; margin-bottom: 20px; }}
            .body p {{ color: #4A6080; line-height: 1.7; font-size: 15px; }}
            .status-badge {{ display: inline-block; padding: 8px 20px; background: {color}; color: white; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; font-weight: 500; margin: 16px 0; }}
            .details {{ background: #F0F4F8; padding: 24px; margin: 24px 0; border-left: 3px solid #0D7377; }}
            .details p {{ margin: 8px 0; font-size: 14px; color: #0B1F3A; }}
            .details strong {{ color: #0B1F3A; }}
            .ref {{ font-family: 'Courier New', monospace; font-size: 12px; color: #999; text-align: center; margin-top: 30px; letter-spacing: 2px; }}
            .footer {{ padding: 30px 40px; border-top: 1px solid #eee; text-align: center; }}
            .footer p {{ font-size: 12px; color: #999; margin: 4px 0; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Holy Trinity Hospital</h1>
                <p>&amp; Maternity Complex</p>
            </div>
            <div class="body">
                <h2>Hello, {name}.</h2>
                <div class="status-badge">{display_status}</div>
                <p>{message}</p>
                <div class="details">
                    <p><strong>Department:</strong> {department}</p>
                    <p><strong>Reference:</strong> {reference}</p>
                </div>
            </div>
            <div class="ref">REF · {reference}</div>
            <div class="footer">
                <p>HOLY TRINITY HOSPITAL &amp; MATERNITY COMPLEX</p>
                <p>NO 1 EZIOWELLE STREET, ABAKALIKI, EBONYI STATE</p>
            </div>
        </div>
    </body>
    </html>
    """


def contact_confirmation_html(name: str, subject: str, message: str) -> str:
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: 'Helvetica Neue', Arial, sans-serif; background: #F0F4F8; margin: 0; padding: 40px; }}
            .container {{ max-width: 600px; margin: 0 auto; background: white; border: 1px solid #C8D8E8; }}
            .header {{ background: #0B1F3A; padding: 40px; text-align: center; }}
            .header h1 {{ color: #F8FAFB; font-size: 24px; font-weight: 600; letter-spacing: 1px; margin: 0; }}
            .header p {{ color: #C9A84C; font-size: 11px; letter-spacing: 3px; margin-top: 8px; text-transform: uppercase; }}
            .body {{ padding: 40px; }}
            .body h2 {{ color: #0B1F3A; font-size: 22px; font-weight: 600; margin-bottom: 20px; }}
            .body p {{ color: #4A6080; line-height: 1.7; font-size: 15px; }}
            .message-box {{ background: #F0F4F8; padding: 24px; margin: 24px 0; border-left: 3px solid #0D7377; }}
            .message-box p {{ margin: 8px 0; font-size: 14px; color: #0B1F3A; }}
            .footer {{ padding: 30px 40px; border-top: 1px solid #eee; text-align: center; }}
            .footer p {{ font-size: 12px; color: #999; margin: 4px 0; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Holy Trinity Hospital</h1>
                <p>&amp; Maternity Complex</p>
            </div>
            <div class="body">
                <h2>Thank you, {name}.</h2>
                <p>We have received your message and will respond within 1–2 business days. For medical emergencies, please call 08032763199 immediately.</p>
                <div class="message-box">
                    <p><strong>Subject:</strong> {subject or "No subject"}</p>
                    <p><strong>Message:</strong> {message}</p>
                </div>
            </div>
            <div class="footer">
                <p>HOLY TRINITY HOSPITAL &amp; MATERNITY COMPLEX</p>
                <p>NO 1 EZIOWELLE STREET, ABAKALIKI, EBONYI STATE</p>
            </div>
        </div>
    </body>
    </html>
    """


def contact_admin_notification_html(name: str, email: str, subject: str, message: str) -> str:
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: 'Helvetica Neue', Arial, sans-serif; background: #F0F4F8; margin: 0; padding: 40px; }}
            .container {{ max-width: 600px; margin: 0 auto; background: white; border: 1px solid #C8D8E8; }}
            .header {{ background: #0B1F3A; padding: 40px; text-align: center; }}
            .header h1 {{ color: #F8FAFB; font-size: 24px; font-weight: 600; letter-spacing: 1px; margin: 0; }}
            .header p {{ color: #C9A84C; font-size: 11px; letter-spacing: 3px; margin-top: 8px; text-transform: uppercase; }}
            .body {{ padding: 40px; }}
            .body h2 {{ color: #0B1F3A; font-size: 22px; font-weight: 600; margin-bottom: 20px; }}
            .body p {{ color: #4A6080; line-height: 1.7; font-size: 15px; }}
            .details {{ background: #F0F4F8; padding: 24px; margin: 24px 0; border-left: 3px solid #0D7377; }}
            .details p {{ margin: 8px 0; font-size: 14px; color: #0B1F3A; }}
            .footer {{ padding: 30px 40px; border-top: 1px solid #eee; text-align: center; }}
            .footer p {{ font-size: 12px; color: #999; margin: 4px 0; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Holy Trinity Hospital</h1>
                <p>New Contact Message</p>
            </div>
            <div class="body">
                <h2>New message from {name}</h2>
                <div class="details">
                    <p><strong>From:</strong> {name} ({email})</p>
                    <p><strong>Subject:</strong> {subject or "No subject"}</p>
                    <p><strong>Message:</strong> {message}</p>
                </div>
            </div>
            <div class="footer">
                <p>HOLY TRINITY HOSPITAL &amp; MATERNITY COMPLEX</p>
            </div>
        </div>
    </body>
    </html>
    """
