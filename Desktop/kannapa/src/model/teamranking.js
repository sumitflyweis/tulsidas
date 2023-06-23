const mongoose = require("mongoose");

const teamrank = mongoose.Schema({
  ranking: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("ranking", teamrank);
