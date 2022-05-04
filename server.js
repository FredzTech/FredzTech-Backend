// IMPORTING THE EXTERNAL MODULES REQUIRED
//================================
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
require("dotenv/config");
// INITIALIZING THE APPLICATION
// =============================
const app = express();

//CONNECTING THE SERVER TO MONGOOSE.
//===================================
const connectionUrl =
  "mongodb+srv://FredzTech:Beijingbike5@cluster0.a9nya.mongodb.net/freds_portfolio?retryWrites=true&w=majority";
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// CONNECTION TEST
//=================
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("The freds portfolio database connected successfully.");
});
// GLOBAL MIDDLEWARES
//================
app.use(express.json()); //Express own inbuilt middleware for recognizing and interacting with request to the server
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// REGISTERING EJS AS THE VIEW ENGINE THAT WILL RENDER ANY PAGES.
//===============================================================
app.set("view engine", "ejs");

// IMPORTING THE ROUTES
//======================
const HomePageRoute = require("./routes/homePageRoute");
const BrandsRoute = require("./routes/brandsRoute");
const ContactsRoute = require("./routes/contactsRoute");
const ExperiencesRoute = require("./routes/experiencesRoute");
const SkillsRoute = require("./routes/skillsRoute");
const TestimonialsRoute = require("./routes/testimonialsRoute");
const WorkExperiencesRoute = require("./routes/workExperiencesRoute");
const WorksRoute = require("./routes/worksRoute");
const AboutUsRoute = require("./routes/aboutUsRoute");

// ROUTE LEVEL MIDDLEWARES.
//=========================
app.use("/", HomePageRoute);
app.use("/aboutUs", AboutUsRoute);
app.use("/brands", BrandsRoute);
app.use("/contacts", ContactsRoute);
app.use("/experiences", ExperiencesRoute);
app.use("/skills", SkillsRoute);
app.use("/testimonials", TestimonialsRoute);
app.use("/workexperiences", WorkExperiencesRoute);
app.use("/works", WorksRoute);

// CONFIGURING THE LISTENING PORT.
//================================
app.listen(port, () => {
  console.log(`This app is listening on port ${port}`);
});
