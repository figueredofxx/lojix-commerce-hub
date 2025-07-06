
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Plus, Minus, User, Receipt, CreditCard } from 'lucide-react';

export function POSPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState('');

  const availableProducts = [
    { id: 1, serial: 'IP14PM001', model: 'iPhone 14 Pro Max', price: 3200, purchasePrice: 2800 },
    { id: 2, serial: 'SGS23001', model: 'Samsung Galaxy S23', price: 2800, purchasePrice: 2200 },
    { id: 3, serial: 'APP2001', model: 'AirPods Pro 2', price: 450, purchasePrice: 320 },
    { id: 4, serial: 'APP2003', model: 'AirPods Pro 2', price: 450, purchasePrice: 325 },
  ];

  const customers = [
    { id: 1, name: 'Maria Silva', whatsapp: '(45) 99999-1111', email: 'maria@email.com' },
    { id: 2, name: 'João Santos', whatsapp: '(45) 99999-2222', email: 'joao@email.com' },
    { id: 3, name: 'Ana Costa', whatsapp: '(45) 99999-3333', email: 'ana@email.com' },
  ];

  const addToCart = (product: any) => {
    const existingItem = cart.find(item => item.serial === product.serial);
    if (!existingItem) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (serial: string) => {
    setCart(cart.filter(item => item.serial !== serial));
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalProfit = () => {
    return cart.reduce((total, item) => total + ((item.price - item.purchasePrice) * item.quantity), 0);
  };

  const handleFinalizeSale = () => {
    if (cart.length === 0 || !selectedCustomer || !paymentMethod) {
      alert('Preencha todos os campos para finalizar a venda');
      return;
    }
    
    // Aqui integraria com o backend para processar a venda
    console.log('Venda finalizada:', {
      customer: selectedCustomer,
      items: cart,
      total: getTotalAmount(),
      profit: getTotalProfit(),
      paymentMethod
    });
    
    // Reset do carrinho
    setCart([]);
    setSelectedCustomer(null);
    setPaymentMethod('');
    
    alert('Venda realizada com sucesso! Recibo será gerado.');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      {/* Produtos Disponíveis */}
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Ponto de Venda</h1>
          <p className="text-gray-600">Selecione os produtos para adicionar à venda</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Produtos Disponíveis</CardTitle>
            <CardDescription>Clique nos produtos para adicionar ao carrinho</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableProducts.map((product) => (
                <div
                  key={product.serial}
                  className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => addToCart(product)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{product.model}</h3>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                        {product.serial}
                      </code>
                    </div>
                    <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      Compra: R$ {product.purchasePrice.toLocaleString()}
                    </span>
                    <span className="font-bold" style={{ color: '#1A535C' }}>
                      R$ {product.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-1">
                    <Badge variant="secondary" className="text-xs">
                      Lucro: R$ {(product.price - product.purchasePrice).toLocaleString()}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Carrinho e Finalização */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Carrinho ({cart.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                Carrinho vazio.<br />Adicione produtos para iniciar a venda.
              </p>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div key={item.serial} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.model}</p>
                      <code className="text-xs text-gray-600">{item.serial}</code>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">R$ {item.price.toLocaleString()}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.serial)}
                        className="text-red-600 hover:text-red-700 p-1"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {cart.length > 0 && (
          <>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Cliente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {customers.map((customer) => (
                    <div
                      key={customer.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedCustomer?.id === customer.id
                          ? 'bg-blue-50 border-blue-200'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedCustomer(customer)}
                    >
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-sm text-gray-600">{customer.whatsapp}</p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Novo Cliente
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['Dinheiro', 'PIX', 'Cartão Débito', 'Cartão Crédito'].map((method) => (
                    <div
                      key={method}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        paymentMethod === method
                          ? 'bg-blue-50 border-blue-200'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setPaymentMethod(method)}
                    >
                      <p className="font-medium">{method}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-medium">R$ {getTotalAmount().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Lucro Total:</span>
                    <span className="font-medium">R$ {getTotalProfit().toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span style={{ color: '#1A535C' }}>R$ {getTotalAmount().toLocaleString()}</span>
                  </div>
                </div>
                
                <Button
                  className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={handleFinalizeSale}
                  disabled={!selectedCustomer || !paymentMethod}
                >
                  <Receipt className="w-4 h-4 mr-2" />
                  Finalizar Venda
                </Button>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
