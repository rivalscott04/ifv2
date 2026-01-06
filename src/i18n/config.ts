import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import idTranslations from './locales/id.json';
import enTranslations from './locales/en.json';

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      id: {
        translation: idTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    fallbackLng: 'id', // Default language
    lng: 'id', // Initial language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

