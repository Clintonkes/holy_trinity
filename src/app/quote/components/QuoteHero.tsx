import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function QuoteHero() {
  return (
    <section className="pt-36 pb-12 px-4 sm:px-6 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-0 w-80 h-80 blob-primary pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-sm text-accent font-medium mb-6">
            <Icon name="DocumentTextIcon" size={14} />
            Free Estimate, No Obligation
          </div>
          <h1 className="font-display text-hero text-foreground mb-5">
            Get your free{' '}
            <span className="italic font-light text-accent">lawn quote.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fill out the form below and we'll get back to you within 24 hours with a detailed estimate for your property. No pressure, no commitment required.
          </p>
        </div>
      </div>
    </section>
  );
}