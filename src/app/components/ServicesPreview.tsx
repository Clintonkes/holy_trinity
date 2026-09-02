'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    icon: 'ScissorsIcon',
    title: 'Lawn Mowing & Edging',
    description: 'Crisp, clean cuts with professional edging that defines every border. Weekly or bi-weekly schedules available.',
    tag: 'Most Popular',
  },
  {
    icon: 'BeakerIcon',
    title: 'Fertilization & Weed Control',
    description: 'Targeted programs that feed your lawn and suppress weeds, without harming kids or pets.',
    tag: null,
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Aeration & Overseeding',
    description: 'Break up compacted soil and thicken thin turf for a denser, healthier lawn by fall.',
    tag: null,
  },
  {
    icon: 'SunIcon',
    title: 'Seasonal Cleanups',
    description: 'Spring and fall cleanups that remove debris, prep beds, and set your yard up for the next season.',
    tag: 'Spring & Fall',
  },
  {
    icon: 'CursorArrowRippleIcon',
    title: 'Shrub & Hedge Trimming',
    description: 'Precision shaping that keeps your shrubs healthy and your property looking sharp all season.',
    tag: null,
  },
  {
    icon: 'SparklesIcon',
    title: 'Mulching',
    description: 'Fresh mulch application that retains moisture, suppresses weeds, and adds a polished finish to every bed.',
    tag: null,
  },
];

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.reveal-hidden');
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 blob-primary pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div className="reveal reveal-hidden max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3 block">
              What We Do
            </span>
            <h2 className="font-display text-section-title text-foreground">
              Services built for{' '}
              <span className="italic font-light text-accent">every</span> season.
            </h2>
          </div>
          <Link
            href="/services"
            className="reveal reveal-hidden btn-outline text-sm flex-shrink-0"
            style={{ transitionDelay: '120ms' }}
          >
            View All Services
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>

        {/* Services Grid — Bento layout */}
        {/* BENTO MAP (grid-cols-3 desktop):
          Row 1: [col-1-2: Lawn Mowing cs-2] [col-3: Fertilization cs-1]
          Row 2: [col-1: Aeration cs-1] [col-2: Seasonal Cleanup cs-1] [col-3: Shrub Trimming cs-1]
          Row 3: [col-1-2: Mulching cs-2] [col-3: Pest Mgmt / last card cs-1]
          Placed 6/6 ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 — col-span-2 (featured) */}
          {/* col-1-2: Lawn Mowing cs-2 */}
          <div
            className="reveal reveal-hidden sm:col-span-2 lg:col-span-2 bg-primary rounded-2xl p-8 service-card-hover relative overflow-hidden"
            style={{ transitionDelay: '0ms' }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 blob-accent pointer-events-none translate-x-1/4 -translate-y-1/4" />
            {services[0].tag && (
              <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-primary-foreground text-xs font-semibold mb-4">
                {services[0].tag}
              </span>
            )}
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/15 flex items-center justify-center mb-5">
              <Icon name={services[0].icon as any} size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-display text-card-title text-primary-foreground mb-3">{services[0].title}</h3>
            <p className="text-primary-foreground/70 leading-relaxed text-sm max-w-sm">{services[0].description}</p>
            <Link href="/services" className="inline-flex items-center gap-1.5 mt-6 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors">
              Learn more <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>

          {/* Card 2 — col-span-1 */}
          {/* col-3: Fertilization cs-1 */}
          <div
            className="reveal reveal-hidden bg-card rounded-2xl p-7 border border-border service-card-hover"
            style={{ transitionDelay: '80ms' }}
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
              <Icon name={services[1].icon as any} size={22} className="text-primary" />
            </div>
            <h3 className="font-display text-card-title text-foreground mb-3">{services[1].title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{services[1].description}</p>
          </div>

          {/* Card 3 */}
          {/* col-1: Aeration cs-1 */}
          <div
            className="reveal reveal-hidden bg-card rounded-2xl p-7 border border-border service-card-hover"
            style={{ transitionDelay: '120ms' }}
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
              <Icon name={services[2].icon as any} size={22} className="text-primary" />
            </div>
            <h3 className="font-display text-card-title text-foreground mb-3">{services[2].title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{services[2].description}</p>
          </div>

          {/* Card 4 */}
          {/* col-2: Seasonal Cleanup cs-1 */}
          <div
            className="reveal reveal-hidden bg-accent/10 rounded-2xl p-7 border border-accent/20 service-card-hover"
            style={{ transitionDelay: '160ms' }}
          >
            {services[3].tag && (
              <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-semibold mb-4">
                {services[3].tag}
              </span>
            )}
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
              <Icon name={services[3].icon as any} size={22} className="text-primary" />
            </div>
            <h3 className="font-display text-card-title text-foreground mb-3">{services[3].title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{services[3].description}</p>
          </div>

          {/* Card 5 */}
          {/* col-3: Shrub Trimming cs-1 */}
          <div
            className="reveal reveal-hidden bg-card rounded-2xl p-7 border border-border service-card-hover"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
              <Icon name={services[4].icon as any} size={22} className="text-primary" />
            </div>
            <h3 className="font-display text-card-title text-foreground mb-3">{services[4].title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{services[4].description}</p>
          </div>

          {/* Card 6 — col-span-full on mobile, col-span-2 on lg */}
          {/* col-1-2: Mulching cs-2 (last row spans 2, last card fills remaining) */}
          <div
            className="reveal reveal-hidden sm:col-span-2 lg:col-span-2 bg-secondary rounded-2xl p-7 border border-border service-card-hover"
            style={{ transitionDelay: '240ms' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center flex-shrink-0">
                <Icon name={services[5].icon as any} size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-card-title text-foreground mb-2">{services[5].title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{services[5].description}</p>
              </div>
            </div>
          </div>

          {/* Filler CTA card — col-3 last row */}
          <div
            className="reveal reveal-hidden bg-foreground rounded-2xl p-7 service-card-hover flex flex-col justify-between"
            style={{ transitionDelay: '280ms' }}
          >
            <p className="font-display text-lg text-primary-foreground leading-snug">
              Not sure what you need?
            </p>
            <Link href="/quote" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-accent hover:text-accent/80 transition-colors">
              Request a free assessment <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}