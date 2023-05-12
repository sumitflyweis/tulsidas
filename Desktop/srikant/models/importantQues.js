const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const impQuesSchema = mongoose.Schema(
  {
    impQues: {
      type: String,
      default: "https://www.orimi.com/pdf-test.pdf",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("impQues", impQuesSchema);
