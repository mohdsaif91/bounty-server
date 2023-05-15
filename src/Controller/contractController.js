exports.uploadContract = (req, res) => {
  try {
    if (req.file) {
      let uploadFile = req.file;
      const name = uploadFile.name;
      const strRegex = /function(.*?)```/gs;
      console.log(strRegex.test(req.file.buffer.toString()));
      //   for (let i = 0; i <= req.file.buffer.toString().length; i++) {
      //     let substring = req.file.buffer.toString().substring(0, 10);
      //     console.log(substring);
      //   }
      //   const solFileCode = req.file.buffer.toString().trim();
      //   console.log(solFileCode.split("function"));
    } else {
      res.status(400).send("Image field is required");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
