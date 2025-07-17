const { DataTypes } = require("sequelize");
const db = require("../../db/conectionDB");

const ReservaMesa = db.define("ResevacionMesa", {
  reservacion_id: {
    type: DataTypes.UUID,
    references: {
      model: "Reservas",
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
});

module.exports = ReservaMesa;
