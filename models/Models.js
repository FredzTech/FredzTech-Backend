const mongoose = require("mongoose");
const { Schema } = mongoose;
// CREATION OF THE SCHEMAS FOR OUR PORTFOLIO.
//============================================
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
});

const BrandSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const ExperienceSchema = new Schema({
  year: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: Array,
    required: true,
  },
});
const SkillSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
const TestimonialSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  company: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
});
const WorkExperienceSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  company: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
});
const WorkSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

// CREATION OF THE USABLE MODELS
//===============================
const AboutUs = mongoose.model("AboutUs", AboutUsSchema);
const Brand = mongoose.model("Brand", BrandSchema);
const Contact = mongoose.model("Contact", ContactSchema);
const Experience = mongoose.model("Experience", ExperienceSchema);
const Skill = mongoose.model("Skill", SkillSchema);
const Testimonial = mongoose.model("Testimonial", TestimonialSchema);
const WorkExperience = mongoose.model("WorkExperience", WorkExperienceSchema);
const Work = mongoose.model("Work", WorkSchema);

// MODEL EXPORTS FROM THE MODELS MODULE.
//=======================================
module.exports = {
  AboutUs,
  Brand,
  Contact,
  Experience,
  Skill,
  Testimonial,
  WorkExperience,
  Work,
};
