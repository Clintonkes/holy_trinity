import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/app/services/components/ServicesHero';
import ServicesGrid from '@/app/services/components/ServicesGrid';
import ServicesCTA from '@/app/services/components/ServicesCTA';

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
      <Footer />
    </main>
  );
}