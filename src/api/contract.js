const express = require("express");
const multer = require("multer");

const contractController = require("../Controller/contractController");

const router = express.Router();

const storage = multer.memoryStorage({
  destination: function (req, file, callBack) {
    callBack(null, "");
  },
});

const contractUpload = multer({ storage }).array("solFile", 10);

router.post("/upload", contractUpload, contractController.uploadContract);

module.exports = router;
