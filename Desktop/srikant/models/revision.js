const mongoose = require("mongoose"); 

const revisionSchema = mongoose.Schema({
   name:{type:String},
   material:{type:String},
})

const revision  = mongoose.model('revision',revisionSchema);

module.exports = revision