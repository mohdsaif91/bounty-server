const express = require("express");
const multer = require("multer");

const contractController = require("../Controller/contractController");

const router = express.Router();

const storage = multer.memoryStorage({
  destination: function (req, file, callBack) {
    console.log(file, " OUTSIDE");
    callBack(null, "");
  },
});

const contractUpload = multer({ storage }).single("solFile");

router.post("/upload", contractUpload, contractController.uploadContract);

module.exports = router;
