const allReservasController = require("./GET/allReservas.controller");
const allClientController = require("./GET/allClient.controller");
const createClientController = require("./POST/createClient.controller");

module.exports = {
  allReservasController,
  createClientController,
  allClientController,
};
