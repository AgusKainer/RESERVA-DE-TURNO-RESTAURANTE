const allReservas = require("../../services/GET/allReservas.services");

const allReservasController = async (req, res) => {
  try {
    const reservas = await allReservas();
    reservas.length === 0
      ? res.status(404).json({ message: "No hay reservas" })
      : res.status(200).json({ message: "Hay reservas: ", reservas: reservas });
  } catch (error) {
    console.log(`ERROR EN EL CONTROLLER; ${error}`);
  }
};

module.exports = allReservasController;
