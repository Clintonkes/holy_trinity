'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef?.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div ref={parallaxRef} className="absolute inset-0 w-full h-[115%] -top-[7.5%] will-change-transform">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_16e3c6104-1772178777531.png"
          alt="Lush green lawn in golden morning light, freshly mowed with clean stripes, deep shadows, rich dark grass"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        {/* Scrim overlay — dark for white text */}
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-32 pb-20">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-sm text-primary-foreground/80 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Serving Conesville, IA & Muscatine County
        </div>

        {/* Headline */}
        <h1 className="font-display text-hero text-primary-foreground mb-6">
          Lawns that make{' '}
          <span className="italic font-light opacity-80">neighbors</span>
          <br />
          look twice.
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10">
          Stel LLC delivers precision lawncare across every season, from weekly mowing and edging to full spring cleanups and fertilization programs.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/quote" className="btn-primary text-base">
            Get a Free Quote
            <Icon name="ArrowRightIcon" size={18} />
          </Link>
          <Link href="/services" className="btn-outline-white text-base">
            View Services
          </Link>
        </div>
      </div>

      {/* Floating Glass Card */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="hidden md:block absolute bottom-0 left-6 lg:left-10">
          <div className="glass-card p-6 rounded-2xl shadow-xl max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/90 flex items-center justify-center">
                <Icon name="StarIcon" size={18} className="text-primary-foreground" variant="solid" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Trusted Locally</p>
                <p className="font-display text-lg font-semibold text-foreground">5-Star Service</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              "Best lawn on the block since we hired Stel. Professional, punctual, and the results speak for themselves."
            </p>
            <div className="flex items-center gap-1 mt-3">
              {[0, 1, 2, 3, 4]?.map((i) =>
              <Icon key={i} name="StarIcon" size={14} className="text-accent" variant="solid" />
              )}
              <span className="text-xs text-muted-foreground ml-1">Dave M., Conesville</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/50">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary-foreground/40 to-transparent" />
      </div>
    </section>);

}