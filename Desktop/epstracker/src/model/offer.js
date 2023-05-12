const mongoose = require("mongoose");
const objectId=mongoose.Schema.Types.ObjectId

const offerSchema = mongoose.Schema({
    UserId: { type: objectId,ref:'customerProfile' },
    vendorId:{type:objectId,ref:'vendorProfile'},
    existingPrice:{type:Number},
    offerPrice:{type:Number},
    startTime:{type:String},
    endTime:{type:String},
    desc:{type:String},

});
const offersModel = mongoose.model("offer", offerSchema);
module.exports = offersModel;