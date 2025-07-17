const Admin = require("./Personas/Admin");
const Clientes = require("./Personas/Clientes");
const Mesas = require("./Restaurante/Mesas");
const Reservas = require("./Restaurante/Reservas");
const ReservacionMesa = require("./Restaurante/ReservaMesa");

Clientes.hasMany(Reservas, { foreignKey: "cliente_id" });
Reservas.belongsTo(Clientes, { foreignKey: "cliente_id" });

Reservas.belongsToMany(Mesas, {
  through: ReservacionMesa,
  foreignKey: "reservacion_id",
  otherKey: "mesa_id",
});

Mesas.belongsToMany(Reservas, {
  through: ReservacionMesa,
  foreignKey: "mesa_id",
  otherKey: "reservacion_id",
});

module.exports = { Admin, Clientes, Mesas, Reservas };
