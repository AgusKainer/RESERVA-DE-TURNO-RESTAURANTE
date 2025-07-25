const { Reservas } = require("../../../models/index.model");

const createReservaServices = async ({
  cliente_id,
  mesa_id,
  fecha,
  cantidada_personas,
  estado,
}) => {
  const reserva = await Reservas.create({
    cliente_id,
    mesa_id,
    fecha,
    cantidada_personas,
    estado,
  });
  return reserva;
};

module.exports = createReservaServices;
