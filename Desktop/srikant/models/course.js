const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const coarseSchema = mongoose.Schema({
  vedio: [{
    type: String,
    default:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  }],
  message: {
    type: String,
  },
  leaderboard: {
    type: String,
  },
//   leaderboardId: {
//     type: objectId,
//   },
topics:{
  Assignment: {
    type:String,
  },
  branch: {
    type: String,
  },
},
  dailyTracker: {
    type: String,
  },
  cheatsheets: {
    type: String,
  },
});

module.exports = mongoose.model("coarseSchema", coarseSchema);
