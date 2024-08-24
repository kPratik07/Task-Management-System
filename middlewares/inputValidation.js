const { check, validationResult } = require("express-validator");

const validateTask = [
  check("title").notEmpty().withMessage("Title is required"),
  check("status")
    .isIn(["pending", "in-progress", "completed"])
    .withMessage("Invalid status"),
  check("priority")
    .isIn(["low", "medium", "high"])
    .withMessage("Invalid priority"),
];

const validateUser = [
  check("name").notEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Invalid email format"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateTask, validateUser, handleValidationErrors };
