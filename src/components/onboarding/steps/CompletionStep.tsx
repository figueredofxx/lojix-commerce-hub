
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

interface CompletionStepProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function CompletionStep({ }: CompletionStepProps) {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-green-500">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">
          Parabéns! Configuração Concluída
        </h3>
        <p className="text-gray-600 text-lg">
          Seu sistema Lojix está pronto para uso. Agora você pode começar a gerenciar seu negócio.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-4">O que você pode fazer agora:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="flex items-start space-x-3">
            <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
            <div>
              <p className="font-medium text-gray-800">Adicionar mais produtos</p>
              <p className="text-sm text-gray-600">Expanda seu catálogo</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
            <div>
              <p className="font-medium text-gray-800">Fazer sua primeira venda</p>
              <p className="text-sm text-gray-600">Use o PDV integrado</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
            <div>
              <p className="font-medium text-gray-800">Cadastrar clientes</p>
              <p className="text-sm text-gray-600">Gerencie sua base de clientes</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
            <div>
              <p className="font-medium text-gray-800">Ver relatórios</p>
              <p className="text-sm text-gray-600">Acompanhe seu desempenho</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Button 
          onClick={goToDashboard}
          size="lg"
          className="w-full"
          style={{ backgroundColor: '#1A535C' }}
        >
          Ir para o Dashboard
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <p className="text-sm text-gray-500">
          Precisa de ajuda? Acesse nossa central de suporte a qualquer momento.
        </p>
      </div>
    </div>
  );
}
