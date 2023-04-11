const mongoose = require('mongoose');


const SchduleSchema = mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "student"
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher'
    },
    date: {
        type: String
    }, 
    time: {
        type: String
    }, 
    name: {
        type: String
    }, 
    month : {
        type: String
    }
})


module.exports = mongoose.model('assigmentSchdule', SchduleSchema);
