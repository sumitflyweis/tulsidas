const express = require('express'); 
 const {subscriptionAdmin,updatesubscriptionAdmin,deleteSubcriptionAdmin} = require('../controller/admin/subscription');
const {getsubscription,getSubcategoryByIdByCustomer} = require('../controller/vendor/subcription');
// const {CreatePaymentOrder} = require('../controller/user/payment');
//const {authentication,authorisationbyBId} = require('../middleware')

const subscriptionRouter = express.Router();


// CUSTOMER
// subscriptionRouter.get('/getSubcategorybyCustomer', getSubcategorybyCustomer);
// subscriptionRouter.get('/getSubcategoryByIdByCustomer/:id', getSubcategoryByIdByCustomer);
// subscriptionRouter.get('/getcategoryByIdByCustomer/:id', getcategoryByIdByCustomer);


//ADMIN
subscriptionRouter.post('/subscriptionAdmin', subscriptionAdmin);
subscriptionRouter.put('/updatesubscriptionAdmin/:id',updatesubscriptionAdmin);
subscriptionRouter.delete('/deleteSubcriptionAdmin/:id',deleteSubcriptionAdmin);

//VENDOR
subscriptionRouter.get('/getsubscription', getsubscription);
// subscriptionRouter.get('/getSubcategoryByIdByCustomer/:id', getSubcategoryByIdByCustomer);
// subscriptionRouter.get('/getcategoryByIdByCustomer/:id', getcategoryByIdByCustomer);


 module.exports = subscriptionRouter;