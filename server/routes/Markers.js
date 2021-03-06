const express = require("express");
const router = express.Router();
const markersController = require("./../Controllers/MarkersController");

router.get("", markersController.get);

module.exports = router;
