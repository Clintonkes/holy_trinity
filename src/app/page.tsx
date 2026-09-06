import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import DepartmentsPreview from './components/DepartmentsPreview';
import WhyChooseUs from './components/WhyChooseUs';
import DirectorMessage from './components/DirectorMessage';
import HomeCTA from './components/HomeCTA';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <DepartmentsPreview />
        <WhyChooseUs />
        <DirectorMessage />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}