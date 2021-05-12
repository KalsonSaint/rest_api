const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// Controller Methods
const { getUsers, getOneUser, createUser, updateUser, deleteUser } =
  UserController;

/**
 * User Routes
 */

// Fetch all users
router.get("/", getUsers);

// Fetch One user
router.get("/:userId", getOneUser);

// Create a user
router.post("/", createUser);

// Update user
router.patch("/:userId", updateUser);

// Delete user
router.delete("/:userId", deleteUser);

module.exports = router;
