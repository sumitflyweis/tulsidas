const mongoose = require("mongoose");
const objectId=mongoose.Schema.Types.ObjectId

const myFavouriteSchema = mongoose.Schema({
    UserId: { type: objectId,ref:'customerProfile' },
    shop:{type:Object},
    vendorId:{type:objectId,ref:'vendorProfile'},
    image: {
        type: String, 
        default: "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg"
    },
    status:{type:String},

});
const myFavouriteModel = mongoose.model("myFavourite", myFavouriteSchema);
module.exports = myFavouriteModel;