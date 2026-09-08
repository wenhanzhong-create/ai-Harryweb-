import { createContext, useState, useContext, useEffect } from 'react';

// Import translations
import en from '../locales/en.json';
import zh from '../locales/zh.json';

const translations = { en, zh };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Get initial language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('ai-harry-language');
    return saved || 'en';
  });

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('ai-harry-language', language);
  }, [language]);

  // Translation function
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  // Toggle between English and Chinese
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  // Set specific language
  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  const value = {
    language,
    setLanguage: changeLanguage,
    t,
    toggleLanguage,
    availableLanguages: Object.keys(translations),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export const useI18n = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useI18n must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
