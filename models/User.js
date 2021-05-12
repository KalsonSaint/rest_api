const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  country: { type: String, required: [true, "Country is required"] },
});

module.exports = mongoose.model("Users", UserSchema);
