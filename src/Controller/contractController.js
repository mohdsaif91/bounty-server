exports.uploadContract = (req, res) => {
  try {
    console.log(req.files.length);
    Object.keys(req.files).forEach((key) => {
      console.log(req.files[key]);
    });
    if (req.files.length > 0) {
      let uploadFile = req.files[0];
      const name = uploadFile.fieldname;
      const splitedCode = req.files[0].buffer.toString().split("\n");
      const newfunctionNameArray = [];
      splitedCode.filter((m) => {
        if (m.includes("function")) {
          newfunctionNameArray.push({ functionName: m, bountyValue: 0 });
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
