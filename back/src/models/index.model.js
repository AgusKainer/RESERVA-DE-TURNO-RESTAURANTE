const Admin = require("./Personas/Admin");
const Clientes = require("./Personas/Clientes");
const Mesas = require("./Restaurante/Mesas");
const Reservas = require("./Restaurante/Reservas");

Clientes.hasMany(Reservas, { foreignKey: "cliente_id" });
Reservas.belongsTo(Clientes, { foreignKey: "cliente_id" });

Reservas.belongsToMany(Mesas, { through: "MesaReserva" });

Mesas.belongsToMany(Reservas, { through: "MesaReserva" });

module.exports = { Admin, Clientes, Mesas, Reservas };
