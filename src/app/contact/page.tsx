'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { createContact, ApiError } from '@/lib/api';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    category: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
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
      await createContact({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        subject: form.subject || undefined,
        category: form.category || undefined,
        message: form.message,
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
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#C9A84C] blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Contact Us</span>
            </div>
            <h1 className="font-display text-section-title text-[#F8FAFB] mb-4">
              Get in Touch<br />
              <span className="italic text-[#C9A84C]">We're Here to Help</span>
            </h1>
            <p className="text-[rgba(248,250,251,0.7)] max-w-lg leading-relaxed">
              Have a question, feedback, or need general information? Send us a message and our team will respond promptly.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] rounded-lg px-4 py-2.5 text-sm text-[#C9A84C]">
              <Icon name="CalendarDaysIcon" size={16} />
              <span>Need to schedule a visit? Use our </span>
              <Link href="/appointments" className="underline font-semibold hover:text-[#e8c76a] transition-colors">Appointments page</Link>
              <span> instead.</span>
            </div>
          </div>
        </section>

        {/* Contact grid */}
        <section className="py-16 bg-[#F0F4F8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Contact info panel */}
              <div className="lg:col-span-2 space-y-5">
                {/* Address */}
                <div className="bg-white rounded-2xl p-6 border border-[#C8D8E8]">
                  <h3 className="font-semibold text-[#0B1F3A] mb-5 flex items-center gap-2">
                    <Icon name="BuildingOffice2Icon" size={18} className="text-[#0D7377]" />
                    Hospital Address
                  </h3>
                  <div className="flex items-start gap-3 mb-4">
                    <Icon name="MapPinIcon" size={18} className="text-[#0D7377] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#0B1F3A] text-sm">No 1 Eziowelle Street</div>
                      <div className="text-[#4A6080] text-sm">Box 880, Abakaliki</div>
                      <div className="text-[#4A6080] text-sm">Ebonyi State, Nigeria</div>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Abakaliki+Ebonyi+State+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#0D7377] font-medium flex items-center gap-1.5 hover:text-[#0a5a5e] transition-colors"
                  >
                    <Icon name="MapIcon" size={14} />
                    View on Google Maps
                  </a>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-2xl p-6 border border-[#C8D8E8]">
                  <h3 className="font-semibold text-[#0B1F3A] mb-4 flex items-center gap-2">
                    <Icon name="PhoneIcon" size={18} className="text-[#0D7377]" />
                    Phone Numbers
                  </h3>
                  <div className="space-y-3">
                    <a href="tel:08032763199" className="flex items-center justify-between p-3 rounded-xl bg-[#F0F4F8] hover:bg-[#E4EDF5] transition-colors group">
                      <div>
                        <div className="text-xs text-[#4A6080] uppercase tracking-wider mb-0.5">Primary Line</div>
                        <div className="font-semibold text-[#0B1F3A]">08032763199</div>
                      </div>
                      <Icon name="PhoneArrowUpRightIcon" size={16} className="text-[#0D7377] group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="tel:08059231822" className="flex items-center justify-between p-3 rounded-xl bg-[#F0F4F8] hover:bg-[#E4EDF5] transition-colors group">
                      <div>
                        <div className="text-xs text-[#4A6080] uppercase tracking-wider mb-0.5">Secondary Line</div>
                        <div className="font-semibold text-[#0B1F3A]">08059231822</div>
                      </div>
                      <Icon name="PhoneArrowUpRightIcon" size={16} className="text-[#0D7377] group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-2xl p-6 border border-[#C8D8E8]">
                  <h3 className="font-semibold text-[#0B1F3A] mb-4 flex items-center gap-2">
                    <Icon name="ClockIcon" size={18} className="text-[#0D7377]" />
                    Opening Hours
                  </h3>
                  <div className="space-y-2.5 text-sm">
                    {[
                      { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
                      { day: 'Saturday', hours: '9:00 AM – 2:00 PM' },
                      { day: 'Sunday', hours: 'Emergency Only' },
                    ]?.map(row => (
                      <div key={row?.day} className="flex justify-between items-center py-2 border-b border-[#F0F4F8] last:border-0">
                        <span className="text-[#4A6080]">{row?.day}</span>
                        <span className={`font-medium ${row?.hours === 'Emergency Only' ? 'text-[#C9A84C]' : 'text-[#0B1F3A]'}`}>{row?.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-green-600 font-medium">
                    <span className="pulse-dot"></span>
                    Emergency services available 24/7
                  </div>
                </div>

                {/* Book appointment nudge */}
                <div className="bg-[#0D7377] rounded-2xl p-6">
                  <h3 className="font-semibold text-white mb-2">Need a Medical Appointment?</h3>
                  <p className="text-[rgba(255,255,255,0.75)] text-sm mb-4">
                    This contact form is for general enquiries. To schedule a consultation with a doctor, please use our dedicated booking system.
                  </p>
                  <Link href="/appointments" className="btn-gold w-full justify-center text-sm py-3">
                    <Icon name="CalendarDaysIcon" size={16} />
                    Book an Appointment
                  </Link>
                </div>
              </div>

              {/* Contact form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="bg-white rounded-2xl p-12 border border-[#C8D8E8] text-center h-full flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#E4EDF5] flex items-center justify-center mx-auto mb-6">
                      <Icon name="CheckCircleIcon" size={32} className="text-[#0D7377]" />
                    </div>
                    <h3 className="font-display text-2xl text-[#0B1F3A] font-semibold mb-3">Message Sent!</h3>
                    <p className="text-[#4A6080] leading-relaxed max-w-md mb-8">
                      Thank you for reaching out, <strong>{form?.name}</strong>. We have received your message and will respond within 1–2 business days.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', subject: '', category: 'general', message: '' }); }}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border border-[#C8D8E8] overflow-hidden">
                    <div className="bg-[#0B1F3A] px-8 py-5">
                      <h2 className="font-semibold text-white text-lg">Send Us a Message</h2>
                      <p className="text-[rgba(248,250,251,0.65)] text-sm mt-1">For general enquiries, feedback, and information requests</p>
                    </div>
                    <form onSubmit={handleSubmit} className="p-8 space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Full Name *</label>
                          <input name="name" value={form?.name} onChange={handleChange} required className="input-field" placeholder="Your full name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Phone Number</label>
                          <input name="phone" value={form?.phone} onChange={handleChange} type="tel" className="input-field" placeholder="08012345678" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Email Address *</label>
                        <input name="email" value={form?.email} onChange={handleChange} required type="email" className="input-field" placeholder="your@email.com" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Enquiry Category *</label>
                          <select name="category" value={form?.category} onChange={handleChange} className="input-field">
                            <option value="general">General Enquiry</option>
                            <option value="services">Services & Departments</option>
                            <option value="billing">Billing & Payments</option>
                            <option value="feedback">Patient Feedback</option>
                            <option value="careers">Careers & Employment</option>
                            <option value="media">Media & Press</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Subject *</label>
                          <input name="subject" value={form?.subject} onChange={handleChange} required className="input-field" placeholder="Brief subject line" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Your Message *</label>
                        <textarea
                          name="message"
                          value={form?.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="input-field resize-none"
                          placeholder="Please describe your enquiry in detail..."
                        />
                      </div>
                      <div className="bg-[#F0F4F8] rounded-xl p-4 text-sm text-[#4A6080] border border-[#C8D8E8]">
                        <Icon name="InformationCircleIcon" size={16} className="text-[#0D7377] inline mr-2" />
                        This form is for general enquiries only. For medical emergencies, call <a href="tel:08032763199" className="font-semibold text-[#0D7377]">08032763199</a> immediately.
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
                            Sending...
                          </>
                        ) : (
                          <>
                            <Icon name="PaperAirplaneIcon" size={18} />
                            Send Message
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
