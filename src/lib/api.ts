const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function postJson<T>(path: string, body: unknown): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch {
    throw new ApiError('Could not reach the server. Check your connection and try again.', 0);
  }

  if (!res.ok) {
    let detail = 'Something went wrong. Please try again.';
    try {
      const data = await res.json();
      if (typeof data?.detail === 'string') {
        detail = data.detail;
      } else if (Array.isArray(data?.detail) && data.detail[0]?.msg) {
        detail = data.detail[0].msg;
      }
    } catch {
      // Response body wasn't JSON — fall back to the generic message.
    }
    throw new ApiError(detail, res.status);
  }

  return res.json();
}

export interface BookingPayload {
  address: string;
  name: string;
  email: string;
  phone: string;
  frequency?: string;
  preferred_date?: string;
  preferred_time?: string;
  service?: string;
  lawn_size?: string;
  notes?: string;
}

export interface BookingResponse extends BookingPayload {
  id: number;
  reference: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export function createBooking(payload: BookingPayload): Promise<BookingResponse> {
  return postJson<BookingResponse>('/api/bookings', payload);
}

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ContactResponse extends ContactPayload {
  id: number;
  status: string;
  created_at: string;
}

export function createContact(payload: ContactPayload): Promise<ContactResponse> {
  return postJson<ContactResponse>('/api/contacts', payload);
}
