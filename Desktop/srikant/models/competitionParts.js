const mongoose = require('mongoose');
const objectId = mongoose.Types.ObjectId
const competitionPartsSchema = mongoose.Schema({
    competitionParts  :{
        type:String
    },
    image: {
        type: String,
        default:
          "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
      },
})

module.exports = mongoose.model('competitionParts', competitionPartsSchema);
