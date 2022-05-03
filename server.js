// IMPORTING THE EXTERNAL MODULES REQUIRED
//================================
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
//IMPORTING THE MODELS CREATED FOR USE
//=====================================
const { AboutUs } = require("./models/Models");

// INITIALIZING THE APPLICATION
// =============================
const app = express();
const port = process.env.PORT || 3003;
//APP CONFIGURATIONS
//==================
mongoose.connect(process.env.REACT_APP_BACKEND_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("The freds portfolio database connected successfully.");
});
// MIDDLE WARES
//================
app.use(express.json()); //Express own inbuilt middleware for recognizing and interacting with request to the server
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//ROUTES CONFIGURATION
//======================

// GET REQUESTS
// =============
app.get("/", (req, res) => {
  try {
    res
      .send("You have connected to the express server successfully.")
      .status(200);
  } catch (error) {
    console.log(error);
    res.send("Your backend is offline.");
  }
});

app.get("/aboutUs", async (req, res) => {
  let findings = await AboutUs.find({});

  try {
    res.send(findings).status(300);
  } catch (error) {
    res.send(error).status(500);
  }
});

//POST REQUESTS
//===============

app.post("/aboutUs", async (req, res) => {
  let dataRecieved = req.body; //The power of body parser in interception manifested.
  try {
    const request = await AboutUs.create(dataRecieved);
    await request.save();
    res.send(request);
  } catch (error) {
    let err = error;
    res.send(err + " " + " The data is already registered.");

    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`This app is listening on port ${port}`);
});
