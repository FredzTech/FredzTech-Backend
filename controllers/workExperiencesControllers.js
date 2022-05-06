const { WorkExperience } = require("../models/Models");

require("dotenv/config");

//SERVER-SIDE RENDERING WITH EJS.
//===============================
const fetchPageAdminController = (req, res) => {
  WorkExperience.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.render("workExperiencesPage", { items: items });
    }
  });
};

const fetchPageController = (req, res) => {
  WorkExperience.find({}, (err, items) => {
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
    await WorkExperience.create({
      name: req.body.name,
      company: req.body.company,
      description: req.body.description,
    });

    res.status(200).redirect("workExperiences/admin");
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  fetchPageAdminController,
  fetchPageController,
  postImageController,
};
