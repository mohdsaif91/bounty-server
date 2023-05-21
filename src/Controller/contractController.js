exports.uploadContract = (req, res) => {
  try {
    if (req.file) {
      let uploadFile = req.file;
      const name = uploadFile.fieldname;
      const splitedCode = req.file.buffer.toString().split("\n");
      const newfunctionNameArray = [];
      splitedCode.filter((m) => {
        if (m.includes("function")) {
          newfunctionNameArray.push({ functionName: m, bountyValue: "" });
        }
      });
      const generatedReponse = [
        { contractName: name, functionNameArray: newfunctionNameArray },
      ];
      res.status(200).send(generatedReponse);
    } else {
      res.status(400).send("Image field is required");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
