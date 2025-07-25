const { Router } = require("express");
const {
  allReservasController,
  allClientController,
  createClientController,
  createMesaController,
  allMesaController,
  createReservaController,
} = require("../controller/index.controller");

const router = Router();

router.get("/reservas", allReservasController);
router.get("/clientes", allClientController);
router.get("/mesa", allMesaController);
router.post("/crearcliente", createClientController);
router.post("/crearmesa", createMesaController);
router.post("/creareserva", createReservaController);
module.exports = router;
