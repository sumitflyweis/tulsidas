const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const cheatSheetSchema = mongoose.Schema(
  {
    cheatSheet: {
      type: String,
      default: "https://www.orimi.com/pdf-test.pdf",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("cheatSheet", cheatSheetSchema);
