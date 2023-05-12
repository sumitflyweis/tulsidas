const express = require('express')

//const { getbookingsbyadmin,updatebook,getbookingbyid,deletebookingbyadmin,changeStatusbyIdBooking} = require('../controllers/admin/bookingController')
const { bookingOfcategory,getbookingsbycustomer,getbookingbyidbycustomer } = require('../controller/customer/booking')
const bookingRouter = express.Router()

//CUSTOMER
bookingRouter.post('/createBooking/:userId/:vendorId', /*Auth*/  bookingOfcategory)
// bookingRouter.get('/getbookingsbycustomer', /*Auth*/  getbookingsbycustomer)
// bookingRouter.get('/getbookingbyidbycustomer/:id', /*Auth*/  getbookingbyidbycustomer)


//ADMIN
// bookingRouter.get('/getbook', /*Auth*/  getbookingsbyadmin)
// bookingRouter.put('/updatebook/:id', /*Auth*/  updatebook)
// bookingRouter.get('/getbookingbyid/:id', /*Auth*/  getbookingbyid)
// bookingRouter.delete('/deletebookingbyadmin/:id', /*Auth*/  deletebookingbyadmin)
// bookingRouter.put('/changeStatusbyIdBooking/:id', /*Auth*/  changeStatusbyIdBooking)
//changeStatusbyIdBooking

module.exports = bookingRouter
