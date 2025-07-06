
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, AlertCircle, Calendar, Package } from 'lucide-react';

export function ForecastPage() {
  const forecastData = [
    {
      product: 'iPhone 14 Pro Max',
      currentStock: 2,
      avgMonthlySales: 4.5,
      seasonalityFactor: 1.2, // Black Friday próxima
      suggestedImport: 8,
      trend: 'up',
      daysUntilStockout: 13,
      category: 'Smartphones'
    },
    {
      product: 'Samsung Galaxy S23',
      currentStock: 2,
      avgMonthlySales: 3.2,
      seasonalityFactor: 1.0,
      suggestedImport: 5,
      trend: 'stable',
      daysUntilStockout: 18,
      category: 'Smartphones'
    },
    {
      product: 'AirPods Pro 2',
      currentStock: 2,
      avgMonthlySales: 6.8,
      seasonalityFactor: 1.3, // Alta demanda no fim do ano
      suggestedImport: 12,
      trend: 'up',
      daysUntilStockout: 9,
      category: 'Acessórios'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-600" />;
      default: return <TrendingUp className="w-4 h-4 text-gray-600" />;
    }
  };

  const getPriorityColor = (days: number) => {
    if (days <= 10) return 'bg-red-100 text-red-800 border-red-200';
    if (days <= 20) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-green-100 text-green-800 border-green-200';
  };

  const totalSuggestedImport = forecastData.reduce((sum, item) => sum + item.suggestedImport, 0);
  const criticalItems = forecastData.filter(item => item.daysUntilStockout <= 10).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Previsão de Demanda</h1>
        <p className="text-gray-600">Otimize suas importações com base no histórico de vendas</p>
      </div>

      {/* Resumo Executivo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#FF9F1C' }}>
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">{criticalItems}</p>
                <p className="text-sm text-gray-600">Itens Críticos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#1A535C' }}>
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalSuggestedImport}</p>
                <p className="text-sm text-gray-600">Unid. Sugeridas</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#4ECDC4' }}>
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">30</p>
                <p className="text-sm text-gray-600">Dias Análise</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-600">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">+15%</p>
                <p className="text-sm text-gray-600">Sazonalidade</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Previsões Detalhadas */}
      <Card>
        <CardHeader>
          <CardTitle>Sugestões de Importação</CardTitle>
          <CardDescription>
            Baseado na média de vendas dos últimos 30-90 dias e fatores sazonais
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {forecastData.map((item, index) => (
              <Card key={index} className="border-l-4" style={{ borderLeftColor: '#4ECDC4' }}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-sm" 
                           style={{ backgroundColor: '#1A535C' }}>
                        {item.product.split(' ').map(word => word[0]).join('').slice(0, 3)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.product}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <Badge variant="secondary">{item.category}</Badge>
                          <div className="flex items-center gap-1">
                            {getTrendIcon(item.trend)}
                            <span className="text-sm text-gray-600">
                              {item.avgMonthlySales.toFixed(1)} vendas/mês
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(item.daysUntilStockout)}`}>
                        {item.daysUntilStockout} dias restantes
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Estoque Atual</p>
                      <p className="text-xl font-bold" style={{ color: '#1A535C' }}>
                        {item.currentStock}
                      </p>
                    </div>
                    
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600">Média Mensal</p>
                      <p className="text-xl font-bold" style={{ color: '#4ECDC4' }}>
                        {item.avgMonthlySales.toFixed(1)}
                      </p>
                    </div>
                    
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-gray-600">Fator Sazonal</p>
                      <p className="text-xl font-bold" style={{ color: '#FF9F1C' }}>
                        {item.seasonalityFactor}x
                      </p>
                    </div>
                    
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-600">Sugestão Import.</p>
                      <p className="text-xl font-bold text-green-600">
                        {item.suggestedImport}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <Button 
                        size="sm" 
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        Adicionar Lista
                      </Button>
                    </div>
                  </div>

                  {item.daysUntilStockout <= 10 && (
                    <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600" />
                        <p className="font-medium text-red-800">Atenção: Estoque Crítico!</p>
                      </div>
                      <p className="text-sm text-red-700 mt-1">
                        Este produto pode esgotar em menos de 10 dias. Considere importar urgentemente.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Configurações de Sazonalidade */}
      <Card>
        <CardHeader>
          <CardTitle>Fatores Sazonais</CardTitle>
          <CardDescription>Configure multiplicadores para períodos específicos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Black Friday</h3>
                <Badge className="bg-purple-100 text-purple-800">Nov 24</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Multiplicador: <span className="font-bold">1.5x</span>
              </p>
              <p className="text-xs text-gray-500">
                Aumento de 50% na demanda esperada durante a Black Friday
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Natal</h3>
                <Badge className="bg-red-100 text-red-800">Dez 25</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Multiplicador: <span className="font-bold">1.3x</span>
              </p>
              <p className="text-xs text-gray-500">
                Aumento de 30% na demanda durante o período natalino
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Dia das Mães</h3>
                <Badge className="bg-pink-100 text-pink-800">Mai 12</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Multiplicador: <span className="font-bold">1.2x</span>
              </p>
              <p className="text-xs text-gray-500">
                Aumento de 20% na demanda próximo ao Dia das Mães
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
