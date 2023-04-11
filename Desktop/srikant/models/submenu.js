const mongoose = require('mongoose');
const objectId = mongoose.Types.ObjectId
const submenuSchema = mongoose.Schema({
      subMenu:{
        type:String
    },
    image: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
    },
})

module.exports = mongoose.model('Submenu', submenuSchema);
