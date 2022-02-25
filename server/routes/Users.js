const express = require("express");
const router = express.Router();
const usersController = require("./../Controllers/UsersController");

router.post("", usersController.signUp);

module.exports = router;
