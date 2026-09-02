import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteHero from '@/app/quote/components/QuoteHero';
import QuoteForm from '@/app/quote/components/QuoteForm';

export default function QuotePage() {
  return (
    <main className="bg-background">
      <Header />
      <QuoteHero />
      <QuoteForm />
      <Footer />
    </main>
  );
}