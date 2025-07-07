
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-[#4141e1] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Lojix App</h3>
            <p className="text-blue-100 mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/lojixapp" className="text-blue-200 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://facebook.com/lojixapp" className="text-blue-200 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.links')}</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-blue-200 hover:text-white transition-colors">
                {t('footer.about')}
              </a>
              <a href="#features" className="block text-blue-200 hover:text-white transition-colors">
                {t('footer.features')}
              </a>
              <a href="#pricing" className="block text-blue-200 hover:text-white transition-colors">
                {t('footer.pricing')}
              </a>
              <a href="/privacy" className="block text-blue-200 hover:text-white transition-colors">
                {t('footer.privacy')}
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-2 text-blue-200">
              <p>contato@lojixapp.com</p>
              <a 
                href="https://wa.me/5545999999999" 
                className="block hover:text-white transition-colors"
              >
                WhatsApp: +55 45 99999-9999
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 Lojix App. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
