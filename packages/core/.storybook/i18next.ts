/* eslint-disable @typescript-eslint/no-require-imports */
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Translations
import en from "../public/locales/en.json";
import vi from "../public/locales/vi.json";

const supportedLngs = ["en", "vi"];
// const resources = ns.reduce((acc, n) => {
//   supportedLngs.forEach((lng) => {
//     if (!acc[lng]) acc[lng] = {};
//     acc[lng] = {
//       ...acc[lng],
//       [n]: import(`../public/locales/${lng}/${n}.json`),
//     };
//   });
//   return acc;
// }, {});

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

// console.log({ resources });

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    //debug: true,
    lng: "en",
    fallbackLng: "en",
    // defaultNS: "common",
    // ns,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs,
    resources,
  });

export default i18n;
