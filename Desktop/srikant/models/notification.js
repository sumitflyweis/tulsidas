const mongoose = require('mongoose');



const notificationSchema = mongoose.Schema({
    message: {
        type: String, 
    },
    post:{type: String},
   timeInDays:{type: String},
   timeInHours:{type: String},
   timeInMinutes:{type: String},
   timeInSeconds:{type: String},
   image: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
  },
   date:{type: String},
},{timestamps:true})


module.exports = mongoose.model('notify', notificationSchema);


