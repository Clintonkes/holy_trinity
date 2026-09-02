'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HomeCTA() {
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
      { threshold: 0.15 }
    );
    items?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-[360px] flex items-center">
          {/* Background Image */}
          <AppImage
            src="https://images.unsplash.com/photo-1735470935648-db48c4004fe8"
            alt="Aerial view of neatly maintained green lawn and garden beds in bright sunlight"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 90vw" />
          
          {/* Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/55 to-transparent" />

          {/* Content */}
          <div className="relative z-10 px-8 sm:px-12 py-12 max-w-xl">
            <h2 className="font-display text-section-title text-primary-foreground mb-4 reveal reveal-hidden">
              Ready for a lawn you're proud of?
            </h2>
            <p className="text-primary-foreground/75 leading-relaxed mb-8 reveal reveal-hidden" style={{ transitionDelay: '80ms' }}>
              Get a free, no-obligation quote from Stel LLC. We'll assess your property and recommend the right service plan for your budget and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 reveal reveal-hidden" style={{ transitionDelay: '160ms' }}>
              <Link href="/quote" className="btn-primary">
                Request a Free Quote
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
              <a href="tel:+15632728491" className="btn-outline-white">
                <Icon name="PhoneIcon" size={16} />
                563-272-8491
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}