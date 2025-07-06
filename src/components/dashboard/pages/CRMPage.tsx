
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Plus, MessageCircle, Mail, Phone, ShoppingBag, Star } from 'lucide-react';

export function CRMPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      id: 1,
      name: 'Maria Silva',
      whatsapp: '(45) 99999-1111',
      email: 'maria@email.com',
      totalPurchases: 3,
      totalSpent: 6800,
      lastPurchase: '2024-01-15',
      notes: 'Prefere iPhones, sempre paga à vista',
      status: 'VIP',
      purchases: [
        { date: '2024-01-15', product: 'iPhone 14 Pro', value: 3200 },
        { date: '2023-12-10', product: 'AirPods Pro', value: 450 },
        { date: '2023-11-05', product: 'iPhone 13', value: 2800 }
      ]
    },
    {
      id: 2,
      name: 'João Santos',
      whatsapp: '(45) 99999-2222',
      email: 'joao@email.com',
      totalPurchases: 2,
      totalSpent: 3250,
      lastPurchase: '2024-01-10',
      notes: 'Interessado em acessórios Samsung',
      status: 'Regular',
      purchases: [
        { date: '2024-01-10', product: 'Galaxy S23', value: 2800 },
        { date: '2023-12-20', product: 'Galaxy Buds', value: 450 }
      ]
    },
    {
      id: 3,
      name: 'Ana Costa',
      whatsapp: '(45) 99999-3333',
      email: 'ana@email.com',
      totalPurchases: 1,
      totalSpent: 450,
      lastPurchase: '2024-01-05',
      notes: 'Primeira compra, muito satisfeita',
      status: 'Novo',
      purchases: [
        { date: '2024-01-05', product: 'AirPods Pro', value: 450 }
      ]
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.whatsapp.includes(searchTerm)
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'VIP': return 'bg-purple-100 text-purple-800';
      case 'Regular': return 'bg-blue-100 text-blue-800';
      case 'Novo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const sendWhatsAppMessage = (customer: any, type: string) => {
    let message = '';
    
    switch (type) {
      case 'followup':
        message = `Olá ${customer.name}! Como está? Temos novidades incríveis que podem te interessar!`;
        break;
      case 'thanks':
        message = `Olá ${customer.name}! Obrigado pela sua compra. Espero que esteja satisfeito(a) com o produto!`;
        break;
      case 'promo':
        message = `Oi ${customer.name}! Temos uma promoção especial para nossos clientes especiais. Quer saber mais?`;
        break;
    }
    
    const whatsappNumber = customer.whatsapp.replace(/\D/g, '');
    window.open(`https://wa.me/55${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">CRM</h1>
          <p className="text-gray-600">Gerencie relacionamento com seus clientes</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Novo Cliente
        </Button>
      </div>

      {/* Estatísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#1A535C' }}>
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">{customers.length}</p>
                <p className="text-sm text-gray-600">Total Clientes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#4ECDC4' }}>
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">{customers.filter(c => c.status === 'VIP').length}</p>
                <p className="text-sm text-gray-600">Clientes VIP</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#FF9F1C' }}>
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {customers.reduce((sum, c) => sum + c.totalPurchases, 0)}
                </p>
                <p className="text-sm text-gray-600">Total Vendas</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-600">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  R$ {customers.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">Faturamento</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Clientes */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Lista de Clientes</CardTitle>
              <CardDescription>Gerencie informações e histórico dos seus clientes</CardDescription>
            </div>
            <div className="w-80">
              <Input
                placeholder="Buscar cliente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredCustomers.map((customer) => (
              <Card key={customer.id} className="border-l-4" style={{ borderLeftColor: '#4ECDC4' }}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" 
                           style={{ backgroundColor: '#1A535C' }}>
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{customer.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            {customer.whatsapp}
                          </span>
                          <span className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {customer.email}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(customer.status)}>
                        {customer.status}
                      </Badge>
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => sendWhatsAppMessage(customer, 'followup')}
                        >
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Tabs defaultValue="info" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="info">Informações</TabsTrigger>
                      <TabsTrigger value="purchases">Compras ({customer.totalPurchases})</TabsTrigger>
                      <TabsTrigger value="messages">Mensagens</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="info" className="space-y-3">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-gray-600">Total Compras</p>
                          <p className="text-xl font-bold" style={{ color: '#1A535C' }}>
                            {customer.totalPurchases}
                          </p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <p className="text-sm text-gray-600">Total Gasto</p>
                          <p className="text-xl font-bold" style={{ color: '#4ECDC4' }}>
                            R$ {customer.totalSpent.toLocaleString()}
                          </p>
                        </div>
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <p className="text-sm text-gray-600">Última Compra</p>
                          <p className="text-lg font-bold" style={{ color: '#FF9F1C' }}>
                            {new Date(customer.lastPurchase).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>
                      
                      {customer.notes && (
                        <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400">
                          <p className="text-sm font-medium text-yellow-800">Observações:</p>
                          <p className="text-sm text-yellow-700">{customer.notes}</p>
                        </div>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="purchases" className="space-y-2">
                      {customer.purchases.map((purchase, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">{purchase.product}</p>
                            <p className="text-sm text-gray-600">
                              {new Date(purchase.date).toLocaleDateString('pt-BR')}
                            </p>
                          </div>
                          <span className="font-bold" style={{ color: '#1A535C' }}>
                            R$ {purchase.value.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </TabsContent>
                    
                    <TabsContent value="messages" className="space-y-2">
                      <div className="flex gap-2 flex-wrap">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => sendWhatsAppMessage(customer, 'thanks')}
                        >
                          Agradecimento
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => sendWhatsAppMessage(customer, 'promo')}
                        >
                          Promoção
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => sendWhatsAppMessage(customer, 'followup')}
                        >
                          Follow-up
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
