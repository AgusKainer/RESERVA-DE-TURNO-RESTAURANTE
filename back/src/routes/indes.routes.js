const { Router } = require("express");
const {
  allReservasController,
  allClientController,
  createClientController,
} = require("../controller/index.controller");

const router = Router();

router.get("/reservas", allReservasController);
router.get("/clientes", allClientController);
router.post("/crearcliente", createClientController);

module.exports = router;
