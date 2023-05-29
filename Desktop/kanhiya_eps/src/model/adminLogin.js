const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: "admin",
  },
});

const admin = mongoose.model("admin", adminSchema);

module.exports = admin;
