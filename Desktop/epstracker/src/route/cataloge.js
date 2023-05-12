const express = require('express'); 
 const {getAllcatalogueByVendor,createcatalogueByVendor,getcatalogueByIdByVendor,updatecatalogueByVendor,deletecatalogueByVendor} = require('../controller/vendor/cataloge');
const {getAllcatalogueBycustomer,getcatalogueByIdBycustomer} = require('../controller/customer/cataloge');
 const {getAllcatalogueByadmin,getcatalogueByIdByadmin} = require('../controller/admin/cataloge');


const catalogue = express.Router();


// CUSTOMER
catalogue.get('/getAllcatalogueBycustomer', getAllcatalogueBycustomer)
catalogue.get('/getcatalogueByIdBycustomer/:id',getcatalogueByIdBycustomer)

//VENDOR
catalogue.post('/createcatalogueByVendor', createcatalogueByVendor)
catalogue.get('/getAllcatalogueByVendor', getAllcatalogueByVendor)
catalogue.get('/getcatalogueByIdByVendor/:id', getcatalogueByIdByVendor)
catalogue.put('/updatecatalogueByVendor/:id',updatecatalogueByVendor);
catalogue.delete('/deletecatalogueByVendor/:id',deletecatalogueByVendor);

//ADMIN
 catalogue.get('/getAllcatalogueByadmin', getAllcatalogueByadmin)
 catalogue.get('/getcatalogueByIdByadmin/:id',getcatalogueByIdByadmin)

 module.exports = catalogue