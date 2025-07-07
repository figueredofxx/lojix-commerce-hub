
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, Zap, Shield, BarChart3, Star } from 'lucide-react';

const DifferentialsSection = () => {
  const { t } = useTranslation();

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

  return (
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
  );
};

export default DifferentialsSection;
