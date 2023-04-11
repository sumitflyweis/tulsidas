const mongoose = require('mongoose');

const InstitutesSchema = mongoose.Schema({
    name: {
        type: String, 
        require: true
    }, 
    location: {
        type: String, 
        require: true
    }, 
    board: {
        type: String, 
        require: true
    }
})

module.exports =  mongoose.model('institutes', InstitutesSchema);