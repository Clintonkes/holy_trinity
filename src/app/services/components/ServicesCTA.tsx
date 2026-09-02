import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ServicesCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary/40">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
          Not sure which service you need?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
          Tell us about your property and goals, and we'll recommend the right plan and give you a free, no-pressure quote.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/quote" className="btn-primary">
            Request a Free Quote
            <Icon name="ArrowRightIcon" size={18} />
          </Link>
          <a href="tel:+15632728491" className="btn-outline">
            <Icon name="PhoneIcon" size={16} />
            Call 563-272-8491
          </a>
        </div>
      </div>
    </section>
  );
}