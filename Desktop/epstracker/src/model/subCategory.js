const mongoose = require("mongoose");
//const objectId=mongoose.Schema.Types.ObjectId

const SubcategorySchema = mongoose.Schema({
  SC: { type: String },
  isSave: { type: Boolean },
  image: {
    type: String,
    default: "https://www.youtube.com/results?search_query=dubay+pathway+",
  },

  data: { type: Object },
  BookingStatus: {
    type: String,
    default: "pending",
    enum: ["pending", "success"],
  },
});
const SubcategoryModel = mongoose.model("Subcategory", SubcategorySchema);
module.exports = SubcategoryModel;
