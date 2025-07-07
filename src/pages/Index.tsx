
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Package, Globe, CreditCard, BarChart3, Star, Check, MessageCircle, ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';
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
      gradient: 'from-[#4141e1] to-[#6366f1]'
    },
    {
      icon: Globe,
      title: t('features.catalog.title'),
      description: t('features.catalog.description'),
      gradient: 'from-[#6366f1] to-[#4141e1]'
    },
    {
      icon: CreditCard,
      title: t('features.pos.title'),
      description: t('features.pos.description'),
      gradient: 'from-[#4141e1] to-[#6366f1]'
    },
    {
      icon: BarChart3,
      title: t('features.forecast.title'),
      description: t('features.forecast.description'),
      gradient: 'from-[#6366f1] to-[#4141e1]'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: t('benefits.profit.title'),
      description: t('benefits.profit.description')
    },
    {
      icon: Zap,
      title: t('benefits.sales.title'),
      description: t('benefits.sales.description')
    },
    {
      icon: Shield,
      title: t('benefits.organization.title'),
      description: t('benefits.organization.description')
    },
    {
      icon: BarChart3,
      title: t('benefits.planning.title'),
      description: t('benefits.planning.description')
    }
  ];

  // Get features arrays with proper typing
  const basicFeatures = t('pricing.basic.features', { returnObjects: true }) as string[];
  const advancedFeatures = t('pricing.advanced.features', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-white">
      {/* Language Selector */}
      <div className="fixed top-6 right-6 z-50">
        <select
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <option value="pt">🇧🇷 PT-BR</option>
          <option value="es">🇪🇸 ES</option>
        </select>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#4141e1] via-[#5b5bf6] to-[#6366f1] min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm font-medium">
                  <Zap className="h-4 w-4" />
                  {t('hero.badge')}
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                  {t('hero.title')}
                </h1>
                
                <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 font-semibold leading-relaxed">
                  {t('hero.subtitle')}
                </p>
                
                <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed max-w-2xl">
                  {t('hero.description')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-[#4141e1] hover:bg-blue-50 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  onClick={() => window.location.href = '/cadastro'}
                >
                  {t('hero.cta.primary')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300"
                  onClick={() => window.location.href = '/demo'}
                >
                  {t('hero.cta.secondary')}
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-2xl"></div>
                <img
                  src="https://placehold.co/900x600/ffffff/4141e1?text=Lojix+Dashboard+Interface"
                  alt={t('hero.image.alt')}
                  className="relative w-full h-auto rounded-3xl shadow-2xl border border-white/20"
                />
                <div className="absolute -bottom-6 -right-6 bg-white text-[#4141e1] px-6 py-3 rounded-2xl font-bold text-sm shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Online Agora
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('features.subtitle')}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group bg-white border-0 shadow-lg hover:shadow-primary-lg transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('benefits.subtitle')}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-6 group">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-primary">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Testimonial */}
          <div className="bg-gradient-light rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-primary">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl lg:text-2xl italic text-gray-700 mb-8 leading-relaxed">
              "{t('testimonial.quote')}"
            </blockquote>
            <cite className="text-[#4141e1] font-bold text-lg">
              {t('testimonial.author')}
            </cite>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {t('pricing.subtitle')}
            </p>
            
            {/* Modern Pricing Toggle */}
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-2 shadow-lg">
              <button
                onClick={() => setShowAnnualPricing(false)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  !showAnnualPricing 
                    ? 'bg-[#4141e1] text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {t('pricing.monthly')}
              </button>
              <button
                onClick={() => setShowAnnualPricing(true)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all relative ${
                  showAnnualPricing 
                    ? 'bg-[#4141e1] text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {t('pricing.annual')}
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  -20%
                </span>
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-white border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="text-center pb-8 pt-12 bg-gradient-to-br from-gray-50 to-white">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {t('pricing.basic.name')}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-8 text-lg">
                  {t('pricing.basic.description')}
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-[#4141e1]">
                    {showAnnualPricing ? 'R$ 228' : 'R$ 19'}
                    <span className="text-xl font-normal text-gray-500">
                      {showAnnualPricing ? '/ano' : '/mês'}
                    </span>
                  </div>
                  {showAnnualPricing && (
                    <div className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full inline-block">
                      {t('pricing.savings')}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                <ul className="space-y-4">
                  {basicFeatures.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#4141e1] flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-primary"
                  onClick={() => window.location.href = '/checkout?plan=basico'}
                >
                  {t('pricing.basic.cta')}
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Plan */}
            <Card className="bg-white border-0 shadow-2xl rounded-3xl overflow-hidden relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-primary text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-lg">
                  {t('pricing.popular')}
                </div>
              </div>
              <CardHeader className="text-center pb-8 pt-16 bg-gradient-to-br from-[#4141e1]/5 to-[#6366f1]/5">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {t('pricing.advanced.name')}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-8 text-lg">
                  {t('pricing.advanced.description')}
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-[#4141e1]">
                    {showAnnualPricing ? 'R$ 708' : 'R$ 49'}
                    <span className="text-xl font-normal text-gray-500">
                      {showAnnualPricing ? '/ano' : '/mês'}
                    </span>
                  </div>
                  {showAnnualPricing && (
                    <div className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full inline-block">
                      {t('pricing.savings')}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                <ul className="space-y-4">
                  {advancedFeatures.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#4141e1] flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-primary-lg"
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                {t('finalCta.title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('finalCta.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <Button
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-10 py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-primary-lg flex-1 sm:flex-initial"
                onClick={() => window.location.href = '/cadastro'}
              >
                {t('finalCta.primary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                className="bg-white border-2 border-[#4141e1] text-[#4141e1] hover:bg-[#4141e1] hover:text-white font-semibold px-10 py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 flex-1 sm:flex-initial"
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
      <footer className="bg-gradient-to-r from-[#4141e1] to-[#6366f1] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Lojix App
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              {t('footer.tagline')}
            </p>
            <div className="border-t border-white/20 pt-8 mt-8">
              <p className="text-blue-100">
                © 2024 Lojix App. {t('footer.rights')}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
