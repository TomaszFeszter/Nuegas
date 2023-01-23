import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLogin from "./config/i18n/en/pages/login.json";
import enRegister from "./config/i18n/en/pages/register.json";
import enNewTask from "./config/i18n/en/pages/newTask.json";
import enEditTask from "./config/i18n/en/pages/editTask.json";
import enNewTeam from "./config/i18n/en/pages/newTeam.json";
import enNewProject from "./config/i18n/en/pages/newProject.json";
import enNewBoard from "./config/i18n/en/pages/newBoard.json";
import enPageTemplate from "./config/i18n/en/common/pageTemplate.json";
import frLogin from "./config/i18n/fr/pages/login.json";
import frRegister from "./config/i18n/fr/pages/register.json";
import frNewTask from "./config/i18n/fr/pages/newTask.json";
import frEditTask from "./config/i18n/fr/pages/editTask.json";
import frNewTeam from "./config/i18n/fr/pages/newTeam.json";
import frNewProject from "./config/i18n/fr/pages/newProject.json";
import frNewBoard from "./config/i18n/fr/pages/newBoard.json";
import frPageTemplate from "./config/i18n/fr/common/pageTemplate.json";
import plNewTask from "./config/i18n/pl/pages/newTask.json";
import plEditTask from "./config/i18n/pl/pages/editTask.json";
import plNewProject from "./config/i18n/pl/pages/newProject.json";
import plNewTeam from "./config/i18n/pl/pages/newTeam.json";
import plNewBoard from "./config/i18n/pl/pages/newBoard.json";
import plLogin from "./config/i18n/pl/pages/login.json";
import plRegister from "./config/i18n/pl/pages/register.json";
import plPageTemplate from "./config/i18n/pl/common/pageTemplate.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    login: enLogin,
    register: enRegister,
    task: { new: enNewTask, edit: enEditTask },
    project: { new: enNewProject },
    pageTemplate: enPageTemplate,
    team: { new: enNewTeam },
    board: { new: enNewBoard },
  },
  pl: {
    login: plLogin,
    register: plRegister,
    task: { new: plNewTask, edit: plEditTask },
    project: { new: plNewProject },
    pageTemplate: plPageTemplate,
    team: { new: plNewTeam },
    board: { new: plNewBoard },
  },
  fr: {
    login: frLogin,
    register: frRegister,
    task: { new: frNewTask, edit: frEditTask },
    project: { new: frNewProject },
    pageTemplate: frPageTemplate,
    team: { new: frNewTeam },
    board: { new: frNewBoard },
  },
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
