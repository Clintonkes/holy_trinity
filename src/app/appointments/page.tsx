'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import { createAppointment, ApiError } from '@/lib/api';

const departments = [
  'General Medicine',
  'Maternity & Obstetrics',
  'Paediatrics',
  'Surgery',
  'Laboratory Services',
  'Pharmacy / Consultation',
];

const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
];

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string;
  department: string;
  preferredDate: string;
  preferredTime: string;
  visitType: string;
  reason: string;
  existingPatient: string;
}

export default function AppointmentsPage() {
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dob: '',
    department: '',
    preferredDate: '',
    preferredTime: '',
    visitType: 'consultation',
    reason: '',
    existingPatient: 'no',
  });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await createAppointment({
        first_name: form.firstName,
        last_name: form.lastName,
        phone: form.phone,
        email: form.email || undefined,
        dob: form.dob || undefined,
        department: form.department,
        preferred_date: form.preferredDate || undefined,
        preferred_time: form.preferredTime || undefined,
        visit_type: form.visitType || undefined,
        existing_patient: form.existingPatient || undefined,
        reason: form.reason || undefined,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0B1F3A] py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#0D7377] blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Appointments</span>
            </div>
            <h1 className="font-display text-section-title text-[#F8FAFB] mb-4">
              Schedule Your<br />
              <span className="italic text-[#C9A84C]">Consultation</span>
            </h1>
            <p className="text-[rgba(248,250,251,0.7)] max-w-lg leading-relaxed">
              Book an appointment with our specialists. Complete the form below and our team will confirm your booking within 24 hours.
            </p>
          </div>
        </section>

        {/* Info strip */}
        <div className="bg-[#0D7377] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap gap-6 justify-center md:justify-between text-sm text-white">
              <div className="flex items-center gap-2">
                <Icon name="ClockIcon" size={16} className="text-[#C9A84C]" />
                <span>Mon – Fri: 8:00 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="ClockIcon" size={16} className="text-[#C9A84C]" />
                <span>Saturday: 9:00 AM – 2:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="pulse-dot"></span>
                <span>Emergency: 24/7 — Call 08032763199</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <section className="py-16 bg-[#F0F4F8] bg-medical-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Sidebar info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-[#C8D8E8]">
                  <h3 className="font-semibold text-[#0B1F3A] mb-4 flex items-center gap-2">
                    <Icon name="InformationCircleIcon" size={18} className="text-[#0D7377]" />
                    Before You Book
                  </h3>
                  <ul className="space-y-3 text-sm text-[#4A6080]">
                    <li className="flex gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#E4EDF5] flex items-center justify-center flex-shrink-0 text-[#0D7377] font-bold text-xs mt-0.5">1</span>
                      <span>Appointments are confirmed within 24 hours via phone call.</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#E4EDF5] flex items-center justify-center flex-shrink-0 text-[#0D7377] font-bold text-xs mt-0.5">2</span>
                      <span>Please arrive 15 minutes before your scheduled time.</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#E4EDF5] flex items-center justify-center flex-shrink-0 text-[#0D7377] font-bold text-xs mt-0.5">3</span>
                      <span>Bring any previous medical records or test results.</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#E4EDF5] flex items-center justify-center flex-shrink-0 text-[#0D7377] font-bold text-xs mt-0.5">4</span>
                      <span>For emergencies, call us directly — do not wait for an appointment.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0B1F3A] rounded-2xl p-6">
                  <h3 className="font-semibold text-[#F8FAFB] mb-4">Emergency Line</h3>
                  <p className="text-[rgba(248,250,251,0.65)] text-sm mb-4">
                    For urgent medical situations, call us immediately. Our emergency team is available around the clock.
                  </p>
                  <a href="tel:08032763199" className="btn-gold w-full justify-center text-sm py-3">
                    <Icon name="PhoneIcon" size={16} />
                    08032763199
                  </a>
                  <a href="tel:08059231822" className="mt-2 btn-outline-white w-full justify-center text-sm py-3">
                    <Icon name="PhoneIcon" size={16} />
                    08059231822
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[#C8D8E8]">
                  <h3 className="font-semibold text-[#0B1F3A] mb-3">Location</h3>
                  <div className="flex items-start gap-3 text-sm text-[#4A6080]">
                    <Icon name="MapPinIcon" size={16} className="text-[#0D7377] mt-0.5 flex-shrink-0" />
                    <span>No 1 Eziowelle Street, Box 880, Abakaliki, Ebonyi State</span>
                  </div>
                </div>
              </div>

              {/* Booking form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <div className="bg-white rounded-2xl p-12 border border-[#C8D8E8] text-center">
                    <div className="w-16 h-16 rounded-full bg-[#E4EDF5] flex items-center justify-center mx-auto mb-6">
                      <Icon name="CheckCircleIcon" size={32} className="text-[#0D7377]" />
                    </div>
                    <h3 className="font-display text-2xl text-[#0B1F3A] font-semibold mb-3">
                      Appointment Request Received
                    </h3>
                    <p className="text-[#4A6080] leading-relaxed max-w-md mx-auto mb-8">
                      Thank you, <strong>{form?.firstName}</strong>. We have received your appointment request for the <strong>{form?.department}</strong> department. Our team will call you on <strong>{form?.phone}</strong> within 24 hours to confirm your booking.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', phone: '', email: '', dob: '', department: '', preferredDate: '', preferredTime: '', visitType: 'consultation', reason: '', existingPatient: 'no' }); }}
                      className="btn-primary"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border border-[#C8D8E8] overflow-hidden">
                    {/* Form header */}
                    <div className="bg-[#0D7377] px-8 py-5">
                      <h2 className="font-semibold text-white text-lg">Appointment Request Form</h2>
                      <p className="text-[rgba(255,255,255,0.75)] text-sm mt-1">All fields marked * are required</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                      {/* Personal info */}
                      <div>
                        <h3 className="font-semibold text-[#0B1F3A] mb-4 pb-2 border-b border-[#E4EDF5] flex items-center gap-2">
                          <Icon name="UserIcon" size={16} className="text-[#0D7377]" />
                          Personal Information
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">First Name *</label>
                            <input name="firstName" value={form?.firstName} onChange={handleChange} required className="input-field" placeholder="Enter first name" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Last Name *</label>
                            <input name="lastName" value={form?.lastName} onChange={handleChange} required className="input-field" placeholder="Enter last name" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Phone Number *</label>
                            <input name="phone" value={form?.phone} onChange={handleChange} required type="tel" className="input-field" placeholder="e.g. 08012345678" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Email Address</label>
                            <input name="email" value={form?.email} onChange={handleChange} type="email" className="input-field" placeholder="your@email.com" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Date of Birth</label>
                            <input name="dob" value={form?.dob} onChange={handleChange} type="date" className="input-field" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Are you an existing patient? *</label>
                            <select name="existingPatient" value={form?.existingPatient} onChange={handleChange} className="input-field">
                              <option value="no">No — New Patient</option>
                              <option value="yes">Yes — Returning Patient</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Appointment details */}
                      <div>
                        <h3 className="font-semibold text-[#0B1F3A] mb-4 pb-2 border-b border-[#E4EDF5] flex items-center gap-2">
                          <Icon name="CalendarDaysIcon" size={16} className="text-[#0D7377]" />
                          Appointment Details
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Department / Specialty *</label>
                            <select name="department" value={form?.department} onChange={handleChange} required className="input-field">
                              <option value="">Select department</option>
                              {departments?.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Visit Type *</label>
                            <select name="visitType" value={form?.visitType} onChange={handleChange} className="input-field">
                              <option value="consultation">Consultation</option>
                              <option value="followup">Follow-up Visit</option>
                              <option value="procedure">Procedure / Treatment</option>
                              <option value="antenatal">Antenatal Care</option>
                              <option value="lab">Laboratory Test</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Preferred Date *</label>
                            <input name="preferredDate" value={form?.preferredDate} onChange={handleChange} required type="date" className="input-field" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Preferred Time *</label>
                            <select name="preferredTime" value={form?.preferredTime} onChange={handleChange} required className="input-field">
                              <option value="">Select time slot</option>
                              {timeSlots?.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Reason for Visit / Symptoms *</label>
                          <textarea
                            name="reason"
                            value={form?.reason}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="input-field resize-none"
                            placeholder="Briefly describe your symptoms or reason for the appointment..."
                          />
                        </div>
                      </div>

                      <div className="bg-[#F0F4F8] rounded-xl p-4 text-sm text-[#4A6080] border border-[#C8D8E8]">
                        <Icon name="InformationCircleIcon" size={16} className="text-[#0D7377] inline mr-2" />
                        By submitting this form, you consent to Holy Trinity Hospital contacting you to confirm your appointment. Your information is kept strictly confidential.
                      </div>

                      {error && (
                        <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-50 p-4 text-sm text-red-600">
                          <Icon name="ExclamationTriangleIcon" size={18} className="flex-shrink-0 mt-0.5" />
                          <span>{error}</span>
                        </div>
                      )}

                      <button type="submit" disabled={submitting} className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                        {submitting ? (
                          <>
                            <Icon name="ArrowPathIcon" size={18} className="animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Icon name="CalendarDaysIcon" size={18} />
                            Submit Appointment Request
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
