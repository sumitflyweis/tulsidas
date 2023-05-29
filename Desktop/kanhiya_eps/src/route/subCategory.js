const express = require('express'); 
 const {subCategoryAdmin,updatesubCategoryAdmin,deleteSubcategoryAdmin} = require('../controller/admin/subCategory');
const {getSubcategoryByIdByCustomer,getSubcategorybyCustomer} = require('../controller/customer/subCategory');
// const {CreatePaymentOrder} = require('../controller/user/payment');
//const {authentication,authorisationbyBId} = require('../middleware')

const subCategoryRouter = express.Router();


// CUSTOMER

subCategoryRouter.get('/getSubcategoryByIdByCustomer/:id', getSubcategoryByIdByCustomer);//
subCategoryRouter.get('/getSubcategorybyCustomer/:SubCategory/:option', getSubcategorybyCustomer);
// subCategoryRouter.get('/getcategoryByIdByCustomer/:id', getcategoryByIdByCustomer);


//ADMIN
subCategoryRouter.post('/subCategoryAdmin', subCategoryAdmin);
subCategoryRouter.put('/updatesubCategoryAdmin/:id',updatesubCategoryAdmin);
subCategoryRouter.delete('/deleteSubcategoryAdmin/:id',deleteSubcategoryAdmin);


 module.exports = subCategoryRouter;