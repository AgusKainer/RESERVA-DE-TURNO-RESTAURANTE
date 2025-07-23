const allClientServices = require("../../services/GET/persona/allClient.service");

const allClientController = async (req, res) => {
  try {
    const cliente = await allClientServices();
    cliente.length === 0
      ? res.status(404).json({ message: "No hay clientes" })
      : res.status(200).json({ message: "Hay Clientes", cliente: cliente });
  } catch (error) {
    console.log(`ERROR EN EL CONTROLLER: ${error}`);
  }
};

module.exports = allClientController;
