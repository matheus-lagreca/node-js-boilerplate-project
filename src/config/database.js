import env from "dotenv";

// if running tests then use .env.test
env.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

export default {
  HOST: !!process.env.ENV_DOCKER ? process.env.MYSQL_HOST_DOCKER : process.env.MYSQL_HOST,
  USER: process.env.MYSQL_USER,
  PASSWORD: process.env.MYSQL_PASSWORD,
  DB: process.env.MYSQL_DATABASE,
  dialect: "mysql",
  pool: {
    max: 151,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
