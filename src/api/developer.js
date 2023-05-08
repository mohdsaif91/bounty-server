const express = require("express");

const developerController = require("../Controller/developerController");

const router = express.Router();

router.post("/add", developerController.addDeveloper);
router.get("/", developerController.getDeveloper);

module.exports = router;
