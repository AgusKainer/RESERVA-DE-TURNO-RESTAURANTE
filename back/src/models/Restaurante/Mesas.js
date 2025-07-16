const { DataTypes } = require("sequelize");
const db = require("../../db/conectionDB");

const Mesas = db.define("Mesas", {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUID,
    primaryKey: true,
  },
  capacidad: {
    type: DataTypes.NUMBER,
  },
});
module.exports = Mesas;
