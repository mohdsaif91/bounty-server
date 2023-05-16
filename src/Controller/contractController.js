exports.uploadContract = (req, res) => {
  try {
    if (req.file) {
      let uploadFile = req.file;
      const name = uploadFile.name;
      const splitedCode = req.file.buffer.toString().split("\n");
      const functionNameArray = splitedCode.filter((m) => {
        // console.log(m);
        if (m.includes("function")) {
          return m;
        }
      });
      res.status(200).send(functionNameArray);
    } else {
      res.status(400).send("Image field is required");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
