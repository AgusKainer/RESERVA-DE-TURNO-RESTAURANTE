const allReservasController = require("./GET/allReservas.controller");
const allClientController = require("./GET/allClient.controller");
const createClientController = require("./POST/createClient.controller");
const createMesaController = require("./POST/createMesa.controller");
const allMesaController = require("./GET/allMesa.controller");

const createReservaController = require("./POST/createReserva.controller");
module.exports = {
  allReservasController,
  createClientController,
  allClientController,
  createMesaController,
  allMesaController,
  createReservaController,
};
