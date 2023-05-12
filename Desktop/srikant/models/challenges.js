const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const challengesSchema = mongoose.Schema(
  {
    subjectName: {
      type: String,
    },
    Date: {
      type: String,
    },
    time:{
        type:String
    },
    totalChallenges:{
    type:String
    }
    },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("challenges", challengesSchema);
