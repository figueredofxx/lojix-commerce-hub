
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#4141e1]">Lojix App</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#4141e1] font-medium transition-colors">
              {t('nav.features')}
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#4141e1] font-medium transition-colors">
              {t('nav.pricing')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#4141e1] font-medium transition-colors">
              {t('nav.contact')}
            </a>
            <Button
              className="bg-gradient-to-r from-[#4141e1] to-[#6366f1] hover:opacity-90 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300"
              onClick={() => window.location.href = '/cadastro'}
            >
              {t('nav.tryFree')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-[#4141e1]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-[#4141e1] font-medium">
                {t('nav.features')}
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-[#4141e1] font-medium">
                {t('nav.pricing')}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#4141e1] font-medium">
                {t('nav.contact')}
              </a>
              <Button
                className="bg-gradient-to-r from-[#4141e1] to-[#6366f1] hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                onClick={() => window.location.href = '/cadastro'}
              >
                {t('nav.tryFree')}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
