const express = require('express'); 
 const {shopAndServiceAdmin,updateshopAndServiceAdmin,deleteShopAndServiceAdmin,addServiceByAdmin,updateServiceByAdmin} = require('../controller/admin/shop&service');
const {subcategoryShopAndServicebyCustomer,getSubcategoryByIdByCustomer} = require('../controller/customer/shop&service');
// const {CreatePaymentOrder} = require('../controller/user/payment');
//const {authentication,authorisationbyBId} = require('../middleware')

const shopAndServiceRouter = express.Router();


// CUSTOMER
// shopAndServiceRouter.get('/getSubcategorybyCustomer', getSubcategorybyCustomer);
shopAndServiceRouter.get('/subcategoryShopAndServicebyCustomer/:SubCategory/:option', subcategoryShopAndServicebyCustomer);
// shopAndServiceRouter.get('/getSubcategoryByIdByCustomer/:id', getSubcategoryByIdByCustomer);
// shopAndServiceRouter.get('/getcategoryByIdByCustomer/:id', getcategoryByIdByCustomer);


//ADMIN
shopAndServiceRouter.post('/shopAndServiceAdmin', shopAndServiceAdmin);
shopAndServiceRouter.put('/updateshopAndServiceAdmin/:id',updateshopAndServiceAdmin);
shopAndServiceRouter.delete('/deleteShopAndServiceAdmin/:id',deleteShopAndServiceAdmin);
shopAndServiceRouter.post('/addServiceByAdmin',addServiceByAdmin);
shopAndServiceRouter.put('/updateServiceByAdmin/:id',updateServiceByAdmin)




 module.exports = shopAndServiceRouter;