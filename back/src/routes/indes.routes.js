const { Router } = require("express");
const { allReservasController } = require("../controller/index.controller");

const router = Router();

router.get("/todos", allReservasController);

module.exports = router;
