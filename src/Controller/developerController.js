const { developer } = require("../util/db");

exports.addDeveloper = (req, res) => {
  try {
    developer
      .create(req.body)
      .then((data) => {
        res.status(200).send(data.dataValues);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDeveloper = (req, res) => {
  try {
    developer.findAll().then((data) => {
      console.log(data);
      res.status(200).send(data);
    });
  } catch (error) {
    res.send(error);
  }
};
