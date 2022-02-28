const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user-controllers');

router.get("/",UserController.getUsers)
router.get("/:email",UserController.getUsersEmail)
router.post("/",UserController.postUsers)
router.put("/:id",UserController.puttUsers)
router.delete("/:id",UserController.delUsers)

module.exports = router;