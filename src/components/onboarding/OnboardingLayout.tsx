
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { WelcomeStep } from './steps/WelcomeStep';
import { BusinessInfoStep } from './steps/BusinessInfoStep';
import { ProductSetupStep } from './steps/ProductSetupStep';
import { PaymentSetupStep } from './steps/PaymentSetupStep';
import { CompletionStep } from './steps/CompletionStep';

const steps = [
  { id: 1, title: 'Boas-vindas', component: WelcomeStep },
  { id: 2, title: 'Informações do Negócio', component: BusinessInfoStep },
  { id: 3, title: 'Configurar Produtos', component: ProductSetupStep },
  { id: 4, title: 'Configurar Pagamentos', component: PaymentSetupStep },
  { id: 5, title: 'Finalização', component: CompletionStep },
];

export function OnboardingLayout() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCompletedSteps(prev => [...prev, currentStep]);
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleStepClick = (stepId: number) => {
    if (stepId <= currentStep || completedSteps.includes(stepId)) {
      setCurrentStep(stepId);
    }
  };

  const CurrentStepComponent = steps.find(step => step.id === currentStep)?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1A535C' }}>
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <h1 className="text-3xl font-bold" style={{ color: '#1A535C' }}>Lojix</h1>
          </div>
          <p className="text-gray-600">Vamos configurar seu sistema em poucos passos</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => handleStepClick(step.id)}
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                    completedSteps.includes(step.id)
                      ? 'bg-green-500 border-green-500 text-white'
                      : currentStep === step.id
                      ? 'border-blue-500 text-blue-500 bg-blue-50'
                      : 'border-gray-300 text-gray-400'
                  }`}
                  disabled={step.id > currentStep && !completedSteps.includes(step.id)}
                >
                  {completedSteps.includes(step.id) ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <span className="font-semibold">{step.id}</span>
                  )}
                </button>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 h-0.5 mx-2 ${
                      completedSteps.includes(step.id) ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {steps.find(step => step.id === currentStep)?.title}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Passo {currentStep} de {steps.length}
          </p>
        </div>

        {/* Step Content */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardContent className="p-8">
            {CurrentStepComponent && (
              <CurrentStepComponent 
                onNext={handleNext}
                onPrevious={handlePrevious}
                isFirst={currentStep === 1}
                isLast={currentStep === steps.length}
              />
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Anterior
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentStep === steps.length}
            style={{ backgroundColor: '#1A535C' }}
            className="hover:bg-opacity-90"
          >
            {currentStep === steps.length ? 'Finalizar' : 'Próximo'}
          </Button>
        </div>
      </div>
    </div>
  );
}
