const { Contact } = require("../models/Models");

require("dotenv/config");

//SERVER-SIDE RENDERING WITH EJS.
//===============================
const fetchPageAdminController = (req, res) => {
  Contact.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.render("contactsPage", { items: items });
    }
  });
};

const fetchPageController = (req, res) => {
  Contact.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.status(200).send(items);
    }
  });
};
// THE POST REQUEST FOR PROCESSING THE UPLOADED FILE.
//====================================================

const postImageController = async (req, res, next) => {
  try {
    console.log(req.body);
    await Contact.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    res.status(200).redirect("contacts/admin");
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  fetchPageAdminController,
  fetchPageController,
  postImageController,
};
