const User = require("../models/User");

/**
 * Fetches all users
 */
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      users,
      message: "users fetched successfully",
    });
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
};

/**
 * Fetches one user
 */
exports.getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
};

/**
 * Create user
 */
exports.createUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    country: req.body.country,
  });

  try {
    const savedUser = await user.save();
    res.status(200).json({
      savedUser,
      message: "User created successfully",
    });
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
};

/**
 * Update one user
 */
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      { $set: { name: req.body.name } }
    );
    res.json({ updatedUser, message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
};

/**
 * Delete user
 */
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.remove({ _id: req.params.userId });
    res.json({
      deletedUser,
      //   message: "user deleted successfully",
      code: res.status(200).send("User deleted successfully"),
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};
