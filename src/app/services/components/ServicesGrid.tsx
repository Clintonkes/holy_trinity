'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const allServices = [
  {
    icon: 'ScissorsIcon',
    title: 'Lawn Mowing & Edging',
    description: 'Crisp, clean cuts with professional edging that defines every border and property line. Available on weekly or bi-weekly schedules tailored to your lawn\'s growth rate.',
    details: ['Weekly or bi-weekly scheduling', 'Clean edging along all borders', 'Clippings bagged or mulched', 'Includes blowing of hard surfaces'],
    category: 'maintenance',
    featured: true,
  },
  {
    icon: 'BeakerIcon',
    title: 'Fertilization & Weed Control',
    description: 'Targeted nutrient programs that feed your lawn the right way, paired with precise weed control treatments that protect your turf without harming kids or pets.',
    details: ['Soil assessment included', 'Seasonal application schedule', 'Broadleaf & grassy weed control', 'Pet-safe formulations available'],
    category: 'treatments',
    featured: false,
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Aeration & Overseeding',
    description: 'Core aeration breaks up compacted soil and opens pathways for water, air, and nutrients. Overseeding fills thin or bare spots for a denser, more resilient lawn.',
    details: ['Core aeration (not spike)', 'Premium seed blends for Iowa climate', 'Best done in early fall', 'Dramatically improves lawn density'],
    category: 'restoration',
    featured: false,
  },
  {
    icon: 'SunIcon',
    title: 'Spring Cleanup',
    description: 'Start the season right. We remove winter debris, cut back dead growth, clean edges, and prep your beds so your yard looks great from the first warm day.',
    details: ['Debris & leaf removal', 'Bed edging & cleanup', 'First mow of the season', 'Shrub inspection & light trim'],
    category: 'seasonal',
    featured: false,
  },
  {
    icon: 'MoonIcon',
    title: 'Fall Cleanup',
    description: 'Protect your lawn over winter with a thorough fall cleanup: leaf removal, final mow, bed prep, and everything your yard needs to come back strong in spring.',
    details: ['Complete leaf removal', 'Final mow at correct height', 'Bed cleanup & winterizing', 'Gutter clearing available'],
    category: 'seasonal',
    featured: false,
  },
  {
    icon: 'CursorArrowRippleIcon',
    title: 'Shrub & Hedge Trimming',
    description: 'Precision shaping that keeps your shrubs healthy, your hedges defined, and your property looking sharp. We work with the natural growth patterns of each plant.',
    details: ['Hand & machine trimming', 'Shape restoration', 'Debris cleanup included', 'Seasonal timing recommendations'],
    category: 'maintenance',
    featured: false,
  },
  {
    icon: 'SparklesIcon',
    title: 'Mulching',
    description: 'Fresh mulch application that retains moisture, suppresses weeds, regulates soil temperature, and gives your beds a clean, polished finish that lasts all season.',
    details: ['Hardwood or rubber mulch options', 'Bed prep & old mulch removal', '2-3 inch application depth', 'Color-matched to your landscape'],
    category: 'enhancement',
    featured: false,
  },
];

const categories = [
  { key: 'all', label: 'All Services' },
  { key: 'maintenance', label: 'Maintenance' },
  { key: 'seasonal', label: 'Seasonal' },
  { key: 'treatments', label: 'Treatments' },
  { key: 'restoration', label: 'Restoration' },
  { key: 'enhancement', label: 'Enhancement' },
];

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = activeCategory === 'all'
    ? allServices
    : allServices.filter((s) => s.category === activeCategory);

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
      { threshold: 0.08 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section ref={sectionRef} className="pb-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.key
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services List */}
        <div className="space-y-4">
          {filtered.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-hidden group bg-card border border-border rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-lg ${
                service.featured ? 'border-primary/30 bg-primary/5' : ''
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    service.featured ? 'bg-primary' : 'bg-secondary'
                  }`}
                >
                  <Icon
                    name={service.icon as any}
                    size={24}
                    className={service.featured ? 'text-primary-foreground' : 'text-primary'}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="font-display text-xl font-semibold text-foreground">{service.title}</h2>
                    {service.featured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-accent/20 text-accent-foreground text-xs font-semibold">
                        Most Requested
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4">{service.description}</p>

                  {/* Details */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-foreground/75">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Arrow */}
                <div className="flex-shrink-0 self-center">
                  <Link
                    href="/quote"
                    className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300"
                    aria-label={`Request quote for ${service.title}`}
                  >
                    <Icon name="ArrowRightIcon" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}