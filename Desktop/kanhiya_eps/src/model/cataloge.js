const mongoose = require("mongoose");
const objectId=mongoose.Schema.Types.ObjectId

const catalogueSchema = mongoose.Schema({
    image :{type:String,default:"https://www.youtube.com/results?search_query=dubay+pathway+"},
    vendorId:{type:objectId,ref:'vendorProfile'},
    itemName: { type: String },
    Price:{type:Number},
    desc:{type:String},
      
});
const catalogueModel = mongoose.model("catalogue", catalogueSchema);
module.exports = catalogueModel;
