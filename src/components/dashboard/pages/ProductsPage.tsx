
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Edit, Trash2, Package } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    nomeModelo: '',
    categoria: '',
    precoVendaSugerido: '',
    descricao: '',
    imageUrl: ''
  });

  const products = [
    {
      id: 1,
      nomeModelo: 'iPhone 14 Pro Max',
      categoria: 'Smartphones',
      precoVendaSugerido: 3200,
      descricao: 'Smartphone Apple iPhone 14 Pro Max com 256GB',
      imageUrl: 'https://placehold.co/80x80/1A535C/4ECDC4?text=iPhone',
      totalUnidades: 3,
      unidadesDisponiveis: 2
    },
    {
      id: 2,
      nomeModelo: 'Samsung Galaxy S23',
      categoria: 'Smartphones',
      precoVendaSugerido: 2800,
      descricao: 'Samsung Galaxy S23 128GB - Últimas unidades',
      imageUrl: 'https://placehold.co/80x80/1A535C/4ECDC4?text=Galaxy',
      totalUnidades: 2,
      unidadesDisponiveis: 2
    },
    {
      id: 3,
      nomeModelo: 'AirPods Pro 2',
      categoria: 'Acessórios',
      precoVendaSugerido: 450,
      descricao: 'Apple AirPods Pro 2ª Geração com cancelamento de ruído',
      imageUrl: 'https://placehold.co/80x80/1A535C/4ECDC4?text=AirPods',
      totalUnidades: 4,
      unidadesDisponiveis: 3
    }
  ];

  const filteredProducts = products.filter(product =>
    product.nomeModelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Produto cadastrado:', formData);
    setIsDialogOpen(false);
    setFormData({
      nomeModelo: '',
      categoria: '',
      precoVendaSugerido: '',
      descricao: '',
      imageUrl: ''
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Produtos</h1>
          <p className="text-gray-600">Gerencie seus modelos de produtos</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Novo Produto
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Produto</DialogTitle>
              <DialogDescription>
                Adicione um novo modelo de produto ao seu catálogo
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nomeModelo">Nome do Modelo</Label>
                <Input
                  id="nomeModelo"
                  value={formData.nomeModelo}
                  onChange={(e) => setFormData({...formData, nomeModelo: e.target.value})}
                  placeholder="Ex: iPhone 14 Pro Max"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="categoria">Categoria</Label>
                <Select 
                  value={formData.categoria} 
                  onValueChange={(value) => setFormData({...formData, categoria: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Smartphones">Smartphones</SelectItem>
                    <SelectItem value="Acessórios">Acessórios</SelectItem>
                    <SelectItem value="Eletrônicos">Eletrônicos</SelectItem>
                    <SelectItem value="Casa">Casa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="precoVendaSugerido">Preço de Venda Sugerido (R$)</Label>
                <Input
                  id="precoVendaSugerido"
                  type="number"
                  step="0.01"
                  value={formData.precoVendaSugerido}
                  onChange={(e) => setFormData({...formData, precoVendaSugerido: e.target.value})}
                  placeholder="0,00"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="descricao">Descrição</Label>
                <Textarea
                  id="descricao"
                  value={formData.descricao}
                  onChange={(e) => setFormData({...formData, descricao: e.target.value})}
                  placeholder="Descrição detalhada do produto"
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="imageUrl">URL da Imagem</Label>
                <Input
                  id="imageUrl"
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>
              
              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit" className="bg-teal-500 hover:bg-teal-600">
                  Cadastrar Produto
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Buscar por nome ou categoria..."
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
                    src={product.imageUrl}
                    alt={product.nomeModelo}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <CardTitle className="text-xl">{product.nomeModelo}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">{product.categoria}</Badge>
                      <span>•</span>
                      <span className="text-sm">
                        {product.unidadesDisponiveis} disponível(is) de {product.totalUnidades} total
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Preço de Venda Sugerido</p>
                  <p className="text-xl font-bold" style={{ color: '#1A535C' }}>
                    R$ {product.precoVendaSugerido.toLocaleString()}
                  </p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600">Status do Estoque</p>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <Package className="w-4 h-4" style={{ color: '#4ECDC4' }} />
                    <span className="font-bold" style={{ color: '#4ECDC4' }}>
                      {product.unidadesDisponiveis > 0 ? 'Disponível' : 'Esgotado'}
                    </span>
                  </div>
                </div>
              </div>
              
              {product.descricao && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600">{product.descricao}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
