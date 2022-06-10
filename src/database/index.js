import Sequelize from "sequelize";
import DatabaseConfig from "../config/database";

// Models
import ModelBase from "../app/models/ModelBase";

// Buffer (add models here)
const models = [
  ModelBase
]


class DataBase {
  constructor() {
    this.init();
  }

  init() {
    // init connection
    this.connection = new Sequelize(
      DatabaseConfig.DB,
      DatabaseConfig.USER,
      DatabaseConfig.PASSWORD,
      {
        host: DatabaseConfig.HOST,
        dialect: DatabaseConfig.dialect,
        pool: {
          max: DatabaseConfig.pool.max,
          min: DatabaseConfig.pool.min,
          acquire: DatabaseConfig.pool.acquire,
          idle: DatabaseConfig.pool.idle,
        },
      });

    // init all buffered models
    models.map((model) => model.init(this.connection));

    // class relations
  }
}

export default new DataBase();
