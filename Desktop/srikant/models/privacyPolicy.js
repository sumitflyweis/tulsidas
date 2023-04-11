const mongoose = require("mongoose"); 

const privacySchema = mongoose.Schema({
   data:{type:String}
})

const heroprivacy  = mongoose.model('privacy',privacySchema);

module.exports = heroprivacy