
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Store, BarChart3, Users } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const startOnboarding = () => {
    navigate('/onboarding');
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1A535C' }}>
              <span className="text-white font-bold text-2xl">L</span>
            </div>
            <h1 className="text-5xl font-bold" style={{ color: '#1A535C' }}>Lojix</h1>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            O sistema completo para gerenciar seu negócio
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Controle produtos, estoque, vendas, clientes e muito mais em uma plataforma simples e intuitiva.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4ECDC4' }}>
              <Store className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A535C' }}>
              Gestão Completa
            </h3>
            <p className="text-gray-600">
              Produtos, estoque, PDV e controle financeiro integrados
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4ECDC4' }}>
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A535C' }}>
              Relatórios Inteligentes
            </h3>
            <p className="text-gray-600">
              Dashboards e relatórios para acompanhar seu desempenho
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4ECDC4' }}>
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A535C' }}>
              CRM Integrado
            </h3>
            <p className="text-gray-600">
              Gerencie clientes e relacionamentos de forma eficiente
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <Button 
              onClick={startOnboarding}
              size="lg"
              className="text-lg px-8 py-3"
              style={{ backgroundColor: '#1A535C' }}
            >
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="text-center">
              <p className="text-gray-500 mb-2">Já tem uma conta?</p>
              <Button 
                variant="outline"
                onClick={goToDashboard}
                className="text-sm"
              >
                Ir para o Dashboard
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm max-w-md mx-auto">
            <h4 className="font-semibold mb-3" style={{ color: '#1A535C' }}>
              Configuração em 5 minutos
            </h4>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li>✓ Informações básicas do negócio</li>
              <li>✓ Cadastro de produtos iniciais</li>
              <li>✓ Configuração de formas de pagamento</li>
              <li>✓ Pronto para usar!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
