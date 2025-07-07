
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  ChevronDown, 
  Package, 
  Globe, 
  CreditCard, 
  BarChart3, 
  Star, 
  Check, 
  MessageCircle, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  Shield,
  Menu,
  X,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const { t, i18n } = useTranslation();
  const [showAnnualPricing, setShowAnnualPricing] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const painPoints = [
    {
      icon: Package,
      problem: t('painPoints.disorganized.problem'),
      solution: t('painPoints.disorganized.solution'),
      gradient: 'from-[#4141e1] to-[#6366f1]'
    },
    {
      icon: Globe,
      problem: t('painPoints.slowSales.problem'),
      solution: t('painPoints.slowSales.solution'),
      gradient: 'from-[#6366f1] to-[#4141e1]'
    },
    {
      icon: CreditCard,
      problem: t('painPoints.complexManagement.problem'),
      solution: t('painPoints.complexManagement.solution'),
      gradient: 'from-[#4141e1] to-[#6366f1]'
    },
    {
      icon: BarChart3,
      problem: t('painPoints.blindImports.problem'),
      solution: t('painPoints.blindImports.solution'),
      gradient: 'from-[#6366f1] to-[#4141e1]'
    }
  ];

  const differentials = [
    {
      icon: TrendingUp,
      title: t('differentials.realProfit.title'),
      description: t('differentials.realProfit.description')
    },
    {
      icon: Zap,
      title: t('differentials.impressiveSales.title'),
      description: t('differentials.impressiveSales.description')
    },
    {
      icon: Shield,
      title: t('differentials.simplicityThatWorks.title'),
      description: t('differentials.simplicityThatWorks.description')
    },
    {
      icon: BarChart3,
      title: t('differentials.intelligentPlanning.title'),
      description: t('differentials.intelligentPlanning.description')
    }
  ];

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

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-[#4141e1]">Lojix App</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-[#4141e1] font-medium transition-colors">
                {t('nav.features')}
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-[#4141e1] font-medium transition-colors">
                {t('nav.pricing')}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#4141e1] font-medium transition-colors">
                {t('nav.contact')}
              </a>
              <Button
                className="bg-gradient-to-r from-[#4141e1] to-[#6366f1] hover:opacity-90 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300"
                onClick={() => window.location.href = '/cadastro'}
              >
                {t('nav.tryFree')}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-[#4141e1]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-700 hover:text-[#4141e1] font-medium">
                  {t('nav.features')}
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-[#4141e1] font-medium">
                  {t('nav.pricing')}
                </a>
                <a href="#contact" className="text-gray-700 hover:text-[#4141e1] font-medium">
                  {t('nav.contact')}
                </a>
                <Button
                  className="bg-gradient-to-r from-[#4141e1] to-[#6366f1] hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                  onClick={() => window.location.href = '/cadastro'}
                >
                  {t('nav.tryFree')}
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#4141e1] via-[#5b5bf6] to-[#6366f1] py-20 lg:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="fill-white">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm font-medium">
                  <Zap className="h-4 w-4" />
                  {t('hero.badge')}
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  {t('hero.title')}
                </h1>
                
                <p className="text-xl sm:text-2xl text-blue-100 font-semibold leading-relaxed">
                  {t('hero.subtitle')}
                </p>
                
                <p className="text-lg text-blue-100/80 leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-[#4141e1] hover:bg-blue-50 font-bold px-8 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
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
                  <Play className="mr-2 h-5 w-5" />
                  {t('hero.cta.secondary')}
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-2xl"></div>
                <img
                  src="https://placehold.co/800x450/4141E1/FFFFFF?text=Lojix+Dashboard+Interface"
                  alt={t('hero.image.alt')}
                  className="relative w-full h-auto rounded-3xl shadow-2xl border border-white/20"
                />
                <div className="absolute -bottom-6 -right-6 bg-white text-[#4141e1] px-6 py-3 rounded-2xl font-bold text-sm shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {t('hero.liveNow')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('painPoints.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t('painPoints.subtitle')}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {painPoints.map((point, index) => (
              <Card key={index} className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${point.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <point.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-red-600 mb-3">
                    {point.problem}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <CardDescription className="text-gray-700 text-center leading-relaxed font-medium">
                    {point.solution}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('differentials.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t('differentials.subtitle')}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {differentials.map((differential, index) => (
              <div key={index} className="text-center space-y-6 group">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-[#4141e1] to-[#6366f1] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <differential.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {differential.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {differential.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Testimonial */}
          <div className="bg-gradient-to-br from-[#4141e1]/5 to-[#6366f1]/5 rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-lg border border-[#4141e1]/10">
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
      <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {t('pricing.subtitle')}
            </p>
            
            {/* Pricing Toggle */}
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
              <button
                onClick={() => setShowAnnualPricing(false)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                  !showAnnualPricing 
                    ? 'bg-[#4141e1] text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {t('pricing.monthly')}
              </button>
              <button
                onClick={() => setShowAnnualPricing(true)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all relative ${
                  showAnnualPricing 
                    ? 'bg-[#4141e1] text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {t('pricing.annual')}
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  -25%
                </span>
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-white border-2 border-gray-100 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-8 pt-12 bg-gradient-to-br from-gray-50 to-white">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {t('pricing.basic.name')}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-8 text-lg">
                  {t('pricing.basic.description')}
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    {showAnnualPricing && (
                      <span className="text-2xl text-gray-400 line-through font-medium">
                        R$ 304
                      </span>
                    )}
                    <div className="text-5xl font-bold text-[#4141e1]">
                      {showAnnualPricing ? 'R$ 228' : 'R$ 19'}
                      <span className="text-xl font-normal text-gray-500">
                        {showAnnualPricing ? '/ano' : '/mês'}
                      </span>
                    </div>
                  </div>
                  {showAnnualPricing && (
                    <div className="text-sm text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full inline-block">
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
                  className="w-full bg-gradient-to-r from-[#4141e1] to-[#6366f1] hover:opacity-90 text-white font-bold py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={() => window.location.href = '/checkout?plan=basico'}
                >
                  {t('pricing.basic.cta')}
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Plan */}
            <Card className="bg-white border-2 border-[#4141e1] shadow-2xl rounded-3xl overflow-hidden relative transform scale-105 hover:scale-110 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-[#4141e1] to-[#6366f1] text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-lg">
                  ⭐ {t('pricing.popular')}
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
                  <div className="flex items-center justify-center gap-2">
                    {showAnnualPricing && (
                      <span className="text-2xl text-gray-400 line-through font-medium">
                        R$ 948
                      </span>
                    )}
                    <div className="text-5xl font-bold text-[#4141e1]">
                      {showAnnualPricing ? 'R$ 708' : 'R$ 49'}
                      <span className="text-xl font-normal text-gray-500">
                        {showAnnualPricing ? '/ano' : '/mês'}
                      </span>
                    </div>
                  </div>
                  {showAnnualPricing && (
                    <div className="text-sm text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full inline-block">
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
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-[#4141e1] to-[#6366f1] hover:opacity-90 text-white font-bold py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse"
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
      <section className="py-24 bg-gradient-to-br from-[#4141e1] via-[#5b5bf6] to-[#6366f1] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold">
                {t('finalCta.title')}
              </h2>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                {t('finalCta.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <Button
                className="bg-white text-[#4141e1] hover:bg-blue-50 font-bold px-12 py-8 text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex-1 sm:flex-initial animate-pulse"
                onClick={() => window.location.href = '/cadastro'}
              >
                {t('finalCta.primary')}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-bold px-12 py-8 text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 flex-1 sm:flex-initial"
                onClick={() => window.open('https://wa.me/5545999999999?text=Quero transformar meu negócio com o Lojix App!', '_blank')}
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                {t('finalCta.secondary')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#4141e1] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Lojix App</h3>
              <p className="text-blue-100 mb-4">
                {t('footer.tagline')}
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/lojixapp" className="text-blue-200 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="https://facebook.com/lojixapp" className="text-blue-200 hover:text-white transition-colors">
                  Facebook
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.links')}</h4>
              <div className="space-y-2">
                <a href="/about" className="block text-blue-200 hover:text-white transition-colors">
                  {t('footer.about')}
                </a>
                <a href="#features" className="block text-blue-200 hover:text-white transition-colors">
                  {t('footer.features')}
                </a>
                <a href="#pricing" className="block text-blue-200 hover:text-white transition-colors">
                  {t('footer.pricing')}
                </a>
                <a href="/privacy" className="block text-blue-200 hover:text-white transition-colors">
                  {t('footer.privacy')}
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
              <div className="space-y-2 text-blue-200">
                <p>contato@lojixapp.com</p>
                <a 
                  href="https://wa.me/5545999999999" 
                  className="block hover:text-white transition-colors"
                >
                  WhatsApp: +55 45 99999-9999
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-blue-100">
              © 2024 Lojix App. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
