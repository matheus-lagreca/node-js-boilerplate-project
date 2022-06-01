import "./database";
import routes from "./routes/RouterLoader";
import express from "express";
import cors from "cors";

class App {
  // Constructor
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(cors());
    this.server.use(express.json({ limit: '5mb' }));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App();
