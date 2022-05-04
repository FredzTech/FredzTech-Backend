const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const { Contact } = require("../models/Models");

require("dotenv/config");

// CONFIGURING THE MIDDLEWARES
//==============================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// REGISTERING EJS AS TEMPLATING ENGINE.
//=======================================
app.set("view engine", "ejs");

console.log(
  process.env.S3_ACCESS_KEY,
  process.env.S3_SECRET_ACCESS_KEY,
  process.env.S3_BUCKET_REGION,
  process.env.S3_BUCKET_NAME
);

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
    cb(null, `Contact-${Date.now()}.jpeg`);
  },
});

const upload = multer({
  storage: storage,
});

//SERVER-SIDE RENDERING WITH EJS.
//===============================
const fetchPageController = async (req, res) => {
  await Contact.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.render("contactsPage", { items: items });
    }
  });
};
// THE POST REQUEST FOR PROCESSING THE UPLOADED FILE.
//====================================================

const postImageController = (req, res, next) => {
  const uploadSingle = upload.single("image"); //Multer uploads the image to aws s3.
  //WORKING WITH THE RETURNED DATA AFTER MULTER DOES ITS THING.
  uploadSingle(req, res, async (err) => {
    if (err) return res.status(400).send(err);

    await Contact.create({
      name: req.body.name,
      desc: req.body.desc,
      location: req.file.location,
    });

    res.status(200).json({ data: req.file.location });
  });
};

module.exports = { fetchPageController, postImageController };
