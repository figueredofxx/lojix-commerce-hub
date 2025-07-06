
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, User, Bell, CreditCard, Globe, Shield } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
        <p className="text-gray-600">Gerencie as configurações da sua conta e loja</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Perfil
          </TabsTrigger>
          <TabsTrigger value="store" className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Loja
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notificações
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Assinatura
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Segurança
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>Atualize suas informações de perfil</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" defaultValue="Usuário" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" defaultValue="Demo" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" defaultValue="usuario@demo.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input id="whatsapp" defaultValue="(45) 99999-9999" />
              </div>
              
              <Button className="bg-primary hover:bg-primary/90">
                Salvar Alterações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="store">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações da Loja</CardTitle>
                <CardDescription>Configure as informações que aparecem no seu catálogo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="storeName">Nome da Loja</Label>
                  <Input id="storeName" defaultValue="Demo Store" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="storeDescription">Descrição</Label>
                  <Input id="storeDescription" defaultValue="Produtos importados com qualidade garantida" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="catalogUrl">URL do Catálogo</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      catalogo.lojixapp.com/
                    </span>
                    <Input id="catalogUrl" defaultValue="demo-store" className="rounded-l-none" />
                  </div>
                </div>
                
                <Button className="bg-teal-500 hover:bg-teal-600">
                  Salvar Configurações
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configurações de WhatsApp</CardTitle>
                <CardDescription>Configure as mensagens automáticas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Mensagem de Agradecimento</Label>
                    <p className="text-sm text-gray-600">Enviar automaticamente após cada venda</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Confirmação de Pedido</Label>
                    <p className="text-sm text-gray-600">Confirmar pedidos via WhatsApp</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificação</CardTitle>
              <CardDescription>Configure quando e como deseja receber notificações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Novas Vendas</Label>
                  <p className="text-sm text-gray-600">Notificar sobre cada nova venda realizada</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Estoque Baixo</Label>
                  <p className="text-sm text-gray-600">Alertar quando produtos estiverem acabando</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Relatórios Semanais</Label>
                  <p className="text-sm text-gray-600">Resumo semanal de vendas e estoque</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Sugestões de Importação</Label>
                  <p className="text-sm text-gray-600">Notificar sobre sugestões de reposição</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Plano Atual</CardTitle>
                <CardDescription>Gerencie sua assinatura do Lojix App</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-lg">Plano Básico</h3>
                    <p className="text-sm text-gray-600">Renovação automática</p>
                    <p className="text-sm text-gray-500">Próxima cobrança: 15/02/2024</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold" style={{ color: '#1A535C' }}>R$ 29</p>
                    <p className="text-sm text-gray-600">/mês</p>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Fazer Upgrade
                  </Button>
                  <Button variant="outline">
                    Gerenciar Assinatura
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Histórico de Pagamentos</CardTitle>
                <CardDescription>Últimas transações da sua conta</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { date: '15/01/2024', description: 'Plano Básico - Janeiro', amount: 'R$ 29,00', status: 'Pago' },
                    { date: '15/12/2023', description: 'Plano Básico - Dezembro', amount: 'R$ 29,00', status: 'Pago' },
                    { date: '15/11/2023', description: 'Plano Básico - Novembro', amount: 'R$ 29,00', status: 'Pago' }
                  ].map((payment, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{payment.description}</p>
                        <p className="text-sm text-gray-600">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{payment.amount}</p>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Alterar Senha</CardTitle>
                <CardDescription>Mantenha sua conta segura com uma senha forte</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Senha Atual</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Nova Senha</Label>
                  <Input id="newPassword" type="password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                
                <Button className="bg-red-600 hover:bg-red-700">
                  Alterar Senha
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Segurança da Conta</CardTitle>
                <CardDescription>Configurações adicionais de segurança</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Autenticação de Dois Fatores</Label>
                    <p className="text-sm text-gray-600">Adiciona uma camada extra de segurança</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Notificar Logins</Label>
                    <p className="text-sm text-gray-600">Receber e-mail a cada novo login</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="pt-4 border-t">
                  <Button variant="destructive" className="w-full">
                    Excluir Conta
                  </Button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Esta ação não pode ser desfeita
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
