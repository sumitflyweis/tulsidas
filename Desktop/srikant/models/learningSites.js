const mongoose = require('mongoose');

const learningSchema = mongoose.Schema({
    message: {
        type: String, 
    }, 
    
})

module.exports =  mongoose.model('learningSites', learningSchema);