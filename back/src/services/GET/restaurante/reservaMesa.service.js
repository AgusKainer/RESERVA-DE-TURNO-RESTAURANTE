const { Reservas, Mesas } = require("../../../models/index.model");

const reservaConMesas = await Reservas.findByPk(id_reserva, {
  include: {
    model: Mesas,
    through: { attributes: [] }, // opcional: evita mostrar tabla intermedia
  },
});

module.exports = reservaConMesas;
