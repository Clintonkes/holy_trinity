'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function HomeCTA() {
  return (
    <section className="py-20 bg-[#F0F4F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Book Appointment card */}
          <div className="bg-[#0D7377] rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                <Icon name="CalendarDaysIcon" size={24} className="text-white" />
              </div>
              <h3 className="font-display text-2xl text-white font-semibold mb-3">
                Book an Appointment
              </h3>
              <p className="text-[rgba(255,255,255,0.75)] text-sm leading-relaxed mb-7">
                Schedule a consultation with one of our specialists. Choose your preferred date, time, and department — we'll confirm within 24 hours.
              </p>
              <Link href="/appointments" className="btn-gold">
                Schedule Now
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          </div>

          {/* Emergency / Contact card */}
          <div className="bg-[#0B1F3A] rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Icon name="PhoneIcon" size={24} className="text-[#C9A84C]" />
              </div>
              <h3 className="font-display text-2xl text-white font-semibold mb-3">
                Emergency & Enquiries
              </h3>
              <p className="text-[rgba(255,255,255,0.65)] text-sm leading-relaxed mb-7">
                For medical emergencies, call us immediately. For general enquiries, our team is available to assist you during business hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:08032763199" className="btn-gold">
                  <Icon name="PhoneIcon" size={16} />
                  08032763199
                </a>
                <Link href="/contact" className="btn-outline-white">
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}