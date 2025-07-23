const { Clientes } = require("../../../models/index.model");

const createClienTService = async ({ nombre, email, telefono }) => {
  const cliente = await Clientes.create({ nombre, email, telefono });
  console.log(cliente);

  return cliente;
};

module.exports = createClienTService;
