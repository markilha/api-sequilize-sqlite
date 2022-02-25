const express = require("express");
const router = express.Router();
const CategoriaController = require('../controllers/categoria-controller');

router.get("/",CategoriaController.getCategorias)
router.get("/:id",CategoriaController.getCategoriaId)
router.post("/",CategoriaController.postCategoria)
router.put("/:id",CategoriaController.putCategoria)
router.delete("/:id",CategoriaController.delEnt)

module.exports = router;