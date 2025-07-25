const allMesaServices = require("../../services/GET/restaurante/allMesa.service");

const allMesaController = async (req, res) => {
  try {
    const mesa = await allMesaServices();
    mesa.length === 0
      ? res.status(404).json({ message: "No hay mesas" })
      : res.status(200).json({ message: "Hay mesas", mesa: mesa });
  } catch (error) {
    res.status(500).json({ message: `SERVIDOR ERROR: ${error}` });
  }
};

module.exports = allMesaController;
