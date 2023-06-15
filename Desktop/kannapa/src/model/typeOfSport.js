const mongoose = require('mongoose');

const typeOfSportt = mongoose.Schema({
    sport: {
        type: String, 
    }
})

module.exports = mongoose.model('typeOfSportt', typeOfSportt);