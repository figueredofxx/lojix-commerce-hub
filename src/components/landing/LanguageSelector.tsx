
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <option value="pt">🇧🇷 PT-BR</option>
        <option value="es">🇪🇸 ES</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
