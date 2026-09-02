'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { createBooking, ApiError } from '@/lib/api';

const serviceOptions = [
  'Lawn Mowing & Edging',
  'Fertilization & Weed Control',
  'Aeration & Overseeding',
  'Spring Cleanup',
  'Fall Cleanup',
  'Shrub & Hedge Trimming',
  'Mulching',
  'Multiple Services / Full Program',
  'Not Sure, Need Assessment',
];

const scheduleOptions = [
  'One-time service',
  'Weekly',
  'Bi-weekly',
  'Monthly',
  'Seasonal (spring & fall)',
  'Flexible / discuss with Stel',
];

const propertySizes = [
  'Under ¼ acre',
  '¼ to ½ acre',
  '½ to 1 acre',
  '1 to 2 acres',
  'Over 2 acres',
];

const trustSignals = [
  { icon: 'ClockIcon', title: 'Response within 24 hrs', desc: 'We review every quote request same day or next morning.' },
  { icon: 'CurrencyDollarIcon', title: 'Free & no obligation', desc: 'Your quote comes with zero pressure and zero cost.' },
  { icon: 'ShieldCheckIcon', title: 'Fully insured', desc: 'All Stel LLC work is covered, your property is protected.' },
  { icon: 'MapPinIcon', title: 'Local to Conesville', desc: 'We know Muscatine County lawns and Iowa growing seasons.' },
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    propertySize: '',
    schedule: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await createBooking({
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        service: form.service || undefined,
        lawn_size: form.propertySize || undefined,
        frequency: form.schedule || undefined,
        notes: form.message || undefined,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="pb-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">

          {/* Form — 2 cols */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-card border border-accent/30 rounded-3xl p-10 sm:p-14 text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckBadgeIcon" size={32} className="text-accent" />
                </div>
                <h2 className="font-display text-3xl text-foreground mb-3">Quote Request Received!</h2>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Thanks, {form.name || 'there'}! We'll review your request and get back to you within 24 hours with a personalized estimate.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Questions in the meantime? Call us at{' '}
                  <a href="tel:+15632728491" className="text-primary font-semibold hover:underline">563-272-8491</a>
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-3xl p-6 sm:p-10"
              >
                <h2 className="font-display text-2xl text-foreground mb-8">Your Project Details</h2>

                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="name">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="phone">
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(563) 000-0000"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="email">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="address">
                      Property Address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={form.address}
                      onChange={handleChange}
                      placeholder="123 Main St, Conesville IA"
                      className="input-field"
                    />
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="service">
                      Service Needed <span className="text-accent">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="propertySize">
                      Property Size
                    </label>
                    <select
                      id="propertySize"
                      name="propertySize"
                      value={form.propertySize}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select size...</option>
                      {propertySizes.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="schedule">
                    Preferred Schedule
                  </label>
                  <select
                    id="schedule"
                    name="schedule"
                    value={form.schedule}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select schedule...</option>
                    {scheduleOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="message">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us anything else about your lawn, any problem areas, specific goals, or questions..."
                    className="input-field resize-none"
                  />
                </div>

                {error && (
                  <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-500">
                    <Icon name="ExclamationTriangleIcon" size={18} className="flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Icon name="ArrowPathIcon" size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <Icon name="ArrowRightIcon" size={18} />
                    </>
                  )}
                </button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  We'll respond within 24 hours. No spam, no pressure.
                </p>
              </form>
            )}
          </div>

          {/* Trust Sidebar */}
          <div className="lg:col-span-1 space-y-5 lg:sticky lg:top-28">
            <div className="bg-primary rounded-2xl p-6">
              <h3 className="font-display text-xl text-primary-foreground mb-2">What happens next?</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                We review your request, assess your property details, and reach out with a transparent, itemized quote, usually within one business day.
              </p>
            </div>

            <div className="space-y-3">
              {trustSignals.map((signal) => (
                <div key={signal.title} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Icon name={signal.icon as any} size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{signal.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{signal.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-secondary rounded-xl p-5 border border-border">
              <p className="text-sm font-semibold text-foreground mb-1">Prefer to call?</p>
              <a href="tel:+15632728491" className="flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors">
                <Icon name="PhoneIcon" size={18} />
                563-272-8491
              </a>
              <p className="text-xs text-muted-foreground mt-1">Mon to Sat, 7am to 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}