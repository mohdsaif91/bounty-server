const filesaveOperation = (file) => {
  let uploadFile = file;
  const name = uploadFile.originalname;
  const splitedCode = file.buffer.toString().split("\n");
  const newfunctionNameArray = [];
  splitedCode.filter((m) => {
    if (m.includes("function")) {
      newfunctionNameArray.push({ functionName: m, bountyValue: 0 });
    }
  });
  return { contractName: name, functionNameArray: newfunctionNameArray };
};

exports.uploadContract = (req, res) => {
  try {
    console.log(req.files.length);
    const functionArray = [];
    Object.keys(req.files).forEach((key) => {
      console.log(req.files[key]);
      functionArray.push(filesaveOperation(req.files[key]));
    });
    console.log(functionArray);
    res.status(200).send(functionArray);
    // if (req.files.length > 0) {
    //   let uploadFile = req.files[0];
    //   const name = uploadFile.fieldname;
    //   const splitedCode = req.files[0].buffer.toString().split("\n");
    //   const newfunctionNameArray = [];
    //   splitedCode.filter((m) => {
    //     if (m.includes("function")) {
    //       newfunctionNameArray.push({ functionName: m, bountyValue: 0 });
    //     }
    //   });
    //   const generatedReponse = [
    //     { contractName: name, functionNameArray: newfunctionNameArray },
    //   ];
    //   res.status(200).send(generatedReponse);
    // } else {
    //   res.status(400).send("Image field is required");
    // }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
