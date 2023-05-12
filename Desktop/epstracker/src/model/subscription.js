const mongoose = require("mongoose");
const objectId=mongoose.Schema.Types.ObjectId

const SubscriptionSchema = mongoose.Schema({
    Price: { type: String,default:0 },
    validity:{type: String,default:0},
    vendorCategory:{type: String},
    vendorId:{type:objectId,ref:'vendorProfile'},
    desc:{type:String},

});
const subscriptionModel = mongoose.model("subscription", SubscriptionSchema);
module.exports = subscriptionModel;
