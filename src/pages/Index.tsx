
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Package, Globe, CreditCard, BarChart3, Star, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const { t, i18n } = useTranslation();
  const [showAnnualPricing, setShowAnnualPricing] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const features = [
    {
      icon: Package,
      title: t('features.inventory.title'),
      description: t('features.inventory.description'),
      color: 'text-[#4ECDC4]'
    },
    {
      icon: Globe,
      title: t('features.catalog.title'),
      description: t('features.catalog.description'),
      color: 'text-[#4ECDC4]'
    },
    {
      icon: CreditCard,
      title: t('features.pos.title'),
      description: t('features.pos.description'),
      color: 'text-[#4ECDC4]'
    },
    {
      icon: BarChart3,
      title: t('features.forecast.title'),
      description: t('features.forecast.description'),
      color: 'text-[#4ECDC4]'
    }
  ];

  const benefits = [
    {
      title: t('benefits.profit.title'),
      description: t('benefits.profit.description')
    },
    {
      title: t('benefits.sales.title'),
      description: t('benefits.sales.description')
    },
    {
      title: t('benefits.organization.title'),
      description: t('benefits.organization.description')
    },
    {
      title: t('benefits.planning.title'),
      description: t('benefits.planning.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <select
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-white border border-[#1A535C] rounded-md px-3 py-1 text-sm font-medium text-[#1A535C] shadow-sm"
        >
          <option value="pt">PT-BR</option>
          <option value="es">ES</option>
        </select>
      </div>

      {/* Hero Section */}
      <section className="bg-[#1A535C] text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in">
                  {t('hero.title')}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-[#4ECDC4] font-semibold">
                  {t('hero.subtitle')}
                </p>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-[#FF9F1C] hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.location.href = '/cadastro'}
                >
                  {t('hero.cta.primary')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-[#1A535C] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
                  onClick={() => window.location.href = '/demo'}
                >
                  {t('hero.cta.secondary')}
                </Button>
              </div>
            </div>
            
            <div className="lg:order-last">
              <div className="relative">
                <img
                  src="https://placehold.co/800x450/1A535C/4ECDC4?text=Lojix+App+Dashboard"
                  alt={t('hero.image.alt')}
                  className="w-full h-auto rounded-xl shadow-2xl animate-fade-in"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#FF9F1C] text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  {t('hero.badge')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A535C] mb-4">
              {t('features.title')}
            </h2>
            <p className="text-lg lg:text-xl text-[#333333] max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color}`} />
                  <CardTitle className="text-xl font-bold text-[#1A535C]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#333333] text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A535C] mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-lg lg:text-xl text-[#333333] max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-[#4ECDC4] bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Check className="h-8 w-8 text-[#4ECDC4]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A535C]">
                  {benefit.title}
                </h3>
                <p className="text-[#333333] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Testimonial */}
          <div className="bg-[#4ECDC4] bg-opacity-10 rounded-xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-[#FF9F1C] fill-current" />
              ))}
            </div>
            <blockquote className="text-lg lg:text-xl italic text-[#333333] mb-6">
              "{t('testimonial.quote')}"
            </blockquote>
            <cite className="text-[#1A535C] font-semibold">
              {t('testimonial.author')}
            </cite>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A535C] mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-lg lg:text-xl text-[#333333] max-w-3xl mx-auto mb-8">
              {t('pricing.subtitle')}
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`font-medium ${!showAnnualPricing ? 'text-[#1A535C]' : 'text-gray-500'}`}>
                {t('pricing.monthly')}
              </span>
              <button
                onClick={() => setShowAnnualPricing(!showAnnualPricing)}
                className={`relative w-12 h-6 rounded-full transition-colors ${showAnnualPricing ? 'bg-[#4ECDC4]' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${showAnnualPricing ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <span className={`font-medium ${showAnnualPricing ? 'text-[#1A535C]' : 'text-gray-500'}`}>
                {t('pricing.annual')}
              </span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-white border-2 border-gray-200 shadow-lg">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-[#1A535C]">
                  {t('pricing.basic.name')}
                </CardTitle>
                <CardDescription className="text-[#333333] mb-4">
                  {t('pricing.basic.description')}
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-[#1A535C]">
                    {showAnnualPricing ? 'R$ 228' : 'R$ 19'}
                    <span className="text-lg font-normal text-gray-500">
                      {showAnnualPricing ? '/ano' : '/mês'}
                    </span>
                  </div>
                  {showAnnualPricing && (
                    <div className="text-sm text-[#4ECDC4] font-semibold">
                      {t('pricing.savings')}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {t('pricing.basic.features', { returnObjects: true }).map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#4ECDC4] flex-shrink-0" />
                      <span className="text-[#333333]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-[#FF9F1C] hover:bg-orange-600 text-white font-semibold py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.location.href = '/checkout?plan=basico'}
                >
                  {t('pricing.basic.cta')}
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Plan */}
            <Card className="bg-white border-2 border-[#4ECDC4] shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#FF9F1C] text-white px-6 py-2 rounded-full font-semibold text-sm">
                  {t('pricing.popular')}
                </div>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl font-bold text-[#1A535C]">
                  {t('pricing.advanced.name')}
                </CardTitle>
                <CardDescription className="text-[#333333] mb-4">
                  {t('pricing.advanced.description')}
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-[#1A535C]">
                    {showAnnualPricing ? 'R$ 708' : 'R$ 49'}
                    <span className="text-lg font-normal text-gray-500">
                      {showAnnualPricing ? '/ano' : '/mês'}
                    </span>
                  </div>
                  {showAnnualPricing && (
                    <div className="text-sm text-[#4ECDC4] font-semibold">
                      {t('pricing.savings')}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {t('pricing.advanced.features', { returnObjects: true }).map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#4ECDC4] flex-shrink-0" />
                      <span className="text-[#333333]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-[#FF9F1C] hover:bg-orange-600 text-white font-semibold py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.location.href = '/checkout?plan=avancado'}
                >
                  {t('pricing.advanced.cta')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A535C]">
              {t('finalCta.title')}
            </h2>
            <p className="text-lg lg:text-xl text-[#333333]">
              {t('finalCta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-[#FF9F1C] hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = '/cadastro'}
              >
                {t('finalCta.primary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                className="bg-[#4ECDC4] hover:bg-teal-600 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://wa.me/5545999999999?text=Olá! Quero saber mais sobre o Lojix App.', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('finalCta.secondary')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A535C] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#4ECDC4] font-semibold text-lg">
            Lojix App - {t('footer.tagline')}
          </p>
          <p className="text-gray-300 mt-2">
            © 2024 Lojix App. {t('footer.rights')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
