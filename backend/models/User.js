const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  gender: String,
  branch: String,
  course: String,
  address: String,
  interest: String,
});

module.exports = mongoose.model("User", userSchema);
