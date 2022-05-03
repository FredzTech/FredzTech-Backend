const mongoose = require("mongoose");
require("dotenv/config");
const app = require("./index");
const port = process.env.PORT || 3000;

//CONNECTING THE SERVER TO MONGOOSE.
//===================================
const connectionUrl =
  "mongodb+srv://FredzTech:Beijingbike5@cluster0.a9nya.mongodb.net/freds_portfolio?retryWrites=true&w=majority";
const otherConnectionUrl = process.env.REACT_APP_BACKEND_URL;
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

// CONFIGURING THE LISTENING PORT.
//================================
app.listen(port, () => {
  console.log(`This app is listening on port ${port}`);
});
