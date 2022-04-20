const mongoose = require("mongoose");
const { Schema } = mongoose;

const AboutUsSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
}); //This is how the database fields are going to be filled up.

module.exports = mongoose.model("AboutUs", AboutUsSchema);
