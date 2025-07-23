const createClienTService = require("../../services/POST/persona/createCliente.service");

const createClientController = async (req, res) => {
  try {
    const { nombre, email, telefono } = req.body;
    const cliente = await createClienTService({ nombre, email, telefono });
    console.log(cliente);
    !cliente
      ? res.status(400).json({ message: "No se creo cliente" })
      : res.status(200).json(cliente);
  } catch (error) {
    console.log(`ERROR EN EL CONTROLLER: ${error}`);
  }
};

module.exports = createClientController;
