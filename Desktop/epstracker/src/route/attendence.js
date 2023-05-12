const express = require('express')

const {createAttendenceByadmin,getAllAttendenceByadmin,getAttendenceByIdByadmin,updateAttendenceByIdByadmin,deleteAttendenceByIdByadmin} = require('../controller/admin/attendence')
const {  getAllAttendenceByCustomer,getAttendenceByIdByCustomer} = require('../controller/customer/attendence')
const {getAllAttendenceByVendor, getAttendenceByIdByVendor } = require('../controller/vendor/attendence')
const attendence = express.Router()

//CUSTOMER
attendence.get('/getAllAttendenceByCustomer', getAllAttendenceByCustomer)
attendence.get('/getAttendenceByIdByCustomer/:vendorId',getAttendenceByIdByCustomer)


//ADMIN
attendence.post('/createAttendenceByadmin',createAttendenceByadmin)
attendence.get('/getAllAttendenceByadmin',getAllAttendenceByadmin)
attendence.put('/updateAttendenceByIdByadmin/:id', updateAttendenceByIdByadmin)
attendence.get('/getAttendenceByIdByadmin/:vendorId', getAttendenceByIdByadmin)
attendence.delete('/deleteAttendenceByIdByadmin/:id', deleteAttendenceByIdByadmin)


//VENDOR
attendence.get('/getAllAttendenceByVendor', getAllAttendenceByVendor)
attendence.get('/getAttendenceByIdByVendor/:vendorId',getAttendenceByIdByVendor)

module.exports = attendence
