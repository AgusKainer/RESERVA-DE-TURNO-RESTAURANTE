const { Mesas } = require("../../../models/index.model");

const allMesaServices = async () => {
  return await Mesas.findAll();
};

module.exports = allMesaServices;
