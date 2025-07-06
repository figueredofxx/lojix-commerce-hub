
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingCart, Users, TrendingUp, DollarSign, AlertTriangle } from 'lucide-react';

export function OverviewPage() {
  const stats = [
    {
      title: 'Produtos em Estoque',
      value: '143',
      description: '12 vendidos hoje',
      icon: Package,
      color: '#1A535C'
    },
    {
      title: 'Vendas do Mês',
      value: 'R$ 8.450',
      description: '+23% vs mês anterior',
      icon: DollarSign,
      color: '#4ECDC4'
    },
    {
      title: 'Clientes Ativos',
      value: '89',
      description: '5 novos esta semana',
      icon: Users,
      color: '#FF9F1C'
    },
    {
      title: 'Margem Média',
      value: '35%',
      description: 'Baseado em vendas recentes',
      icon: TrendingUp,
      color: '#1A535C'
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="px-2 sm:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Visão Geral</h1>
        <p className="text-gray-600 text-sm sm:text-base">Acompanhe o desempenho do seu negócio</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-sm bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: stat.color }} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#FF9F1C' }} />
              Alertas de Estoque
            </CardTitle>
            <CardDescription className="text-sm">Produtos com baixo estoque</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'iPhone 13 Pro Max', stock: 2, serial: 'IP13PM001' },
                { name: 'AirPods Pro', stock: 1, serial: 'APP002' },
                { name: 'Samsung Galaxy S23', stock: 3, serial: 'SGS23005' }
              ].map((product, index) => (
                <div key={index} className="flex justify-between items-center p-2 sm:p-3 bg-orange-50 rounded-lg">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm sm:text-base truncate">{product.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">Série: {product.serial}</p>
                  </div>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs sm:text-sm rounded whitespace-nowrap ml-2">
                    {product.stock} unidades
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Vendas Recentes</CardTitle>
            <CardDescription className="text-sm">Últimas transações realizadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { customer: 'Maria Silva', product: 'iPhone 14', value: 'R$ 3.200', time: '10:30' },
                { customer: 'João Santos', product: 'Galaxy Buds', value: 'R$ 450', time: '09:15' },
                { customer: 'Ana Costa', product: 'Xiaomi Mi Band', value: 'R$ 180', time: '08:45' }
              ].map((sale, index) => (
                <div key={index} className="flex justify-between items-center p-2 sm:p-3 bg-green-50 rounded-lg">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm sm:text-base truncate">{sale.customer}</p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">{sale.product}</p>
                  </div>
                  <div className="text-right ml-2">
                    <p className="font-medium text-sm sm:text-base" style={{ color: '#1A535C' }}>{sale.value}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{sale.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
