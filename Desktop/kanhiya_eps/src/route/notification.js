const express = require('express'); 
const {createnotificationbyAdmin,getALlnotificationbyAdmin,getnotificationByIdbyAdmin,updatenotificationBybyAdmin,deletenotificationBybyAdmin} = require('../controller/admin/notification');
const {getALlnotificationbyCustomer,getnotificationByIdbyCustomer} = require('../controller/customer/notification');
const {getALlnotificationbyVendor,getnotificationByIdbyVendor} = require('../controller/vendor/notification');

const notification = express.Router();

//USER
notification.get('/getALlnotificationbyCustomer',getALlnotificationbyCustomer)
notification.get('/getnotificationByIdbyCustomer/:id',getnotificationByIdbyCustomer)

//ADMIN
notification.post('/createnotificationbyAdmin',createnotificationbyAdmin)
notification.get('/getALlnotificationbyAdmin',getALlnotificationbyAdmin)
notification.get('/getnotificationByIdbyAdmin/:id',getnotificationByIdbyAdmin)
notification.put('/updatenotificationBybyAdmin/:id',updatenotificationBybyAdmin);
notification.delete('/deletenotificationBybyAdmin/:id',deletenotificationBybyAdmin);

//VENDOR
notification.get('/getALlnotificationbyVendor',getALlnotificationbyVendor)
notification.get('/getnotificationByIdbyVendor/:id',getnotificationByIdbyVendor)


module.exports = notification;