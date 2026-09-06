'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
      const layer = el.querySelector('.parallax-layer') as HTMLElement;
      if (layer) {
        layer.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
      }
    };
    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0B1F3A]"
    >
      {/* Background image layer */}
      <div className="parallax-layer absolute inset-0 transition-transform duration-700 ease-out">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Decorative teal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute inset-0 bg-gradient-to-l from-[#0D7377] to-transparent" />
      </div>

      {/* Floating cross pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5"
            style={{
              top: `${15 + i * 15}%`,
              right: `${5 + (i % 3) * 12}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            <svg width={i % 2 === 0 ? 40 : 24} height={i % 2 === 0 ? 40 : 24} viewBox="0 0 40 40" fill="none">
              <rect x="16" y="2" width="8" height="36" rx="3" fill="#0D7377"/>
              <rect x="2" y="16" width="36" height="8" rx="3" fill="#0D7377"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[rgba(13,115,119,0.25)] border border-[rgba(13,115,119,0.4)] rounded-full px-4 py-2 mb-8">
            <span className="pulse-dot"></span>
            <span className="text-sm font-medium text-[rgba(248,250,251,0.9)] tracking-wide">
              Emergency Services Available 24/7
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-hero text-[#F8FAFB] mb-6 leading-[1.0]">
            Healing with{' '}
            <span className="italic text-[#C9A84C]">Compassion,</span>
            <br />
            Excellence in Care
          </h1>

          <p className="text-lg text-[rgba(248,250,251,0.75)] leading-relaxed mb-10 max-w-xl">
            Holy Trinity Hospital & Maternity Complex — delivering world-class medical care to Abakaliki and Ebonyi State. From routine consultations to complex procedures, your health is our mission.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link href="/appointments" className="btn-gold">
              <Icon name="CalendarDaysIcon" size={18} />
              Book an Appointment
            </Link>
            <Link href="/departments" className="btn-outline-white">
              Our Departments
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>

          {/* Quick contact */}
          <div className="flex flex-wrap gap-6">
            <a
              href="tel:08032763199"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-[rgba(13,115,119,0.3)] border border-[rgba(13,115,119,0.5)] flex items-center justify-center group-hover:bg-[#0D7377] transition-colors">
                <Icon name="PhoneIcon" size={16} className="text-[#C9A84C]" />
              </div>
              <div>
                <div className="text-xs text-[rgba(248,250,251,0.5)] uppercase tracking-wider">Call Us</div>
                <div className="text-sm font-semibold text-[#F8FAFB]">08032763199</div>
              </div>
            </a>
            <a
              href="tel:08059231822"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-[rgba(13,115,119,0.3)] border border-[rgba(13,115,119,0.5)] flex items-center justify-center group-hover:bg-[#0D7377] transition-colors">
                <Icon name="PhoneIcon" size={16} className="text-[#C9A84C]" />
              </div>
              <div>
                <div className="text-xs text-[rgba(248,250,251,0.5)] uppercase tracking-wider">Alternate</div>
                <div className="text-sm font-semibold text-[#F8FAFB]">08059231822</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L1440 80L1440 30C1200 70 960 10 720 40C480 70 240 10 0 30L0 80Z" fill="#F0F4F8"/>
        </svg>
      </div>
    </section>
  );
}
