const { DataTypes } = require("sequelize");
const db = require("../../db/conectionDB");

const Clientes = db.define("Clientes", {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUID,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
  telefono: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
});

module.exports = Clientes;
