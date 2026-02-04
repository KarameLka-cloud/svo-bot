import express from "express";

class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", (_, res) => {
      res.send("Hello, world!");
    });
  }
}

export default new App().app;
