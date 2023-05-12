const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const studRegistrationRecievedSchema = mongoose.Schema({
studentId:{
  type:objectId,
  ref:"student"
},
  data:{
    type:String
  }
 
});

module.exports = mongoose.model("studRegistrationRecieved", studRegistrationRecievedSchema);
