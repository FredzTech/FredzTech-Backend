const { AboutUs } = require("../models/Models");

const fetchController = async (req, res) => {
  let findings = await AboutUs.find({});

  try {
    res.send(findings).status(200);
  } catch (error) {
    res.send(error).status(500);
  }
};

module.exports = { fetchController };
