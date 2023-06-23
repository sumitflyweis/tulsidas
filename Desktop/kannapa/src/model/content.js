const mongoose = require('mongoose');

const ContentSchema = mongoose.Schema({
    image: {
        type: String,
        default:
          "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
      }, 
    storyTitle:{
        type:String,
        default:""
    }
  
})

const contentmodel = mongoose.model('content', ContentSchema);

module.exports = contentmodel;