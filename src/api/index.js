const express = require("express");

const emojis = require("./emojis");
const developer = require("./developer");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/developer", developer);

module.exports = router;
