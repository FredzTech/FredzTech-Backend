const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const { AboutUs } = require("../models/Models");
require("dotenv/config");

// CONNECTING TO THE AWS S3 BUCKET
//===================================
const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.S3_BUCKET_REGION,
});

const storage = multerS3({
  s3,
  bucket: process.env.S3_BUCKET_NAME,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, `AboutUs-${Date.now()}.jpeg`);
  },
});

const upload = multer({
  storage: storage,
});

//SERVER-SIDE RENDERING WITH EJS.
//===============================
const fetchPageController = (req, res) => {
  AboutUs.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.render("aboutUsPage", { items: items });
    }
  });
};

// THE POST REQUEST FOR PROCESSING THE UPLOADED FILE.
//====================================================

const postImageController = (req, res, next) => {
  console.log("Post Request Acknowledged.");
  const uploadSingle = upload.single("image"); //Multer uploads the image to aws s3.
  //WORKING WITH THE RETURNED DATA AFTER MULTER DOES ITS THING.
  uploadSingle(req, res, async (err) => {
    if (err) return res.status(400).send(err);

    await AboutUs.create({
      title: req.body.name,
      description: req.body.desc,
      imageUrl: req.file.location,
    });

    res.status(200).json({ data: req.file.location });
  });
};

module.exports = { fetchPageController, postImageController };
