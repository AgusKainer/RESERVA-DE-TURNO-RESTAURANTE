const { Reservas } = require("../../models/index.model");

const allReservas = async () => {
  return await Reservas.findAll();
};

module.exports = allReservas;
