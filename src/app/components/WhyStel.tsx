'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const stats = [
  { value: '500+', label: 'Yards Serviced', icon: 'HomeIcon' },
  { value: '8+', label: 'Years in Business', icon: 'CalendarDaysIcon' },
  { value: '100%', label: 'Satisfaction Guarantee', icon: 'CheckBadgeIcon' },
  { value: 'Local', label: 'Conesville, IA Based', icon: 'MapPinIcon' },
];

const reasons = [
  {
    icon: 'ClockIcon',
    title: 'Always On Schedule',
    desc: 'We show up when we say we will. Consistent scheduling you can plan your week around.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Fully Insured',
    desc: 'Every job is covered. Your property and peace of mind are protected on every visit.',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Locally Owned',
    desc: "We\'re your neighbors. We take pride in keeping Conesville and surrounding communities looking their best.",
  },
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'Professional Equipment',
    desc: 'Commercial-grade mowers and tools that deliver a cleaner, more precise finish every time.',
  },
];

export default function WhyStel() {
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
      { threshold: 0.1 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60" />
      <div className="absolute left-0 top-1/2 w-80 h-80 blob-accent pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal reveal-hidden">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3 block">
            Why Stel LLC
          </span>
          <h2 className="font-display text-section-title text-foreground max-w-2xl mx-auto">
            More than a mow,{' '}
            <span className="italic font-light text-accent">a commitment.</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal reveal-hidden bg-card rounded-2xl p-6 border border-border text-center service-card-hover"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon as any} size={20} className="text-primary" />
              </div>
              <p className="font-display text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="reveal reveal-hidden flex gap-5 p-6 bg-card rounded-2xl border border-border"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                <Icon name={r.icon as any} size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1.5">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}