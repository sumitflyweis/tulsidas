const mongoose = require("mongoose");

const settingSchema = mongoose.Schema({
  liveLocation: { type: String },
  notification: { type: String },

});

const setting = mongoose.model("setting", settingSchema);

module.exports = setting;
