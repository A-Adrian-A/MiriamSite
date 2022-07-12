
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationFR from './locales/fr/translation.json';
import translationDE from './locales/de/translation.json';

i18n
  .use(initReactI18next)
 .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      fr: {
        translations: translationFR
      },
      de: {
        translations: translationDE
      }
    },
    fallbackLng: 'de',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      wait: true
    }
  });
export default i18n;