const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: {
        type: String, 
        require: true
    },
    image: {
        type: String, 
        default: "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg"
    },
    email: {
        type: String,
        require: true
    },
    mobile:{
        type:String
    },
    roll_number : {
        type: String,
        require: true
    },
    branch: {
        type: String, 
        require: true
    }, 
    semester: {
        type: String, 
        require: true
    }, 
    year: {
        type: String, 
        require: true
    }, 
    password: {
        type: String,
        require: true
    },
    confirmpassword: {
        type: String, 
        require: true
    },
    otp:{type:Number}
})

module.exports = mongoose.model('student', StudentSchema);