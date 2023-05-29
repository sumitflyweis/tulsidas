const express = require("express");
const {
  bookingProfile,
  getbooking,
  getbookingById,
  Updatebooking,
  deletebooking,
} = require("../controller/admin/payment");
const {
  CreatePaymentOrder,
  UpdatebookingByVendor,
} = require("../controller/vendor/paymentSubscription");
const {
    CreatePaymentOrderofBooking
} = require("../controller/customer/paymentBooking")

const paymentRouter = express.Router();

//ADMIN
// booknowRouter.post('/createbook', bookingProfile);
// booknowRouter.get('/getbook',getbooking);
// booknowRouter.get('/getbookbyId/:id',getbookingById);
// booknowRouter.put('/updatebook/:id',Updatebooking);
// booknowRouter.delete('/deletebook/:id',deletebooking);

//USER
paymentRouter.post('/CreatePaymentOrderofBooking/:id', CreatePaymentOrderofBooking);
// paymentRouter.post('/CreatePaymentOrder/:id',CreatePaymentOrder);

//VENDOR
paymentRouter.post("/CreatePaymentOrder/:id/:vendorId", CreatePaymentOrder);
// booknowRouter.get('/getbookByVendor',getbookByVendor);CreatePaymentOrder
// booknowRouter.get('/getbookbyId/:id',getbookingById);
// booknowRouter.put('/UpdatebookingByVendor/:id',UpdatebookingByVendor);
// booknowRouter.delete('/deletebook/:id',deletebooking);

module.exports = paymentRouter;
