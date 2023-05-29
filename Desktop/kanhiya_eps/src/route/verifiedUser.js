const express = require('express'); 
 const {getallVerifiedData,getVerifiedByIdByAdmin} = require('../controller/admin/verifiedUser');
const {verifiedUser,updateVerifiedUser,deleteVerifiedData} = require('../controller/customer/verifiedUser');

const verifiedRouter = express.Router();

// CUSTOMER
verifiedRouter.post('/verifiedUser', verifiedUser);
verifiedRouter.put('/updateVerifiedUser/:id',updateVerifiedUser);
verifiedRouter.delete('/deleteVerifiedData/:id',deleteVerifiedData);

//ADMIN
 verifiedRouter.get('/getallVerifiedData', getallVerifiedData);
 verifiedRouter.get('/getVerifiedByIdByAdmin/:id', getVerifiedByIdByAdmin);

 module.exports = verifiedRouter;