const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    first: {
        type: String
    }, 
    image: {
        type: String, 
        default: "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg"
    },
    last: {
        type: String
    }, 
    mobile: {
        type: String
    }, 
    branch :{
        type: String
    }, 
    Id : {
        type: String
    }, 
    password: {
        type: String
    }
});

module.exports = mongoose.model('teacher', teacherSchema);