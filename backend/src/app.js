const express = require("express");
const routes = require("./routes");
const i18nextMiddleware = require("i18next-express-middleware");
const i18next = require("./locales");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(i18nextMiddleware.handle(i18next));
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
