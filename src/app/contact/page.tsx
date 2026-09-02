'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppIcon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { createContact, ApiError } from '@/lib/api';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const subjects = [
  'General Inquiry',
  'Schedule a Service',
  'Feedback',
  'Other',
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      <main className="pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden bg-foreground py-20 md:py-24">
          <div className="absolute inset-0 bg-grid-subtle opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
                Reach Out
              </span>
              <h1 className="font-display font-bold text-section-title text-primary-foreground mb-5">
                Get In Touch
              </h1>
              <p className="text-xl text-primary-foreground/70 leading-relaxed">
                Have a question, want to schedule a service, or just want to say hello? We&apos;d love to hear from you.
              </p>
              <p className="mt-4 text-primary-foreground/50 text-sm">
                Looking for a price estimate?{' '}
                <Link href="/quote" className="text-accent underline hover:text-accent/80 transition-colors">
                  Use our Quote Request form instead →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-5 gap-14 items-start">
              {/* Form — 3 cols */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-3xl border border-border p-8 md:p-10">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <AppIcon name="CheckCircleIcon" size={36} className="text-primary" />
                      </div>
                      <h2 className="font-display font-bold text-2xl text-foreground mb-3">
                        Message Sent!
                      </h2>
                      <p className="text-muted-foreground mb-8">
                        Thanks for reaching out. We&apos;ll get back to you within one business day.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setError(''); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                        className="btn-outline"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                        Send Us a Message
                      </h2>
                      <p className="text-muted-foreground text-sm mb-8">
                        For general questions, scheduling, or feedback. We respond within one business day.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              required
                              placeholder="Jane Smith"
                              className="input-field"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              required
                              placeholder="jane@example.com"
                              className="input-field"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                              Phone Number <span className="text-muted-foreground font-normal">(optional)</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+1 (563) 000-0000"
                              className="input-field"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                              Subject <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="subject"
                              value={form.subject}
                              onChange={handleChange}
                              required
                              className="input-field"
                            >
                              <option value="">Select a subject…</option>
                              {subjects.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            placeholder="Tell us how we can help…"
                            className="input-field resize-none"
                          />
                        </div>

                        {error && (
                          <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-500">
                            <AppIcon name="ExclamationTriangleIcon" size={18} className="flex-shrink-0 mt-0.5" />
                            <span>{error}</span>
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {submitting ? (
                            <>
                              <AppIcon name="ArrowPathIcon" size={16} className="animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <AppIcon name="PaperAirplaneIcon" size={16} />
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* Info Panel — 2 cols */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Info Card */}
                <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
                  <h3 className="font-display font-bold text-xl mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <a href="tel:+15632728491" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                        <AppIcon name="PhoneIcon" size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-primary-foreground/60 text-xs uppercase tracking-wide font-semibold">Phone</p>
                        <p className="text-primary-foreground font-medium group-hover:text-accent transition-colors">
                          +1 563 272 8491
                        </p>
                      </div>
                    </a>
                    <a href="mailto:stelllc1@proton.me" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                        <AppIcon name="EnvelopeIcon" size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-primary-foreground/60 text-xs uppercase tracking-wide font-semibold">Email</p>
                        <p className="text-primary-foreground font-medium group-hover:text-accent transition-colors">
                          stelllc1@proton.me
                        </p>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                        <AppIcon name="MapPinIcon" size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-primary-foreground/60 text-xs uppercase tracking-wide font-semibold">Address</p>
                        <p className="text-primary-foreground font-medium">
                          113 N Todds Ferry RD<br />Conesville, IA 52739
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-card rounded-3xl border border-border p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <AppIcon name="ClockIcon" size={20} className="text-primary" />
                    <h3 className="font-display font-bold text-lg text-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { day: 'Monday to Friday', hours: '7:00 AM to 6:00 PM' },
                      { day: 'Saturday', hours: '8:00 AM to 4:00 PM' },
                      { day: 'Sunday', hours: 'Closed' },
                    ].map((row) => (
                      <div key={row.day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="text-sm font-medium text-foreground">{row.day}</span>
                        <span className={`text-sm ${row.hours === 'Closed' ? 'text-red-400 font-semibold' : 'text-muted-foreground'}`}>
                          {row.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-secondary rounded-3xl border border-border overflow-hidden">
                  <div className="h-48 bg-muted flex items-center justify-center relative">
                    <div className="text-center">
                      <AppIcon name="MapIcon" size={40} className="text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground text-sm font-medium">Conesville, IA 52739</p>
                      <p className="text-muted-foreground text-xs mt-1">113 N Todds Ferry RD</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <a
                      href="https://maps.google.com/?q=113+N+Todds+Ferry+RD+Conesville+IA+52739"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      <AppIcon name="ArrowTopRightOnSquareIcon" size={14} />
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* Quote Nudge */}
                <div className="bg-secondary rounded-3xl border border-border p-6">
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong className="text-foreground">Need a price estimate?</strong> Our Quote page is specifically designed for that, with fields for your property size, service type, and preferred start date.
                  </p>
                  <Link href="/quote" className="btn-primary text-sm py-2.5 px-5 w-full justify-center">
                    Request a Free Quote
                    <AppIcon name="ArrowRightIcon" size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
