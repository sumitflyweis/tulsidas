 const express = require('express');
 const customerRouter = express.Router(); 

const {getAllUser,getUserById ,verify,userProfile1,login,userUpdate,userUpdate1,deleteUserById,socialLogin} = require('../controller/userlogin');

// const {authentication,authorisationbyBId} = require('../middelware/middleware')

// //============================================================

// // USER
customerRouter.post('/userProfile1', userProfile1);
customerRouter.post('/verify', verify)
customerRouter.post('/login', login)
customerRouter.get('/getAllUser', getAllUser)
// customerRouter.get('/getUserById/:id', getUserById)
// customerRouter.put('/userUpdate', /*authentication,*/userUpdate)
// customerRouter.put('/userUpdate1', /*authentication,*/userUpdate1)
// customerRouter.delete('/deleteUserById/:id', deleteUserById)
// customerRouter.post('/socialLogin', socialLogin)


  module.exports = customerRouter;