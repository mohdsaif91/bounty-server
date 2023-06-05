const filesaveOperation = (file) => {
  let uploadFile = file;
  const name = uploadFile.originalname;
  const splitedCode = file.buffer.toString().split("\n");
  const newfunctionNameArray = [];
  splitedCode.filter((m) => {
    if (m.includes("function") || !m.includes("//")) {
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
    res.status(200).send(functionArray);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
