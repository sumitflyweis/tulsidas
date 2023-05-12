const express = require("express");
// const {loginProfileAdmin,userProfileAdmin,customerUpdateAdmin,AllUsersAdmin,deleteUserAdmin,getUserByIdAdmin} = require('../controller/admin/CustomerAccount');
const {
  register,
  registerUser,
  verifySignIn,
  updateUser,
  login,
  resendOTP,
  getUserById,
  deleteUserById,
  forgotPassword,
  getAllUserbyCustomer,
  getAllUserByIdbyCustomer
   
} = require("../controller/customer/customerAccount");

const {getAllVendorBycustomer} = require('../controller/customer/getallVendors');
const { authentication, authorisationbyBId } = require("../middleware");

const customerRouter = express.Router();
//=========================================================
// ADMIN
// customerRouter.post('/loginAdmin', loginProfileAdmin);
// customerRouter.post('/signupAdmin', userProfileAdmin);
// customerRouter.get('/allusersAdmin',AllUsersAdmin);
// customerRouter.get('/getUserByIdAdmin/:id',authentication,authorisationbyBId,getUserByIdAdmin);
// customerRouter.put('/updateAdmin/:id',authentication,authorisationbyBId,customerUpdateAdmin);
// customerRouter.delete('/deleteAdmin/:id',authentication,authorisationbyBId,deleteUserAdmin);

//============================================================

// USER
customerRouter.post("/login", login);
// customerRouter.post("/signup1", register); 
customerRouter.post("/registerUser", registerUser); //

customerRouter.put("/resendOTP/:phone", resendOTP);
customerRouter.post("/verifySignIn", verifySignIn); //updateUser
customerRouter.post("/forgotPassword/:id", forgotPassword);
customerRouter.get("/getAllVendorBycustomer", getAllVendorBycustomer);
customerRouter.put(
  "/updateUser/:id",
  authentication ,authorisationbyBId,
  updateUser
);
customerRouter.get(
  "/alluser",
  getAllUserbyCustomer
);
customerRouter.get(
  "/alluserById/:id",
  getAllUserByIdbyCustomer
);



// customerRouter.get('/allusers1',AllUsers1);
// customerRouter.get('/getUserById/:id',authentication,authorisationbyBId,getUserById);
// customerRouter.put('/update1/:id',authentication,authorisationbyBId,customerUpdate1);
// customerRouter.delete('/delete/:id',authentication,authorisationbyBId,deleteUserById);
// customerRouter.post('/CreatePaymentOrder',CreatePaymentOrder);

module.exports = customerRouter;
