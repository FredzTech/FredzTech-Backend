// IMPORTING THE EXTERNAL MODULES REQUIRED
//================================
const express = require("express");
const cors = require("cors");

// INITIALIZING THE APPLICATION
// =============================
const app = express();

// IMPORTING THE ROUTES
//======================
const AboutUsRoute = require("./routes/aboutUsRoute");
const HomePageRoute = require("./routes/homePageRoute");
const BrandsRoute = require("./routes/brandsRoute");
const ContactsRoute = require("./routes/contactsRoute");
const ExperiencesRoute = require("./routes/experiencesRoute");
const SkillsRoute = require("./routes/skillsRoute");
const TestimonialsRoute = require("./routes/testimonialsRoute");
const WorkExperiencesRoute = require("./routes/workExperiencesRoute");
const WorksRoute = require("./routes/worksRoute");

// GLOBAL MIDDLEWARES
//================
app.use(express.json()); //Express own inbuilt middleware for recognizing and interacting with request to the server
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// REGISTERING EJS AS THE VIEW ENGINE THAT WILL RENDER ANY PAGES.
//===============================================================
app.set("view engine", "ejs");
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

// EXPORTING THE MAIN APPLICATION TO THE SERVER.
//==============================================
module.exports = app;
