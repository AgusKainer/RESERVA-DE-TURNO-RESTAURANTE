const { Router } = require("express");
const {
  allReservasController,
  allClientController,
  createClientController,
  createMesaController,
  allMesaController,
  createReservaController,
  createReservaMesasController,
  getReservasConMesasController,
} = require("../controller/index.controller");

const router = Router();

router.get("/reservamesa", getReservasConMesasController);
router.get("/reservas", allReservasController);
router.get("/clientes", allClientController);
router.get("/mesa", allMesaController);
router.post("/crearcliente", createClientController);
router.post("/crearmesa", createMesaController);
router.post("/creareserva", createReservaController);
router.post("/creareservas", createReservaMesasController);
module.exports = router;
