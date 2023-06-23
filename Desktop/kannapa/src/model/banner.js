const mongoose = require("mongoose");

const BannerSchema = mongoose.Schema({
  image: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
  },
  desc: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "inactive",
  },
});

const bannermodel = mongoose.model("banner", BannerSchema);

module.exports = bannermodel;
