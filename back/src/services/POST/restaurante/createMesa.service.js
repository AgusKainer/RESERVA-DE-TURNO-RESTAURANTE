const { Mesas } = require("../../../models/index.model");

const createMesaServices = async ({ capacidad }) => {
  return await Mesas.create({ capacidad });
};

module.exports = createMesaServices;
