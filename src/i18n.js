// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
console.log(localStorage.getItem('selectedLanguage'),'hhhh');
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('selectedLanguage'), // Default language
    fallbackLng: localStorage.getItem('selectedLanguage'), // Fallback language
    debug: true, // Enable debug mode
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
