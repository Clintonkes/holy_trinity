import React from 'react';

export default function ServicesHero() {
  return (
    <section className="pt-36 pb-16 px-4 sm:px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none" />
      <div className="absolute right-0 top-0 w-72 h-72 blob-primary pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4 block">
          Stel LLC
        </span>
        <h1 className="font-display text-hero text-foreground max-w-3xl mb-6">
          Lawncare services for{' '}
          <span className="italic font-light text-accent">every need.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          From weekly maintenance to one-time seasonal work, Stel LLC handles every aspect of your lawn and landscape: professionally, reliably, and on schedule.
        </p>
      </div>
    </section>
  );
}