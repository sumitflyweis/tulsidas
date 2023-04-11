const mongoose = require('mongoose');
const objectId = mongoose.Types.ObjectId
const themeSchema = mongoose.Schema({
    image:{
        type:String,
        default:'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    }
})

module.exports = mongoose.model('theme', themeSchema);
