const mongoose = require('mongoose');
const objectId = mongoose.Types.ObjectId
const competitionPartsSchema = mongoose.Schema({
    competitionParts  :[{
        type:String
    }]
})

module.exports = mongoose.model('competitionParts', competitionPartsSchema);
