const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    title: {
    type: String,
   // required: true,
  },
  desc: {
    type: String,
   // required: true,
  },
  data: {
    type: String,
   // required: true,
  },
  
});

const contact = mongoose.model('contactUs', contactSchema);

module.exports = contact
