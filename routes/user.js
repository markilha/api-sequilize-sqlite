const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user-controllers');

router.get("/",UserController.getUsers)
router.get("/:id",UserController.getUsersId)
router.post("/",UserController.postUsers)
router.put("/:id",UserController.puttUsers)
router.delete("/:id",UserController.delUsers)

module.exports = router;