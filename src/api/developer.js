const express = require("express");

const developerController = require("../Controller/developerController");

const router = express.Router();

router.post("/add", developerController.addDeveloper);

module.exports = router;
