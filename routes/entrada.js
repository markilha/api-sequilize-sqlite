const express = require("express");
const router = express.Router();
const EntradaController = require('../controllers/entrada-controller');

router.get("/:id",EntradaController.getEntradas)
router.get("/:id",EntradaController.getEntradaId)
router.get("/sumdes/:id",EntradaController.getEntradaSumdes)
router.get("/sumrec/:id",EntradaController.getEntradaSumRec)
router.post("/",EntradaController.postEntrada)

router.put("/:id",EntradaController.putEntrada)
router.delete("/:id",EntradaController.delEnt)

module.exports = router;