
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Plus, X } from 'lucide-react';

interface ProductSetupStepProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

interface Product {
  id: string;
  name: string;
  price: string;
  quantity: string;
}

export function ProductSetupStep({ onNext }: ProductSetupStepProps) {
  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: '', price: '', quantity: '' }
  ]);

  const addProduct = () => {
    const newProduct: Product = {
      id: Date.now().toString(),
      name: '',
      price: '',
      quantity: ''
    };
    setProducts([...products, newProduct]);
  };

  const removeProduct = (id: string) => {
    if (products.length > 1) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const updateProduct = (id: string, field: keyof Product, value: string) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const handleContinue = () => {
    const validProducts = products.filter(p => p.name && p.price);
    console.log('Produtos cadastrados:', validProducts);
    onNext();
  };

  const canContinue = products.some(p => p.name && p.price);

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4ECDC4' }}>
            <Package className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Cadastre seus Primeiros Produtos</h3>
        <p className="text-gray-600">Adicione alguns produtos para começar</p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-sm text-blue-800">
          💡 Não se preocupe! Você pode adicionar mais produtos depois no sistema.
        </p>
      </div>

      <div className="space-y-4">
        {products.map((product, index) => (
          <Card key={product.id}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Produto {index + 1}</CardTitle>
                {products.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeProduct(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor={`name-${product.id}`}>Nome do Produto *</Label>
                <Input
                  id={`name-${product.id}`}
                  placeholder="Ex: Camiseta Básica"
                  value={product.name}
                  onChange={(e) => updateProduct(product.id, 'name', e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`price-${product.id}`}>Preço de Venda *</Label>
                  <Input
                    id={`price-${product.id}`}
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    value={product.price}
                    onChange={(e) => updateProduct(product.id, 'price', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`quantity-${product.id}`}>Quantidade Inicial</Label>
                  <Input
                    id={`quantity-${product.id}`}
                    type="number"
                    placeholder="0"
                    value={product.quantity}
                    onChange={(e) => updateProduct(product.id, 'quantity', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        variant="outline"
        onClick={addProduct}
        className="w-full"
      >
        <Plus className="w-4 h-4 mr-2" />
        Adicionar Outro Produto
      </Button>

      <div className="space-y-2">
        <Button 
          onClick={handleContinue}
          disabled={!canContinue}
          className="w-full"
          style={{ backgroundColor: '#1A535C' }}
        >
          Continuar
        </Button>
        
        {!canContinue && (
          <p className="text-sm text-red-600 text-center">
            Adicione pelo menos um produto com nome e preço
          </p>
        )}
      </div>
    </div>
  );
}
