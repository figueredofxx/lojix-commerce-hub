
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Building, Mail, Phone, MapPin } from 'lucide-react';

interface BusinessInfoStepProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function BusinessInfoStep({ onNext }: BusinessInfoStepProps) {
  const [businessData, setBusinessData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    description: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setBusinessData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Aqui salvaria os dados do negócio
    console.log('Dados do negócio:', businessData);
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4ECDC4' }}>
            <Building className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Informações do seu Negócio</h3>
        <p className="text-gray-600">Vamos conhecer um pouco mais sobre sua empresa</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="businessName">Nome da Empresa *</Label>
          <Input
            id="businessName"
            placeholder="Ex: Minha Loja LTDA"
            value={businessData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="contato@minhaloja.com"
                className="pl-10"
                value={businessData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                id="phone"
                placeholder="(11) 99999-9999"
                className="pl-10"
                value={businessData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Endereço</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              id="address"
              placeholder="Rua, número, bairro, cidade - UF"
              className="pl-10"
              value={businessData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descrição do Negócio (Opcional)</Label>
          <Textarea
            id="description"
            placeholder="Conte-nos um pouco sobre seu negócio..."
            value={businessData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
        </div>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg">
        <p className="text-sm text-yellow-800">
          ℹ️ Essas informações aparecerão nos seus relatórios e documentos fiscais.
        </p>
      </div>

      <Button 
        onClick={handleSubmit}
        disabled={!businessData.name}
        className="w-full"
        style={{ backgroundColor: '#1A535C' }}
      >
        Continuar
      </Button>
    </div>
  );
}
