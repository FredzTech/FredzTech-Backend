const { Experience } = require("../models/Models");

require("dotenv/config");

//SERVER-SIDE RENDERING WITH EJS.
//===============================
const fetchPageAdminController = (req, res) => {
  Experience.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.render("experiencesPage", { items: items });
    }
  });
};

const fetchPageController = (req, res) => {
  Experience.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.send(items).status(200);
    }
  });
};
// THE POST REQUEST FOR PROCESSING THE UPLOADED FILE.
//====================================================

const postImageController = async (req, res, next) => {
  try {
    console.log(req.body);
    let data = await Experience.create({
      year: req.body.year,
      type: req.body.type,
    });

    res.status(200).redirect("experiences/admin");
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  fetchPageAdminController,
  fetchPageController,
  postImageController,
};
