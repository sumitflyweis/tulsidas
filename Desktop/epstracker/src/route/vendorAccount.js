const express = require('express'); 
// const {loginProfileAdmin,userProfileAdmin,customerUpdateAdmin,AllUsersAdmin,deleteUserAdmin,getUserByIdAdmin} = require('../controller/admin/CustomerAccount');
//const {register,verifySignIn,updateUser,login,getUserById,deleteUserById} = require('../controller/customer/customerAccount');
const {vendorRegister,verifySignIn,updateVendorForFollowers,login,updateVendorForLikes,deleteUserById} = require('../controller/vendor/vendorAccount');
// const {CreatePaymentOrder} = require('../controller/user/payment');
const {authentication,authorisationbyBId} = require('../middleware')

const vendorRouter = express.Router();
//=========================================================
// ADMIN
// vendorRouter.post('/loginAdmin', loginProfileAdmin);
// vendorRouter.post('/signupAdmin', userProfileAdmin);
// vendorRouter.get('/allusersAdmin',AllUsersAdmin);
// vendorRouter.get('/getUserByIdAdmin/:id',authentication,authorisationbyBId,getUserByIdAdmin);
// vendorRouter.put('/updateAdmin/:id',authentication,authorisationbyBId,customerUpdateAdmin);
// vendorRouter.delete('/deleteAdmin/:id',authentication,authorisationbyBId,deleteUserAdmin);

//============================================================

// VENDOR
vendorRouter.post('/vendorRegister', vendorRegister);
vendorRouter.post('/login', login);
 vendorRouter.get('/verifySignIn',verifySignIn);//updateUser
 vendorRouter.put('/updateVendorForFollowers',authentication/*,authorisationbyBId*/,updateVendorForFollowers);
 vendorRouter.put('/updateVendorForLikes',authentication/*,authorisationbyBId*/,updateVendorForLikes);
// vendorRouter.get('/allusers1',AllUsers1);
// vendorRouter.get('/getUserById/:id',authentication,authorisationbyBId,getUserById);
// vendorRouter.put('/update1/:id',authentication,authorisationbyBId,customerUpdate1);
// vendorRouter.delete('/delete/:id',authentication,authorisationbyBId,deleteUserById);
// vendorRouter.post('/CreatePaymentOrder',CreatePaymentOrder);


 module.exports = vendorRouter;