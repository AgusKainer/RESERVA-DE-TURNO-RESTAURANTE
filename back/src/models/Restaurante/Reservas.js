const { DataTypes } = require("sequelize");
const db = require("../../db/conectionDB");

const Reservas = db.define("Reservas", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
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
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM,
    values: ["reservado", "disponible"],
  },
});

module.exports = Reservas;
