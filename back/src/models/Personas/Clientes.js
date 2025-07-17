const { DataTypes } = require("sequelize");
const db = require("../../db/conectionDB");

const Clientes = db.define("Clientes", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
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
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Clientes;
