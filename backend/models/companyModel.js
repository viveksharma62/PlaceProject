// models/companyModel.js
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  sno: { type: Number, required: true },
  company: { type: String, required: true },
  role: { type: String, required: true },
  package: { type: String, required: true },
  location: { type: String, required: true },
  companyUrl: { type: String, required: true }
});

module.exports = mongoose.model("CompanyList", companySchema);
