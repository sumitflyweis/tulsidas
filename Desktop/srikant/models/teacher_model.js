const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    fullName: {
        type: String
    }, 
    image: {
        type: String, 
        default: "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg"
    },
    rollNo: {
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
        type: String,
        default:""
    },
    wishes:{
        type:String
    },
    otp:{
        type:String,
        default:""
    },
    semester:{
        type:String
    },
    year:{
        type:String
    },
    email:{
        type:String,
        default:""
    }
});

module.exports = mongoose.model('teacher', teacherSchema);