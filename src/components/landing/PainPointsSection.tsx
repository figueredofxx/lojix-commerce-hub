
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Package, Globe, CreditCard, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PainPointsSection = () => {
  const { t } = useTranslation();

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

  return (
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
  );
};

export default PainPointsSection;
