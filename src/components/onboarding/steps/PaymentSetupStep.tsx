
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { CreditCard, Banknote, Smartphone, PiggyBank } from 'lucide-react';

interface PaymentSetupStepProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

export function PaymentSetupStep({ onNext }: PaymentSetupStepProps) {
  const [selectedMethods, setSelectedMethods] = useState<string[]>(['dinheiro']);

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'dinheiro',
      name: 'Dinheiro',
      icon: <Banknote className="w-6 h-6" />,
      description: 'Pagamentos em espécie'
    },
    {
      id: 'cartao-credito',
      name: 'Cartão de Crédito',
      icon: <CreditCard className="w-6 h-6" />,
      description: 'Visa, Mastercard, etc.'
    },
    {
      id: 'cartao-debito',
      name: 'Cartão de Débito',
      icon: <CreditCard className="w-6 h-6" />,
      description: 'Débito em conta'
    },
    {
      id: 'pix',
      name: 'PIX',
      icon: <Smartphone className="w-6 h-6" />,
      description: 'Pagamento instantâneo'
    },
    {
      id: 'fiado',
      name: 'Fiado/Crediário',
      icon: <PiggyBank className="w-6 h-6" />,
      description: 'Vendas a prazo'
    }
  ];

  const togglePaymentMethod = (methodId: string) => {
    setSelectedMethods(prev => {
      if (prev.includes(methodId)) {
        return prev.filter(id => id !== methodId);
      } else {
        return [...prev, methodId];
      }
    });
  };

  const handleContinue = () => {
    console.log('Métodos de pagamento selecionados:', selectedMethods);
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4ECDC4' }}>
            <CreditCard className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Formas de Pagamento</h3>
        <p className="text-gray-600">Selecione as formas de pagamento que você aceita</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {paymentMethods.map((method) => (
          <Card 
            key={method.id} 
            className={`cursor-pointer transition-all ${
              selectedMethods.includes(method.id) 
                ? 'ring-2 ring-blue-500 bg-blue-50' 
                : 'hover:bg-gray-50'
            }`}
            onClick={() => togglePaymentMethod(method.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <Checkbox
                  checked={selectedMethods.includes(method.id)}
                  onChange={() => togglePaymentMethod(method.id)}
                />
                <div className="flex-shrink-0 text-gray-600">
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{method.name}</h4>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <p className="text-sm text-green-800">
          ✅ Você pode adicionar ou remover formas de pagamento a qualquer momento nas configurações.
        </p>
      </div>

      <Button 
        onClick={handleContinue}
        disabled={selectedMethods.length === 0}
        className="w-full"
        style={{ backgroundColor: '#1A535C' }}
      >
        Continuar
      </Button>
    </div>
  );
}
