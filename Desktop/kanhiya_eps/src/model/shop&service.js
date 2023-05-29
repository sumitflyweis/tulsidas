const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const shopAndServiceSchema = mongoose.Schema({
  SubCategory: { type: String },
  image: {
    type: String,
    default: "https://www.youtube.com/results?search_query=dubay+pathway+",
  },
  category: { type: String },
  latitude: [Number],
  longitude: [Number],
  desc: { type: String },
});
const shopAndServiceModel = mongoose.model(
  "shopAndService",
  shopAndServiceSchema
);
module.exports = shopAndServiceModel;
