
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Package, Edit, Trash2 } from 'lucide-react';

export function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      model: 'iPhone 14 Pro Max',
      category: 'Smartphones',
      units: [
        { serial: 'IP14PM001', purchasePrice: 2800, status: 'Disponível' },
        { serial: 'IP14PM002', purchasePrice: 2750, status: 'Vendido' },
        { serial: 'IP14PM003', purchasePrice: 2820, status: 'Disponível' }
      ],
      suggestedPrice: 3200,
      image: 'https://placehold.co/80x80/1A535C/4ECDC4?text=iPhone'
    },
    {
      id: 2,
      model: 'Samsung Galaxy S23',
      category: 'Smartphones',
      units: [
        { serial: 'SGS23001', purchasePrice: 2200, status: 'Disponível' },
        { serial: 'SGS23002', purchasePrice: 2150, status: 'Disponível' }
      ],
      suggestedPrice: 2800,
      image: 'https://placehold.co/80x80/1A535C/4ECDC4?text=Galaxy'
    },
    {
      id: 3,
      model: 'AirPods Pro 2',
      category: 'Acessórios',
      units: [
        { serial: 'APP2001', purchasePrice: 320, status: 'Disponível' },
        { serial: 'APP2002', purchasePrice: 310, status: 'Vendido' },
        { serial: 'APP2003', purchasePrice: 325, status: 'Disponível' },
        { serial: 'APP2004', purchasePrice: 315, status: 'Disponível' }
      ],
      suggestedPrice: 450,
      image: 'https://placehold.co/80x80/1A535C/4ECDC4?text=AirPods'
    }
  ];

  const filteredProducts = products.filter(product =>
    product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getAvailableCount = (units: any[]) => {
    return units.filter(unit => unit.status === 'Disponível').length;
  };

  const getAveragePurchasePrice = (units: any[]) => {
    const availableUnits = units.filter(unit => unit.status === 'Disponível');
    if (availableUnits.length === 0) return 0;
    const total = availableUnits.reduce((sum, unit) => sum + unit.purchasePrice, 0);
    return total / availableUnits.length;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventário</h1>
          <p className="text-gray-600">Gerencie seus produtos e controle serializado</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Produto
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Buscar por modelo ou categoria..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <img
                    src={product.image}
                    alt={product.model}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <CardTitle className="text-xl">{product.model}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">{product.category}</Badge>
                      <span>•</span>
                      <span className="text-sm">
                        {getAvailableCount(product.units)} disponível(is) de {product.units.length} total
                      </span>
                    </CardDescription>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Preço de Venda Sugerido</p>
                  <p className="text-xl font-bold" style={{ color: '#1A535C' }}>
                    R$ {product.suggestedPrice.toLocaleString()}
                  </p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600">Preço de Compra Médio</p>
                  <p className="text-xl font-bold" style={{ color: '#4ECDC4' }}>
                    R$ {getAveragePurchasePrice(product.units).toLocaleString()}
                  </p>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600">Margem Estimada</p>
                  <p className="text-xl font-bold" style={{ color: '#FF9F1C' }}>
                    {Math.round(((product.suggestedPrice - getAveragePurchasePrice(product.units)) / product.suggestedPrice) * 100)}%
                  </p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Unidades Serializadas
                </h4>
                <div className="space-y-2">
                  {product.units.map((unit, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">
                          {unit.serial}
                        </code>
                        <Badge
                          variant={unit.status === 'Disponível' ? 'default' : 'secondary'}
                          className={unit.status === 'Disponível' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {unit.status}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">R$ {unit.purchasePrice.toLocaleString()}</p>
                        <p className="text-sm text-gray-500">Preço de compra</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
