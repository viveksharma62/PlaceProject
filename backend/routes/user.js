// routes/user.js

const express = require("express");
const multer = require("multer");
const path = require("path");
const User = require("../models/User");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

// Multer setup (agar already nahi kiya to)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
const upload = multer({ storage: storage });

// **Yeh route bas yahin add kar de**  
router.put("/profile-image", protect, upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const imageUrl = `/uploads/${req.file.filename}`;

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.profileImage = imageUrl;
    await user.save();

    res.json({ message: "Profile image updated", imageUrl });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Baaki user routes yahin hote honge

module.exports = router;
