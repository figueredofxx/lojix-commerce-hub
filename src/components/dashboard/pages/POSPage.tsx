
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Plus, Minus, User, Receipt, CreditCard, Search, ArrowLeft, ArrowRight } from 'lucide-react';

export function POSPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [cart, setCart] = useState<any[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [productSearch, setProductSearch] = useState('');
  const [customerSearch, setCustomerSearch] = useState('');

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

  const filteredProducts = availableProducts.filter(product =>
    product.model.toLowerCase().includes(productSearch.toLowerCase()) ||
    product.serial.toLowerCase().includes(productSearch.toLowerCase())
  );

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(customerSearch.toLowerCase()) ||
    customer.whatsapp.includes(customerSearch)
  );

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
    
    console.log('Venda finalizada:', {
      customer: selectedCustomer,
      items: cart,
      total: getTotalAmount(),
      profit: getTotalProfit(),
      paymentMethod
    });
    
    // Reset
    setCart([]);
    setSelectedCustomer(null);
    setPaymentMethod('');
    setCurrentStep(1);
    
    alert('Venda realizada com sucesso! Recibo será gerado.');
  };

  const canProceedToStep2 = cart.length > 0;
  const canProceedToStep3 = selectedCustomer !== null;
  const canFinalize = paymentMethod !== '';

  const steps = [
    { id: 1, title: 'Produtos', description: 'Selecione os produtos' },
    { id: 2, title: 'Cliente', description: 'Escolha o cliente' },
    { id: 3, title: 'Pagamento', description: 'Método de pagamento' },
    { id: 4, title: 'Finalizar', description: 'Confirmar venda' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Ponto de Venda</h1>
        <p className="text-gray-600">Sistema de vendas multi-etapas</p>
      </div>

      {/* Progress Steps */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep >= step.id ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.id}
                </div>
                <div className="ml-2">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-teal-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-400">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-teal-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Produtos Disponíveis</CardTitle>
                <CardDescription>Pesquise e adicione produtos ao carrinho</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Buscar por nome do produto ou código..."
                      value={productSearch}
                      onChange={(e) => setProductSearch(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                    {filteredProducts.map((product) => (
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
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Selecionar Cliente
                </CardTitle>
                <CardDescription>Pesquise e escolha o cliente para esta venda</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Buscar por nome ou WhatsApp..."
                      value={customerSearch}
                      onChange={(e) => setCustomerSearch(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {filteredCustomers.map((customer) => (
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
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Método de Pagamento
                </CardTitle>
                <CardDescription>Selecione como o cliente irá pagar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {['Dinheiro', 'PIX', 'Cartão Débito', 'Cartão Crédito'].map((method) => (
                    <div
                      key={method}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors text-center ${
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
          )}

          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Confirmar Venda</CardTitle>
                <CardDescription>Revise os dados antes de finalizar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cliente</h4>
                    <p>{selectedCustomer?.name}</p>
                    <p className="text-sm text-gray-600">{selectedCustomer?.whatsapp}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Produtos</h4>
                    <div className="space-y-2">
                      {cart.map((item) => (
                        <div key={item.serial} className="flex justify-between">
                          <span>{item.model} ({item.serial})</span>
                          <span>R$ {item.price.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Pagamento</h4>
                    <p>{paymentMethod}</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Total:</span>
                      <span className="font-bold">R$ {getTotalAmount().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Lucro:</span>
                      <span className="font-bold">R$ {getTotalProfit().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar - Cart and Controls */}
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
                  Carrinho vazio
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
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span className="font-bold">R$ {getTotalAmount().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Lucro:</span>
                    <span className="font-bold">R$ {getTotalProfit().toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Controls */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-2">
                {currentStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="flex-1"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Button>
                )}
                
                {currentStep < 4 && (
                  <Button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={
                      (currentStep === 1 && !canProceedToStep2) ||
                      (currentStep === 2 && !canProceedToStep3) ||
                      (currentStep === 3 && !canFinalize)
                    }
                    className="flex-1 bg-teal-500 hover:bg-teal-600"
                  >
                    Próximo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
                
                {currentStep === 4 && (
                  <Button
                    onClick={handleFinalizeSale}
                    className="flex-1 bg-orange-500 hover:bg-orange-600"
                  >
                    <Receipt className="w-4 h-4 mr-2" />
                    Finalizar Venda
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
