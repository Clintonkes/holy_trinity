'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
  {
    name: 'Dave Mitchum',
    location: 'Conesville, IA',
    rating: 5,
    text: "Stel LLC has been taking care of our yard for two seasons now. The lawn has never looked better: clean edges, consistent cuts, and they always clean up after themselves. Highly recommend.",
  },
  {
    name: 'Karen Albrecht',
    location: 'Muscatine, IA',
    rating: 5,
    text: "Called them for a spring cleanup after a rough winter. They cleared everything, trimmed the shrubs, and laid fresh mulch. The yard looked like a different property. Fantastic job.",
  },
  {
    name: 'Tom & Lisa Hendricks',
    location: 'Wapello, IA',
    rating: 5,
    text: "Reliable, professional, and the price is fair. We've tried other services but Stel is the only one that shows up every week without needing reminders. Worth every penny.",
  },
];

export default function TestimonialsPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef?.current?.querySelectorAll('.reveal-hidden');
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 bg-primary relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 blob-accent pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 blob-accent pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div className="reveal reveal-hidden">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3 block">
              Reviews
            </span>
            <h2 className="font-display text-section-title text-primary-foreground">
              What our customers{' '}
              <span className="italic font-light opacity-70">say.</span>
            </h2>
          </div>
          <Link
            href="/testimonials"
            className="reveal reveal-hidden btn-outline-white text-sm flex-shrink-0"
            style={{ transitionDelay: '100ms' }}
          >
            Read All Reviews
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials?.map((t, i) => (
            <div
              key={t?.name}
              className="reveal reveal-hidden glass-card rounded-2xl p-7 flex flex-col justify-between"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t?.rating })?.map((_, si) => (
                    <Icon key={si} name="StarIcon" size={16} className="text-accent" variant="solid" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-foreground/85 leading-relaxed text-sm">{t?.text}</p>
              </div>
              {/* Author */}
              <div className="mt-6 pt-5 border-t border-border/40">
                <p className="font-semibold text-foreground text-sm">{t?.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t?.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}