const express = require('express'); 
// const {loginProfileAdmin,userProfileAdmin,customerUpdateAdmin,AllUsersAdmin,deleteUserAdmin,getUserByIdAdmin} = require('../controller/admin/CustomerAccount');
const {addandremoveMoneyincustomer} = require('../controller/customer/wallet');
// const {vendorRegister,verifySignIn,updateVendor,login,getUserById,deleteUserById} = require('../controller/vendor/vendorAccount');
// const {CreatePaymentOrder} = require('../controller/user/payment');
// const {authentication,authorisationbyBId} = require('../middleware')

const walletRouter = express.Router();
//=========================================================
// ADMIN
//walletRouter
// walletRouter.get('/allusersAdmin',AllUsersAdmin);
// walletRouter.get('/getUserByIdAdmin/:id',authentication,authorisationbyBId,getUserByIdAdmin);
// walletRouter.put('/updateAdmin/:id',authentication,authorisationbyBId,customerUpdateAdmin);
// walletRouter.delete('/deleteAdmin/:id',authentication,authorisationbyBId,deleteUserAdmin);

//============================================================

// VENDOR
// walletRouter.post('/vendorRegister', vendorRegister);
// walletRouter.post('/login', login);
//  walletRouter.get('/verifySignIn',verifySignIn);//updateUser
//  walletRouter.put('/updateVendor',authentication/*,authorisationbyBId*/,updateVendor);
// walletRouter.get('/allusers1',AllUsers1);
// walletRouter.get('/getUserById/:id',authentication,authorisationbyBId,getUserById);
// walletRouter.put('/update1/:id',authentication,authorisationbyBId,customerUpdate1);
// walletRouter.delete('/delete/:id',authentication,authorisationbyBId,deleteUserById);
// walletRouter.post('/CreatePaymentOrder',CreatePaymentOrder);


//CUSTOMER
 walletRouter.post('/addandremoveMoneyincustomer/:user', addandremoveMoneyincustomer);
//  walletRouter.post('/login', login);


 module.exports = walletRouter;