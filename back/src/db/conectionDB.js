const { Sequelize } = require("sequelize");
const { dbName, dbPass, dbUser } = require("../utils/config");

const db = new Sequelize(dbName, dbUser, dbUser, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
