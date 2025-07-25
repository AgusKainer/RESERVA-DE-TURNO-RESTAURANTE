const { Reservas, Mesas, Clientes } = require("../../models/index.model");

const getReservasConMesasController = async (req, res) => {
  try {
    const reservas = await Reservas.findAll({
      include: [
        {
          model: Mesas,
          through: { attributes: [] }, // evita mostrar la tabla intermedia
          attributes: ["id", "capacidad"],
        },
        {
          model: Clientes,
          attributes: ["id", "nombre", "email"], // ajustá según tu modelo
        },
      ],
    });

    res.status(200).json(reservas);
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    res.status(500).json({
      message: "ERROR DEL SERVIDOR: " + error.message,
    });
  }
};

module.exports = getReservasConMesasController;
