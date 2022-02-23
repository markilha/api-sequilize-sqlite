const express = require("express");
const router = express.Router();
const EntradaController = require('../controllers/entrada-controller');

router.get("/",EntradaController.getEntradas)
router.get("/:id",EntradaController.getEntradaId)
router.post("/",EntradaController.postEntrada)
router.put("/:id",EntradaController.putEntrada)
router.delete("/:id",EntradaController.delEnt)

module.exports = router;