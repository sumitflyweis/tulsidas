const express = require('express');
const customerRouter = express.Router(); 

const {getAllUser,getUserById ,verify,userProfile1,login,userUpdate,userUpdate1,deletebuyer,socialLogin, forgetPassword, resetPassword, userUpdatebuyer} = require('../controller/userlogin');

// const {authentication,authorisationbyBId} = require('../middelware/middleware')

// //============================================================

// // USER
customerRouter.post('/userProfile1', userProfile1);
// customerRouter.post('/verify', verify)
customerRouter.post('/login', login);
customerRouter.get('/getAllUser', getAllUser)
customerRouter.get('/getUserById/:id', getUserById)
customerRouter.post('/forgetPassword', forgetPassword)
customerRouter.post('/resetPassword/:id', resetPassword)
customerRouter.put('/userUpdatebuyer/:id',userUpdatebuyer)
// customerRouter.put('/userUpdate1', authentication,userUpdate1)
customerRouter.delete('/deletebuyer/:id', deletebuyer)
// customerRouter.post('/socialLogin', socialLogin)


 module.exports = customerRouter;