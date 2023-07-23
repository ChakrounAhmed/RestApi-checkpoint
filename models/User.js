const mongoose = require("mongoose");

//User Schema
const contactSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  age: Number,
  adresse: String,
});

module.exports = mongoose.model("User", contactSchema);
