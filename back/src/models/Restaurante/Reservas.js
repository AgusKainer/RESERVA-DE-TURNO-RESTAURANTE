const { DataTypes } = require("sequelize");
const db = require("../../db/conectionDB");

const Reservas = db.define("Reservas", {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUID,
    primaryKey: true,
  },
  cliente_id: {
    type: DataTypes.UUID,
    references: {
      model: "Clientes",
      key: "id",
    },
  },
  mesa_id: {
    type: DataTypes.UUID,
    references: {
      model: "Mesas",
      key: "id",
    },
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  cantidada_personas: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM,
    values: ["reservado", "disponible"],
  },
});

module.exports = Reservas;
