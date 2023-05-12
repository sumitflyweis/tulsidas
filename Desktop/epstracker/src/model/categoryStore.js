const mongoose = require("mongoose");
const objectId=mongoose.Schema.Types.ObjectId

const categoryStoreSchema = mongoose.Schema({
    categoryName: { type: String },
    image :{type:String,default:"https://www.youtube.com/results?search_query=dubay+pathway+"},
    SubCategory:{type:[objectId],ref:'Subcategory'}
      
});
const categoryStoreModel = mongoose.model("categoryStore", categoryStoreSchema);
module.exports = categoryStoreModel;
