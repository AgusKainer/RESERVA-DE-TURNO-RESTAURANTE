const { Mesas, Reservas } = require("../../../models/index.model");

const createReservaMesaService = async ({ cliente_id, fecha, mesa_id }) => {
  const reservas = await Reservas.create({
    cliente_id,
    fecha,
  });
  await reservas.addMesas(mesa_id);
  return reservas;
};

module.exports = createReservaMesaService;
