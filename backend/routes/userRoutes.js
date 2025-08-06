const express = require("express");
const router = express.Router();
const { registerUser, loginUser,addCompany ,getAllCompanies,deleteCompany,getUserProfile } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/add", addCompany);
router.get("/companies", getAllCompanies);
router.delete("/companies/:id", deleteCompany);
router.get("/user", authMiddleware, getUserProfile);


module.exports = router;
