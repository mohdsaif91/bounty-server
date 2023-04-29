const { developer } = require("../util/db");

exports.addDeveloper = (req, res) => {
  try {
    developer
      .create(req.body)
      .then((data) => {
        res.send(200).send(data);
        // res.end();
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
    // console.log(req.body);
    // res.send("Api is working");
  } catch (error) {
    res.send(error);
  }
};
