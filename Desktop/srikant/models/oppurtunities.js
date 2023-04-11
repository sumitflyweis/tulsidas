const mongoose = require('mongoose');
const objectId = mongoose.Types.ObjectId;
const oppurtunitiesSchema = mongoose.Schema({
    data: [{
        type: String,
    }],
    interview:{
        type:objectId,ref:''
    },
    internship:{
        type:objectId,ref:''
    },
    jobRequest:{
        type:objectId,ref:''
    },
    seminars:{
        type:objectId,ref:''
    }
})


module.exports = mongoose.model('opppurtunity', oppurtunitiesSchema);


