const mongoose = require("mongoose");

const fanatikkSchema = mongoose.Schema({
  pasteLink: {
    type: String,
    default: "",
  },
  reelTitle: {
    type: String,
    default: "",
  },
  uploadReel:{
    type:String,
    default:""
  }
})

const fanatikkmodel = mongoose.model("fanatikkZone", fanatikkSchema);

module.exports = fanatikkmodel
