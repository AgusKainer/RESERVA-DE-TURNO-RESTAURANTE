const { Clientes } = require("../../../models/index.model");

const allClientServices = async () => {
  return await Clientes.findAll();
};

module.exports = allClientServices;
