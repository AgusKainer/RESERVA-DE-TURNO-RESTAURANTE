const Admin = require("./Personas/Admin");
const Clientes = require("./Personas/Clientes");
const Mesas = require("./Restaurante/Mesas");
const Reservas = require("./Restaurante/Reservas");
const ReservaMesa = require("./Restaurante/ReservaMesa");

Clientes.hasMany(Reservas, { foreignKey: "cliente_id" });
Reservas.belongsTo(Clientes, { foreignKey: "cliente_id" });

Reservas.belongsToMany(Mesas, {
  through: ReservaMesa,
  foreignKey: "reservacion_id",
  otherKey: "mesa_id",
});

Mesas.belongsToMany(Reservas, {
  through: ReservaMesa,
  foreignKey: "mesa_id",
  otherKey: "reservacion_id",
});

module.exports = { Admin, Clientes, Mesas, Reservas, ReservaMesa };
