const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const competitionSchema = mongoose.Schema({
    competition: {
    type: String,
    require: true,
  },
  competitionParts: {
    type: [objectId],
    ref: "competitionParts",
  },
});

module.exports = mongoose.model("competition", competitionSchema);
