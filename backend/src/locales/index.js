const i18next = require("i18next");
const i18nextMiddleware = require("i18next-express-middleware");
const i18nextBackend = require("i18next-node-fs-backend");

i18next
  .use(i18nextBackend) // irá carregar os arquivos do sistema -> suporta (json,yml e outros)
  .use(i18nextMiddleware.LanguageDetector) // middleware para usar o i18next com express
  .init({
    preload: ["en", "pt"], // linguagens suportadas
    fallbackLng: "pt", // caso não encontrar aquele idioma vai utilizar esse por padrão
    detection: {
      order: ["header"], // order and from where user language should be detected, pode ser query, header, path e outros
      lookupHeader: "accept-language"
    },
    backend: {
      loadPath: __dirname + "/{{lng}}/{{ns}}.json" // carrega os arquivos do sistema
    }
  });

module.exports = i18next;
