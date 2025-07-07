
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PricingSection = () => {
  const { t } = useTranslation();
  const [showAnnualPricing, setShowAnnualPricing] = useState(false);

  const basicFeatures = t('pricing.basic.features', { returnObjects: true }) as string[];
  const advancedFeatures = t('pricing.advanced.features', { returnObjects: true }) as string[];

  return (
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
  );
};

export default PricingSection;
