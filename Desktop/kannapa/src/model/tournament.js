const mongoose = require("mongoose");

const tournamentSchema = mongoose.Schema({
  tournament: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("tournament", tournamentSchema);
