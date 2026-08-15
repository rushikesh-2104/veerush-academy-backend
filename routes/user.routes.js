const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  changeStatus
} = require("../controllers/user.controller");

// Create User
router.post("/", createUser);

// Get All Users
router.get("/", getUsers);

// Get User By Id
router.get("/:id", getUserById);

// Update User
router.put("/:id", updateUser);

// Delete User
router.delete("/:id", deleteUser);

// Activate / Deactivate User
router.patch("/:id/status", changeStatus);

module.exports = router;