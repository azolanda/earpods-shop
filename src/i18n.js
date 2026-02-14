import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
    initReactI18next
} from 'react-i18next';
import RU from "./locales/ru/translation.json";
import EN from "./locales/en/translation.json";
import KAZ from "./locales/kaz/translation.json";

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'ru',
    debug: true,
    defaultNS: 'ns1',
    resources: {
        en: {
            ns1: EN
        },
        ru: {
            ns1: RU
        },
        kaz: {
            ns1: KAZ
        }
    }
})

export default i18n;