const createMesaServices = require("../../services/POST/restaurante/createMesa.service");

const createMesaController = async (req, res) => {
  try {
    const { capacidad } = req.body;
    const mesa = await createMesaServices({ capacidad });
    !mesa
      ? res.status(404).json({ message: `Nose puede crear la mesa ${mesa}` })
      : res.status(200).json({ message: "Mesa creada", mesa: mesa });
  } catch (error) {
    res.status(505).json({ message: `SERVIDOR SIN FUNCIONAR: ${error}` });
  }
};
module.exports = createMesaController;
