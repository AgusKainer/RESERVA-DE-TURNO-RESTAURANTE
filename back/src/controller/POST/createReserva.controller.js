const createReservaServices = require("../../services/POST/restaurante/createReserva.service");

const createReservaController = async (req, res) => {
  try {
    const { cliente_id, mesa_id, fecha, cantidada_personas, estado } = req.body;
    const reserva = await createReservaServices({
      cliente_id,
      mesa_id,
      fecha,
      cantidada_personas,
      estado,
    });

    !reserva
      ? res.status(404).json({
          message: "No se puede crear la reserva, ya se encuentra reservado",
        })
      : res
          .status(200)
          .json({ message: "Reserva creada con exito", reserva: reserva });
  } catch (error) {
    res.status(505).json({ message: `ERROR EN EL SERVIDOR: ${error}` });
  }
};

module.exports = createReservaController;

// "b44a0dce-b38e-45bf-88d0-cd017e69a5e0" id mesa
// "7c3df64b-f308-4731-b01e-828cb6281e62" id otra mesa
// "27cfaffb-64d5-4ed8-98a2-f3b02d3c803f" id cliente
