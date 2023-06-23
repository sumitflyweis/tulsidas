const mongoose = require("mongoose");

const adverSchema = mongoose.Schema(
  {
    image: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
    },
    title: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "inactive",
    },
  },
  { timestamps: true }
);

const advertisemodel = mongoose.model("advertise", adverSchema);

module.exports = advertisemodel;
