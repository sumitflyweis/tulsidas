const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const librarySchema = mongoose.Schema({
  bookName: {
    type: String
  },
  bookImage:{
    type:String,
    default:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F53%2FGoogle_%2522G%2522_Logo.svg%2F2008px-Google_%2522G%2522_Logo.svg.png&tbnid=L7tm4ZMc-wsgTM&vet=12ahUKEwiNk7Oa2sn-AhUyl9gFHYKqA7EQMygEegUIARDrAQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AGoogle_%2522G%2522_Logo.svg&docid=zyZ-ciwRabX18M&w=2008&h=2048&q=google&ved=2ahUKEwiNk7Oa2sn-AhUyl9gFHYKqA7EQMygEegUIARDrAQ"
  },
  price:{
    type:Number
  },
  available:{
    type:String
  },
  date:{
    type:String
  },
  booking:{
    type:String
  },
  studentId:{
    type:objectId,ref:'student'
  }

},{timestamps: true});

module.exports = mongoose.model("library", librarySchema);
