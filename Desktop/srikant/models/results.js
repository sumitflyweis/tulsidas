const mongoose = require("mongoose"); 
const objectId = mongoose.Types.ObjectId;

const resultSchema = mongoose.Schema({
   studentid:{
      type:objectId,
      ref:"student"
   },
   serial_no:{
      type:String
   },
   studentName:{
      type:String
   },
   subjectName:{
      type:String
   },
   percentage:{
      type:String
   }
})

const resultModel  = mongoose.model('result',resultSchema);

module.exports = resultModel