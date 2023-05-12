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
  image: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
  },
});

module.exports = mongoose.model("competition", competitionSchema);
