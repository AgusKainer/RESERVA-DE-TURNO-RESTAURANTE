const Admin = require("./Personas/AdminAdmin");
const Clientes = require("./Personas/Clientes");
const Mesas = require("./Restaurante/Mesas");
const Reservas = require("./Restaurante/Reservas");

Clientes.hasMany(Reservas, { foreignKey: "cliente_id" });
Reservas.belongsTo(Clientes, { foreignKey: "cliente_id" });

Reservas.belongsToMany(Mesas, {
  through: "ReservacionMesa",
  foreignKey: "reservacion_id",
  otherKey: "mesa_id",
});

Mesas.belongsToMany(Reservas, {
  through: "ReservacionMesa",
  foreignKey: "mesa_id",
  otherKey: "reservacion_id",
});

module.exports = { Admin, Clientes, Mesas, Reservas };
