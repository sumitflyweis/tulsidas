const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const updaterankk = mongoose.Schema({
  tournament: {
    type: objectid,
    ref: "tournament",
  },
  rank: {
    type: objectid,
    ref: "ranking",
  },
  teamName: {
    type: String,
    default: "",
  },
  rating: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("updateranking", updaterankk);
