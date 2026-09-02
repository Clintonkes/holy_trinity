'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';
import Link from 'next/link';

type FilterType = 'All' | 'Mowing' | 'Landscaping' | 'Cleanup';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: FilterType;
  caption: string;
  tag?: string;
}

const galleryItems: GalleryItem[] = [
{
  id: 1,
  src: "https://images.unsplash.com/photo-1620951626378-8fd05c2eaa58",
  alt: 'Freshly mowed residential lawn with crisp diagonal stripe pattern in Conesville Iowa',
  category: 'Mowing',
  caption: 'Precision stripe mowing: residential property',
  tag: 'After'
},
{
  id: 2,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_11eeff759-1764672714142.png",
  alt: 'Overgrown lawn before professional mowing service',
  category: 'Mowing',
  caption: 'Before: overgrown lawn needing attention',
  tag: 'Before'
},
{
  id: 3,
  src: "https://images.unsplash.com/photo-1655976180462-baac920ff3e2",
  alt: 'Beautifully landscaped garden with trimmed hedges and colorful flower beds',
  category: 'Landscaping',
  caption: 'Full landscape refresh with mulching & edging',
  tag: 'After'
},
{
  id: 4,
  src: "https://images.unsplash.com/photo-1509815255965-168e71b4cff0",
  alt: 'Autumn leaves covering a lawn before fall cleanup service',
  category: 'Cleanup',
  caption: 'Fall cleanup: leaf removal & bed prep',
  tag: 'Before'
},
{
  id: 5,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1e6a40b30-1787871620257.png",
  alt: 'Clean yard after fall leaf removal showing healthy green grass',
  category: 'Cleanup',
  caption: 'After fall cleanup: ready for winter',
  tag: 'After'
},
{
  id: 6,
  src: "https://images.unsplash.com/photo-1604071254865-bfffe9296844",
  alt: 'Neatly trimmed hedges and shrubs along a residential driveway',
  category: 'Landscaping',
  caption: 'Hedge trimming & shrub shaping',
  tag: 'After'
},
{
  id: 7,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1fa31bf39-1777215858956.png",
  alt: 'Lush green lawn after professional fertilization treatment',
  category: 'Mowing',
  caption: 'Post-fertilization: vibrant healthy turf',
  tag: 'After'
},
{
  id: 8,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1cb3605e8-1772214578353.png",
  alt: 'Mulched garden beds with fresh dark mulch around trees and shrubs',
  category: 'Landscaping',
  caption: 'Fresh mulch installation around landscape beds',
  tag: 'After'
},
{
  id: 9,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f59a8552-1772337394246.png",
  alt: 'Spring yard cleanup with debris removal and fresh edging along walkway',
  category: 'Cleanup',
  caption: 'Spring cleanup: edging & debris removal',
  tag: 'After'
},
{
  id: 10,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_153c02245-1772180904712.png",
  alt: 'Wide view of a perfectly maintained residential lawn with defined edges',
  category: 'Mowing',
  caption: 'Residential lawn: weekly maintenance program',
  tag: 'After'
},
{
  id: 11,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_13e9076eb-1764672715061.png",
  alt: 'Overgrown shrubs and weedy garden beds before landscaping service',
  category: 'Landscaping',
  caption: 'Before: neglected landscape beds',
  tag: 'Before'
},
{
  id: 12,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_153c02245-1772180904712.png",
  alt: 'Commercial property lawn mowed and edged to professional standard',
  category: 'Mowing',
  caption: 'Commercial property: bi-weekly service',
  tag: 'After'
}];


const filters: FilterType[] = ['All', 'Mowing', 'Landscaping', 'Cleanup'];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filtered = activeFilter === 'All' ?
  galleryItems :
  galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden bg-foreground py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-subtle opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Portfolio
            </span>
            <h1 className="font-display font-bold text-section-title text-primary-foreground mb-6">
              Our Work Speaks<br />
              <span className="text-stroke-primary" style={{ WebkitTextStroke: '1.5px #7A9A5C', color: 'transparent' }}>
                For Itself
              </span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Browse real results from Stel LLC jobs across Conesville and surrounding Iowa communities.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="sticky top-20 z-30 bg-background/90 backdrop-blur-md border-b border-border py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-3 overflow-x-auto scrollbar-hide">
            {filters.map((filter) =>
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeFilter === filter ?
              'bg-primary text-primary-foreground shadow-md' :
              'bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted'}`
              }>
              
                {filter}
              </button>
            )}
            <span className="ml-auto flex-shrink-0 text-sm text-muted-foreground">
              {filtered.length} photos
            </span>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {filtered.map((item) =>
              <div
                key={item.id}
                className="gallery-item break-inside-avoid relative overflow-hidden rounded-2xl bg-card border border-border group cursor-pointer">
                
                  <div className="relative overflow-hidden">
                    <AppImage
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover" />
                  
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4">
                      <p className="text-white text-sm font-medium">{item.caption}</p>
                    </div>
                    {item.tag &&
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                    item.tag === 'After' ? 'bg-primary text-primary-foreground' : 'bg-foreground/80 text-primary-foreground'}`
                    }>
                    
                        {item.tag}
                      </span>
                  }
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium bg-card/80 text-foreground backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">{item.caption}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <AppIcon name="SparklesIcon" size={40} className="text-primary mx-auto mb-6" />
            <h2 className="font-display font-bold text-card-title text-foreground mb-4">
              Want results like these for your property?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get a free, no-obligation quote from Stel LLC. We serve Conesville, IA and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary">
                Get a Free Quote
                <AppIcon name="ArrowRightIcon" size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

}