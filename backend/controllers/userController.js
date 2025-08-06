const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Company = require("../models/companyModel");

// Register user
exports.registerUser = async (req, res) => {
  const { name, email, password, gender, branch, course, address, interest } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      gender,
      branch,
      course,
      address,
      interest,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        branch: user.branch,
        course: user.course,
        address: user.address,
        interest: user.interest,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        branch: user.branch,
        course: user.course,
        address: user.address,
        interest: user.interest,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add company
exports.addCompany = async (req, res) => {
  try {
    const lastCompany = await Company.findOne().sort({ sno: -1 });
    const newSno = lastCompany ? lastCompany.sno + 1 : 1;

    const company = new Company({
      sno: newSno,
      company: req.body.company,
      role: req.body.role,
      package: req.body.package,
      location: req.body.location,
      companyUrl: req.body.companyUrl,
    });

    await company.save();

    res.status(201).json({ message: "Company added", company });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all companies
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find().sort({ sno: 1 });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete company by id
exports.deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.json({ message: "Company deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//user Profile


exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // hide password
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
