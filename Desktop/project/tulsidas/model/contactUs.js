const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  mobile: {
    type: String,
  },
});

const contact = mongoose.model("contactUs", contactSchema);

module.exports = contact;
