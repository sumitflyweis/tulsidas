const mongoose = require('mongoose');

const pollQues = mongoose.Schema({
    pollQues: {
        type: String, 
        default:""
    },
    option_1:{
        type:String,
        default:""
    },
    option_2:{
        type:String,
        default:""
    }
})

module.exports = mongoose.model('poll', pollQues);