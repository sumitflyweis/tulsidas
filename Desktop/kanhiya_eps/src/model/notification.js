const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    message: {
        type: String, 
       }
})

module.exports = mongoose.model('notification', notificationSchema);


