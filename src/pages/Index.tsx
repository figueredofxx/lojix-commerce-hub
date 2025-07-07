
import React from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import PainPointsSection from '@/components/landing/PainPointsSection';
import DifferentialsSection from '@/components/landing/DifferentialsSection';
import PricingSection from '@/components/landing/PricingSection';
import FinalCTASection from '@/components/landing/FinalCTASection';
import Footer from '@/components/landing/Footer';
import LanguageSelector from '@/components/landing/LanguageSelector';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <LanguageSelector />
      <Header />
      <HeroSection />
      <PainPointsSection />
      <DifferentialsSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
