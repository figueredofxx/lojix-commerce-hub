
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Globe, Eye, Share2, Edit, MessageCircle } from 'lucide-react';

export function CatalogPage() {
  const [catalogUrl] = useState('catalogo.lojixapp.com/demo-store');
  const [isPublic, setIsPublic] = useState(true);

  const catalogProducts = [
    {
      id: 1,
      model: 'iPhone 14 Pro Max',
      price: 3200,
      image: 'https://placehold.co/200x200/1A535C/4ECDC4?text=iPhone',
      description: 'Smartphone Apple iPhone 14 Pro Max com 256GB',
      category: 'Smartphones',
      available: 2,
      visible: true
    },
    {
      id: 2,
      model: 'Samsung Galaxy S23',
      price: 2800,
      image: 'https://placehold.co/200x200/1A535C/4ECDC4?text=Galaxy',
      description: 'Samsung Galaxy S23 128GB - Últimas unidades',
      category: 'Smartphones',
      available: 2,
      visible: true
    },
    {
      id: 3,
      model: 'AirPods Pro 2',
      price: 450,
      image: 'https://placehold.co/200x200/1A535C/4ECDC4?text=AirPods',
      description: 'Apple AirPods Pro 2ª Geração com cancelamento de ruído',
      category: 'Acessórios',
      available: 2,
      visible: true
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Link copiado para a área de transferência!');
  };

  const generateWhatsAppLink = (product: any) => {
    const message = `Olá! Tenho interesse no ${product.model} por R$ ${product.price.toLocaleString()}. Está disponível?`;
    return `https://wa.me/5545999999999?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Catálogo Virtual</h1>
          <p className="text-gray-600">Gerencie seu catálogo público para vendas</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Edit className="w-4 h-4 mr-2" />
            Personalizar
          </Button>
          <Button 
            className="bg-teal-500 hover:bg-teal-600 text-white"
            onClick={() => window.open(`https://${catalogUrl}`, '_blank')}
          >
            <Eye className="w-4 h-4 mr-2" />
            Visualizar
          </Button>
        </div>
      </div>

      {/* Configurações do Catálogo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Configurações do Catálogo
          </CardTitle>
          <CardDescription>Configure a visibilidade e o acesso ao seu catálogo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Catálogo Público</h3>
                <p className="text-sm text-gray-600">Permite que clientes vejam seus produtos online</p>
              </div>
              <Switch checked={isPublic} onCheckedChange={setIsPublic} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">URL do Catálogo</label>
              <div className="flex gap-2">
                <Input value={catalogUrl} readOnly className="bg-gray-50" />
                <Button
                  variant="outline"
                  onClick={() => copyToClipboard(`https://${catalogUrl}`)}
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                Compartilhe este link com seus clientes para que vejam seus produtos
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Produtos no Catálogo */}
      <Card>
        <CardHeader>
          <CardTitle>Produtos no Catálogo</CardTitle>
          <CardDescription>Gerencie quais produtos aparecem no seu catálogo público</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogProducts.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.model}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Switch
                      checked={product.visible}
                      size="sm"
                    />
                  </div>
                </div>
                
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{product.model}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{product.category}</Badge>
                    <span className="text-sm text-gray-600">
                      {product.available} disponível(is)
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold" style={{ color: '#1A535C' }}>
                      R$ {product.price.toLocaleString()}
                    </span>
                    <Button
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => window.open(generateWhatsAppLink(product), '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Preview do Catálogo */}
      <Card>
        <CardHeader>
          <CardTitle>Preview do Catálogo Público</CardTitle>
          <CardDescription>Veja como seus clientes verão o catálogo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#1A535C' }}>
                Demo Store
              </h2>
              <p className="text-gray-600">Produtos importados com qualidade garantida</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {catalogProducts.filter(p => p.visible).map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={product.image}
                    alt={product.model}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-medium text-sm mb-1">{product.model}</h3>
                    <p className="text-lg font-bold" style={{ color: '#1A535C' }}>
                      R$ {product.price.toLocaleString()}
                    </p>
                    <Button
                      size="sm"
                      className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white text-xs"
                    >
                      Comprar via WhatsApp
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
