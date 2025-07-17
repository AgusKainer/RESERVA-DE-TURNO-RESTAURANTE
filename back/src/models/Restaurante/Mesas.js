const { DataTypes } = require("sequelize");
const db = require("../../db/conectionDB");

const Mesas = db.define("Mesas", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  capacidad: {
    type: DataTypes.INTEGER,
  },
});
module.exports = Mesas;
