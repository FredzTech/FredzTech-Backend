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

// GLOBAL MIDDLEWARES
//================
app.use(express.json()); //Express own inbuilt middleware for recognizing and interacting with request to the server
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// ROUTE LEVEL MIDDLEWARES.
//=========================
app.use("/", HomePageRoute);
app.use("/aboutUs", AboutUsRoute);

// EXPORTING THE MAIN APPLICATION TO THE SERVER.
//==============================================
module.exports = app;
