import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLogin from "./config/i18n/en/pages/login.json";
import enRegister from "./config/i18n/en/pages/register.json";
import enTasks from "./config/i18n/en/pages/tasks.json";
import enTeams from "./config/i18n/en/pages/teams.json";
import enProjects from "./config/i18n/en/pages/projects.json";
import enBoards from "./config/i18n/en/pages/boards.json";
import enPageTemplate from "./config/i18n/en/common/pageTemplate.json";
import frLogin from "./config/i18n/fr/pages/login.json";
import frRegister from "./config/i18n/fr/pages/register.json";
import frTasks from "./config/i18n/fr/pages/tasks.json";
import frTeams from "./config/i18n/fr/pages/teams.json";
import frProjects from "./config/i18n/fr/pages/projects.json";
import frBoards from "./config/i18n/fr/pages/boards.json";
import frPageTemplate from "./config/i18n/fr/common/pageTemplate.json";
import plTasks from "./config/i18n/pl/pages/tasks.json";
import plProjects from "./config/i18n/pl/pages/projects.json";
import plTeams from "./config/i18n/pl/pages/teams.json";
import plBoards from "./config/i18n/pl/pages/boards.json";
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
    task: enTasks,
    project: enProjects,
    pageTemplate: enPageTemplate,
    team: enTeams,
    board: enBoards,
  },
  pl: {
    login: plLogin,
    register: plRegister,
    task: plTasks,
    project: plProjects,
    pageTemplate: plPageTemplate,
    team: plTeams,
    board: plBoards,
  },
  fr: {
    login: frLogin,
    register: frRegister,
    task: frTasks,
    project: frProjects,
    pageTemplate: frPageTemplate,
    team: frTeams,
    board: frBoards,
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
