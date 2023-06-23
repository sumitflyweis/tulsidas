const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;

const featuredvediooSchema = new mongoose.Schema({
  vedio: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
  time: {
    type: String,
    default: "",
  },
  pasteVideoLink: {
    type: String,
    default: "",
  },
  status:{
    type:String,
    default:"inactive"
  }
});

const featuredvediooModel = mongoose.model(
  "featuredvedio",
  featuredvediooSchema
);

module.exports = featuredvediooModel;
