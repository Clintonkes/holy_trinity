import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppIcon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  service: string;
  initials: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Diane Hoffmann',
    location: 'Conesville, IA',
    rating: 5,
    review:
      'Stel LLC has been taking care of my lawn for two seasons now and I couldn\'t be happier. They show up on time, every time, and my yard has never looked better. The edging alone is worth every penny.',
    service: 'Weekly Mowing & Edging',
    initials: 'DH',
    color: 'bg-primary',
  },
  {
    id: 2,
    name: 'Randy Kowalski',
    location: 'Wapello, IA',
    rating: 5,
    review:
      'I called for a fall cleanup and they came out the next day. Cleared every leaf, trimmed the beds, and left the place looking immaculate. Hired them on the spot for spring too. Highly recommend.',
    service: 'Fall Cleanup',
    initials: 'RK',
    color: 'bg-accent',
  },
  {
    id: 3,
    name: 'Brenda Schultz',
    location: 'Columbus Junction, IA',
    rating: 5,
    review:
      'After years of struggling with weeds, I finally called Stel LLC. Their fertilization and weed control program has completely transformed my lawn. It\'s thick, green, and weed-free for the first time in years.',
    service: 'Fertilization & Weed Control',
    initials: 'BS',
    color: 'bg-foreground',
  },
  {
    id: 4,
    name: 'Tom Graber',
    location: 'Grandview, IA',
    rating: 5,
    review:
      'Fair pricing, great communication, and excellent work. Tyler came out personally to assess my property before giving me a quote. That kind of attention to detail is rare. My lawn looks like a golf course.',
    service: 'Lawn Mowing & Aeration',
    initials: 'TG',
    color: 'bg-primary',
  },
  {
    id: 5,
    name: 'Carla Meyers',
    location: 'Conesville, IA',
    rating: 5,
    review:
      'I was skeptical at first but Stel LLC completely won me over. They mulched my garden beds, trimmed all my shrubs, and cleaned up everything beautifully. My neighbors keep asking who does my yard!',
    service: 'Mulching & Shrub Trimming',
    initials: 'CM',
    color: 'bg-accent',
  },
  {
    id: 6,
    name: 'Jeff Paulsen',
    location: 'Letts, IA',
    rating: 5,
    review:
      'Used them for spring cleanup after a rough winter. They were professional, efficient, and the price was very reasonable. Already booked them for the whole summer season. Couldn\'t ask for better service.',
    service: 'Spring Cleanup',
    initials: 'JP',
    color: 'bg-foreground',
  },
  {
    id: 7,
    name: 'Linda Voss',
    location: 'Oakville, IA',
    rating: 5,
    review:
      'Stel LLC did our aeration and overseeding this fall and the results are already showing. New grass is coming in thick and even. They explained the whole process and answered every question I had. Very professional.',
    service: 'Aeration & Overseeding',
    initials: 'LV',
    color: 'bg-primary',
  },
  {
    id: 8,
    name: 'Mike Dettmer',
    location: 'Conesville, IA',
    rating: 5,
    review:
      'Been using Stel LLC for three years. Reliable, honest, and they do quality work. I\'ve referred them to four of my neighbors and everyone has been happy. They\'re the real deal, a local company that actually cares.',
    service: 'Year-Round Maintenance',
    initials: 'MD',
    color: 'bg-accent',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <AppIcon
          key={i}
          name="StarIcon"
          size={16}
          className={i < rating ? 'text-yellow-400' : 'text-muted'}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden bg-foreground py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-subtle opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Customer Reviews
            </span>
            <h1 className="font-display font-bold text-section-title text-primary-foreground mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              Real reviews from real neighbors. See why Conesville and surrounding Iowa communities trust Stel LLC with their lawns.
            </p>
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-10 mt-12">
              <div>
                <p className="font-display font-bold text-4xl text-primary-foreground">5.0</p>
                <div className="flex justify-center mt-1 mb-1">
                  <StarRating rating={5} />
                </div>
                <p className="text-primary-foreground/60 text-sm">Average Rating</p>
              </div>
              <div className="w-px bg-white/10 hidden sm:block" />
              <div>
                <p className="font-display font-bold text-4xl text-primary-foreground">100+</p>
                <p className="text-primary-foreground/60 text-sm mt-2">Happy Customers</p>
              </div>
              <div className="w-px bg-white/10 hidden sm:block" />
              <div>
                <p className="font-display font-bold text-4xl text-primary-foreground">5+</p>
                <p className="text-primary-foreground/60 text-sm mt-2">Years in Business</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Featured Quote */}
            <div className="bg-primary rounded-3xl p-10 md:p-14 mb-16 relative overflow-hidden">
              <div className="absolute top-6 right-8 font-display text-[10rem] leading-none text-white/5 select-none">
                &ldquo;
              </div>
              <StarRating rating={5} />
              <blockquote className="font-display font-medium text-2xl md:text-3xl text-primary-foreground mt-6 mb-8 leading-snug max-w-3xl">
                &ldquo;Been using Stel LLC for three years. Reliable, honest, and they do quality work. They&apos;re the real deal, a local company that actually cares.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-primary-foreground">
                  MD
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">Mike Dettmer</p>
                  <p className="text-primary-foreground/60 text-sm">Conesville, IA · Year-Round Maintenance</p>
                </div>
              </div>
            </div>

            {/* Staggered Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 7).map((t, index) => (
                <div
                  key={t.id}
                  className={`bg-card rounded-3xl p-7 border border-border service-card-hover ${
                    index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center font-bold text-sm text-primary-foreground`}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{t.name}</p>
                        <p className="text-muted-foreground text-xs">{t.location}</p>
                      </div>
                    </div>
                    <StarRating rating={t.rating} />
                  </div>
                  <blockquote className="text-muted-foreground text-sm leading-relaxed mb-5">
                    &ldquo;{t.review}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                      {t.service}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leave a Review CTA */}
        <section className="py-20 bg-secondary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <AppIcon key={star} name="StarIcon" size={32} className="text-yellow-400" />
              ))}
            </div>
            <h2 className="font-display font-bold text-section-title text-foreground mb-4">
              Had a great experience?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We&apos;d love to hear from you. Your feedback helps us improve and helps other homeowners find trusted lawncare in their area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:stelllc1@proton.me?subject=Review for Stel LLC"
                className="btn-primary"
              >
                <AppIcon name="EnvelopeIcon" size={16} />
                Leave a Review by Email
              </a>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
