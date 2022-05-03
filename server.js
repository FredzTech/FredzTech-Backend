const mongoose = require("mongoose");
require("dotenv/config");
const app = require("./index");

//CONNECTING THE SERVER TO MONGOOSE.
//===================================
mongoose.connect(process.env.REACT_APP_BACKEND_URL, {
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
const port = process.env.PORT || 3000;

// CONFIGURING THE LISTENING PORT.
//================================
app.listen(port, () => {
  console.log(`This app is listening on port ${port}`);
});
