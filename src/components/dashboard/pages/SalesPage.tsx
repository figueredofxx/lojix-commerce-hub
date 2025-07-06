
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Printer, Eye, Calendar, DollarSign } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export function SalesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSale, setSelectedSale] = useState<any>(null);

  const sales = [
    {
      id: 'V001',
      date: '2024-01-15',
      time: '14:30',
      customer: {
        name: 'Maria Silva',
        whatsapp: '(45) 99999-1111',
        email: 'maria@email.com'
      },
      items: [
        { serial: 'IP14PM001', model: 'iPhone 14 Pro Max', price: 3200, purchasePrice: 2800 }
      ],
      total: 3200,
      profit: 400,
      paymentMethod: 'PIX',
      status: 'Finalizada'
    },
    {
      id: 'V002',
      date: '2024-01-15',
      time: '10:15',
      customer: {
        name: 'João Santos',
        whatsapp: '(45) 99999-2222',
        email: 'joao@email.com'
      },
      items: [
        { serial: 'APP2001', model: 'AirPods Pro 2', price: 450, purchasePrice: 320 },
        { serial: 'APP2003', model: 'AirPods Pro 2', price: 450, purchasePrice: 325 }
      ],
      total: 900,
      profit: 255,
      paymentMethod: 'Cartão Crédito',
      status: 'Finalizada'
    },
    {
      id: 'V003',
      date: '2024-01-14',
      time: '16:45',
      customer: {
        name: 'Ana Costa',
        whatsapp: '(45) 99999-3333',
        email: 'ana@email.com'
      },
      items: [
        { serial: 'SGS23001', model: 'Samsung Galaxy S23', price: 2800, purchasePrice: 2200 }
      ],
      total: 2800,
      profit: 600,
      paymentMethod: 'Dinheiro',
      status: 'Finalizada'
    }
  ];

  const filteredSales = sales.filter(sale =>
    sale.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sale.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sale.items.some(item => item.model.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handlePrintSale = (sale: any) => {
    console.log('Imprimindo venda:', sale.id);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="px-2 sm:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Lista de Vendas</h1>
        <p className="text-gray-600 text-sm sm:text-base">Consulte e gerencie todas as vendas realizadas</p>
      </div>

      <div className="flex gap-4 px-2 sm:px-0">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Buscar por número da venda, cliente ou produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredSales.map((sale) => (
          <Card key={sale.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="space-y-2 min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <CardTitle className="text-lg">Venda #{sale.id}</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 w-fit">
                      {sale.status}
                    </Badge>
                  </div>
                  <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(sale.date).toLocaleDateString('pt-BR')} às {sale.time}</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <span className="truncate">{sale.customer.name}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{sale.paymentMethod}</span>
                  </CardDescription>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedSale(sale)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[95vw] max-w-[500px] max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Detalhes da Venda #{sale.id}</DialogTitle>
                        <DialogDescription>
                          Informações completas da venda realizada
                        </DialogDescription>
                      </DialogHeader>
                      {selectedSale && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-sm text-gray-600">Cliente</h4>
                              <p className="font-medium">{selectedSale.customer.name}</p>
                              <p className="text-sm text-gray-500">{selectedSale.customer.whatsapp}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm text-gray-600">Data/Hora</h4>
                              <p className="font-medium">
                                {new Date(selectedSale.date).toLocaleDateString('pt-BR')}
                              </p>
                              <p className="text-sm text-gray-500">{selectedSale.time}</p>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm text-gray-600 mb-2">Itens</h4>
                            <div className="space-y-2">
                              {selectedSale.items.map((item: any, index: number) => (
                                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                  <div className="min-w-0 flex-1">
                                    <p className="font-medium text-sm truncate">{item.model}</p>
                                    <p className="text-xs text-gray-500">Série: {item.serial}</p>
                                  </div>
                                  <div className="text-right ml-2">
                                    <p className="font-bold text-sm">R$ {item.price.toLocaleString()}</p>
                                    <p className="text-xs text-green-600">
                                      Lucro: R$ {(item.price - item.purchasePrice).toLocaleString()}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="border-t pt-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold">Total:</span>
                              <span className="text-xl font-bold" style={{ color: '#1A535C' }}>
                                R$ {selectedSale.total.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-green-600">Lucro Total:</span>
                              <span className="font-bold text-green-600">
                                R$ {selectedSale.profit.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handlePrintSale(sale)}
                  >
                    <Printer className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4" style={{ color: '#1A535C' }} />
                    <p className="text-xs sm:text-sm text-gray-600">Total da Venda</p>
                  </div>
                  <p className="text-lg sm:text-xl font-bold" style={{ color: '#1A535C' }}>
                    R$ {sale.total.toLocaleString()}
                  </p>
                </div>
                
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4" style={{ color: '#4ECDC4' }} />
                    <p className="text-xs sm:text-sm text-gray-600">Lucro</p>
                  </div>
                  <p className="text-lg sm:text-xl font-bold" style={{ color: '#4ECDC4' }}>
                    R$ {sale.profit.toLocaleString()}
                  </p>
                </div>
                
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Badge className="w-4 h-4" style={{ color: '#FF9F1C' }} />
                    <p className="text-xs sm:text-sm text-gray-600">Itens</p>
                  </div>
                  <p className="text-lg sm:text-xl font-bold" style={{ color: '#FF9F1C' }}>
                    {sale.items.length}
                  </p>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold text-sm text-gray-600 mb-2">Produtos Vendidos</h4>
                <div className="flex flex-wrap gap-2">
                  {sale.items.map((item: any, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {item.model} ({item.serial})
                    </Badge>
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
