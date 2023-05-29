const mongoose = require("mongoose");
const objectId=mongoose.Schema.Types.ObjectId

const verifiedSchema = mongoose.Schema({
    aadharCard: { type: String },
});
const verifiedModel = mongoose.model("verifiedUser", verifiedSchema);
module.exports = verifiedModel;