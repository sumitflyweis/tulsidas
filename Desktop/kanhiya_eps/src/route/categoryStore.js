const express = require('express'); 
 const {categoryStoreAdmin,updatecategoryStoreAdmin,deletecategoryStoreAdmin,getcategoryStoreByAdmin} = require('../controller/admin/categoryStore');
const {getcategorybyCustomer,getcategoryByIdByCustomer} = require('../controller/customer/categoryStore');
// const {CreatePaymentOrder} = require('../controller/user/payment');
//const {authentication,authorisationbyBId} = require('../middleware')

const categoryStoreRouter = express.Router();


// CUSTOMER

categoryStoreRouter.get('/getcategorybyCustomer', getcategorybyCustomer);
categoryStoreRouter.get('/getcategoryByIdByCustomer/:id', getcategoryByIdByCustomer);
//  customerRouter.get('/verifySignIn',verifySignIn);//updateUser
//  customerRouter.post('/updateUser',authentication/*,authorisationbyBId*/,updateUser);

//ADMIN
categoryStoreRouter.post('/categoryStoreAdmin', categoryStoreAdmin);//
categoryStoreRouter.get('/getcategoryStoreByAdmin/:id', getcategoryStoreByAdmin)
categoryStoreRouter.put('/updatecategoryStoreAdmin/:id',updatecategoryStoreAdmin);
categoryStoreRouter.put('/deletecategoryStoreAdmin/:id',deletecategoryStoreAdmin);


 module.exports = categoryStoreRouter;