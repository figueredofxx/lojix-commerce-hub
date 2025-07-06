
import { Button } from '@/components/ui/button';
import { Rocket, Store, TrendingUp } from 'lucide-react';

interface WelcomeStepProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4ECDC4' }}>
          <Rocket className="w-10 h-10 text-white" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">
          Bem-vindo ao Lojix!
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          Vamos configurar seu sistema de gestão em poucos minutos. 
          O Lojix foi desenvolvido para simplificar a gestão do seu negócio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="text-center p-4">
          <Store className="w-12 h-12 mx-auto mb-3" style={{ color: '#1A535C' }} />
          <h4 className="font-semibold text-gray-800">Gestão Completa</h4>
          <p className="text-sm text-gray-600">Produtos, estoque, vendas e clientes em um só lugar</p>
        </div>
        <div className="text-center p-4">
          <TrendingUp className="w-12 h-12 mx-auto mb-3" style={{ color: '#1A535C' }} />
          <h4 className="font-semibold text-gray-800">Relatórios Inteligentes</h4>
          <p className="text-sm text-gray-600">Acompanhe o desempenho do seu negócio</p>
        </div>
        <div className="text-center p-4">
          <Rocket className="w-12 h-12 mx-auto mb-3" style={{ color: '#1A535C' }} />
          <h4 className="font-semibold text-gray-800">Fácil de Usar</h4>
          <p className="text-sm text-gray-600">Interface intuitiva e moderna</p>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          💡 <strong>Dica:</strong> Tenha em mãos as informações básicas do seu negócio para agilizar o processo.
        </p>
      </div>

      <Button 
        onClick={onNext}
        size="lg"
        className="w-full"
        style={{ backgroundColor: '#1A535C' }}
      >
        Começar Configuração
      </Button>
    </div>
  );
}
