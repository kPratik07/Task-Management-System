const express = require("express");
const {
  create,
  getAll,
  update,
  remove,
} = require("../controllers/taskController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const {
  validateTask,
  handleValidationErrors,
} = require("../middlewares/inputValidation");

const router = express.Router();

router.use(authMiddleware);

router.post(
  "/",
  roleMiddleware(["admin", "user"]),
  validateTask,
  handleValidationErrors,
  create
);
router.get("/", roleMiddleware(["admin", "user"]), getAll);
router.put(
  "/:id",
  roleMiddleware(["admin"]),
  validateTask,
  handleValidationErrors,
  update
);
router.delete("/:id", roleMiddleware(["admin"]), remove);

module.exports = router;
