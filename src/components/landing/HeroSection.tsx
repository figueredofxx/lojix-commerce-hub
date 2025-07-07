
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
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
  );
};

export default HeroSection;
