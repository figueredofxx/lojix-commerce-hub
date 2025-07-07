
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTASection = () => {
  const { t } = useTranslation();

  return (
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
  );
};

export default FinalCTASection;
