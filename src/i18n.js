import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLogin from "./config/i18n/en/pages/login.json";
import plLogin from "./config/i18n/pl/pages/login.json";
import frLogin from "./config/i18n/fr/pages/login.json";
import enRegister from "./config/i18n/en/pages/register.json";
import enNewTask from "./config/i18n/en/pages/newTask.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: { login: enLogin, register: enRegister, task: enNewTask },
  pl: { login: plLogin },
  fr: { login: frLogin },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
