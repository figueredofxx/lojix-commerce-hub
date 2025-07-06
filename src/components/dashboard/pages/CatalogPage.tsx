
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
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-2 sm:px-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Catálogo Virtual</h1>
          <p className="text-gray-600 text-sm sm:text-base">Gerencie seu catálogo público para vendas</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 sm:flex-none">
            <Edit className="w-4 h-4 mr-2" />
            Personalizar
          </Button>
          <Button 
            className="bg-teal-500 hover:bg-teal-600 text-white flex-1 sm:flex-none"
            onClick={() => window.open(`https://${catalogUrl}`, '_blank')}
          >
            <Eye className="w-4 h-4 mr-2" />
            Visualizar
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
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
                <Input value={catalogUrl} readOnly className="bg-gray-50 text-sm" />
                <Button
                  variant="outline"
                  onClick={() => copyToClipboard(`https://${catalogUrl}`)}
                  className="flex-shrink-0"
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

      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Produtos no Catálogo</CardTitle>
          <CardDescription>Gerencie quais produtos aparecem no seu catálogo público</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {catalogProducts.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.model}
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Switch checked={product.visible} />
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg truncate">{product.model}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <Badge variant="secondary" className="w-fit">{product.category}</Badge>
                    <span className="text-xs sm:text-sm text-gray-600">
                      {product.available} disponível(is)
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-xl sm:text-2xl font-bold" style={{ color: '#1A535C' }}>
                      R$ {product.price.toLocaleString()}
                    </span>
                    <Button
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto"
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

      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Preview do Catálogo Público</CardTitle>
          <CardDescription>Veja como seus clientes verão o catálogo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#1A535C' }}>
                Demo Store
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">Produtos importados com qualidade garantida</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {catalogProducts.filter(p => p.visible).map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={product.image}
                    alt={product.model}
                    className="w-full h-24 sm:h-32 object-cover"
                  />
                  <div className="p-2 sm:p-3">
                    <h3 className="font-medium text-sm mb-1 truncate">{product.model}</h3>
                    <p className="text-base sm:text-lg font-bold mb-2" style={{ color: '#1A535C' }}>
                      R$ {product.price.toLocaleString()}
                    </p>
                    <Button
                      size="sm"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs"
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
