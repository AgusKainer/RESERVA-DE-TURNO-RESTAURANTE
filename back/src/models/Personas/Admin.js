const { DataTypes } = require("sequelize");
const db = require("../../db/conectionDB");

const Admin = db.define("Admin", {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUID,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

module.exports = Admin;
