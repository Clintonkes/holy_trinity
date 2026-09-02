'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const galleryItems = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1fa2cb9fd-1772180900906.png",
  alt: 'Freshly mowed residential lawn with crisp edging lines in bright afternoon sun',
  label: 'Lawn Mowing',
  size: 'tall'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1babdb968-1766563252332.png",
  alt: 'Clean garden bed with fresh dark mulch surrounding green shrubs, well-lit yard',
  label: 'Mulching',
  size: 'normal'
},
{
  src: "https://images.unsplash.com/photo-1666988870016-1b6f2ce4ebc0",
  alt: 'Neatly trimmed green hedge row along sunny residential property fence',
  label: 'Shrub Trimming',
  size: 'normal'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ee56b882-1772180902300.png",
  alt: 'Lush green lawn after seasonal cleanup, bright open sky, clean yard borders',
  label: 'Seasonal Cleanup',
  size: 'wide'
}];


export default function GalleryTeaser() {
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
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 bg-secondary/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="reveal reveal-hidden">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3 block">
              Our Work
            </span>
            <h2 className="font-display text-section-title text-foreground">
              Results you can{' '}
              <span className="italic font-light text-accent">see.</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="reveal reveal-hidden btn-outline text-sm flex-shrink-0"
            style={{ transitionDelay: '100ms' }}>
            
            Full Gallery
            <Icon name="PhotoIcon" size={16} />
          </Link>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Tall card — spans 2 rows on desktop */}
          <div
            className="reveal reveal-hidden gallery-item relative rounded-2xl overflow-hidden col-span-1 row-span-2 lg:row-span-2"
            style={{ minHeight: '320px', transitionDelay: '0ms' }}>
            
            <AppImage
              src={galleryItems?.[0]?.src}
              alt={galleryItems?.[0]?.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw" />
            
            <div className="gallery-overlay absolute inset-0" />
            <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground bg-primary/80 px-3 py-1 rounded-full">
                {galleryItems?.[0]?.label}
              </span>
            </div>
          </div>

          {/* Normal cards */}
          <div
            className="reveal reveal-hidden gallery-item relative rounded-2xl overflow-hidden col-span-1"
            style={{ minHeight: '160px', transitionDelay: '80ms' }}>
            
            <AppImage
              src={galleryItems?.[1]?.src}
              alt={galleryItems?.[1]?.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw" />
            
            <div className="gallery-overlay absolute inset-0" />
          </div>

          <div
            className="reveal reveal-hidden gallery-item relative rounded-2xl overflow-hidden col-span-1 lg:col-span-2"
            style={{ minHeight: '160px', transitionDelay: '120ms' }}>
            
            <AppImage
              src={galleryItems?.[2]?.src}
              alt={galleryItems?.[2]?.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw" />
            
            <div className="gallery-overlay absolute inset-0" />
          </div>

          {/* Wide card — spans 2 cols on desktop */}
          <div
            className="reveal reveal-hidden gallery-item relative rounded-2xl overflow-hidden col-span-2 lg:col-span-2"
            style={{ minHeight: '180px', transitionDelay: '160ms' }}>
            
            <AppImage
              src={galleryItems?.[3]?.src}
              alt={galleryItems?.[3]?.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw" />
            
            <div className="gallery-overlay absolute inset-0" />
            <div className="absolute bottom-4 left-4 z-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground bg-primary/80 px-3 py-1 rounded-full">
                {galleryItems?.[3]?.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}