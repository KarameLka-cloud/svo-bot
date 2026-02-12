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
    // this.app.use("/", (_, res) => {
    //   res.send("Hello, world!");
    // });
    this.app.use("/ping", (_, res) => {
      res.send("pong");
    });
  }
}

export default new App().app;
