import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesPreview from '@/app/components/ServicesPreview';
import GalleryTeaser from '@/app/components/GalleryTeaser';
import WhyStel from '@/app/components/WhyStel';
import TestimonialsPreview from '@/app/components/TestimonialsPreview';
import HomeCTA from '@/app/components/HomeCTA';

export default function HomePage() {
  return (
    <main className="bg-background">
      <Header />
      <HeroSection />
      <ServicesPreview />
      <GalleryTeaser />
      <WhyStel />
      <TestimonialsPreview />
      <HomeCTA />
      <Footer />
    </main>
  );
}