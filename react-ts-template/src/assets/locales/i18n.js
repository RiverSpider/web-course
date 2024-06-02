import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translation.json';
import translationRU from './ru/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

const loadLanguage = () => {
  const savedLanguage = localStorage.getItem('i18nextLng');
  return savedLanguage || 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: loadLanguage(), 
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});

export default i18n;