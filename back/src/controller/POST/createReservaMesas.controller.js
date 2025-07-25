const { Mesas, Reservas } = require("../../models/index.model");

const createReservaMesasController = async (req, res) => {
  try {
    const { cliente_id, fecha, cantidada_personas, mesaIds } = req.body;

    // 👉 1. Crear la reserva
    const nuevaReserva = await Reservas.create({
      cliente_id,
      fecha,
      cantidada_personas,
    });

    // 👉 2. Asociar mesas a la reserva
    let mesasAsociadas = [];

    if (mesaIds && mesaIds.length > 0) {
      mesasAsociadas = await Mesas.findAll({
        where: {
          id: mesaIds,
        },
      });

      await nuevaReserva.addMesas(mesasAsociadas); // Relación N:M
    }

    // 👉 3. Formatear la respuesta incluyendo las mesas
    const reservaConMesas = {
      ...nuevaReserva.toJSON(),
      mesas: mesasAsociadas.map((mesa) => ({
        id: mesa.id,
        nombre: mesa.nombre,
        capacidad: mesa.capacidad,
      })),
    };

    res.status(201).json(reservaConMesas);
  } catch (error) {
    console.error("Error al crear la reserva:", error);
    res.status(500).json({
      message: "ERROR DEL SERVIDOR: " + error.message,
    });
  }
};

module.exports = createReservaMesasController;

// "a5cd175c-5549-4a5d-9a9c-28282300a0b4" id cliente
// "9884f40b-efa5-48fe-9f48-949e8d6369db" una mesa
// "2678a3a7-eaf0-4d53-9ab1-e6ea2bd96ef8" otra mesa

/* json para enviar

{
  "cliente_id": "a5cd175c-5549-4a5d-9a9c-28282300a0b4",
  "fecha": "2025-07-29",
  "cantidada_personas": 4,
  "mesaIds": [
    "9884f40b-efa5-48fe-9f48-949e8d6369db",
    "2678a3a7-eaf0-4d53-9ab1-e6ea2bd96ef8"
  ]
}
*/
