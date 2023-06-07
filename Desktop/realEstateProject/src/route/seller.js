const express = require('express');
const customerRouter = express.Router(); 

const {sellerProfile1 ,getAllUser, getUserById, login , verifyseller , userUpdateseller,  deleteseller,getthroughformdata} = require('../controller/seller');

// const {authentication,authorisationbyBId} = require('../middelware/middleware')

// //============================================================

// // USER
customerRouter.post('/sellerProfile1', sellerProfile1);
customerRouter.post('/verifyseller', verifyseller)
customerRouter.post('/loginseller', login);
customerRouter.get('/getAllUserseller', getAllUser)
customerRouter.get('/getthroughformdata/seller', getthroughformdata)

customerRouter.get('/getUserByIdseller/:id', getUserById)
customerRouter.put('/userUpdateseller/:id', userUpdateseller)
// customerRouter.put('/userUpdate1', authentication,userUpdate1)
customerRouter.delete('/deleteseller/:id', deleteseller)
// customerRouter.post('/socialLogin', socialLogin)


 module.exports = customerRouter;