// src/routes/authRoutes.js

const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const {
  validateUser,
  handleValidationErrors,
} = require("../middlewares/inputValidation");

const router = express.Router();

router.post("/register", validateUser, handleValidationErrors, registerUser);
router.post("/login", validateUser, handleValidationErrors, loginUser);

module.exports = router;
