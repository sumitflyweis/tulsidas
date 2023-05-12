const express = require('express'); 
const {getDocumentsByadmin,getDocumentsByIdAdmin} = require('../controller/admin/uploadDocument');
const {getDocumentsByCustomer,getDocumentsByIdCustomer} = require('../controller/customer/uploadDocument');
const {uploadDocumentsBByVendor,getDocumentsByVendor,getDocumentsByIdVendor,updateDocumentsByIdVendor,deleteDocumentsByIdVendor} = require('../controller/vendor/uploadDocument');

const uploadDocument = express.Router();

//USER
uploadDocument.get('/getDocumentsByCustomer', getDocumentsByCustomer);
uploadDocument.get('/getDocumentsByIdCustomer/:vendorId',getDocumentsByIdCustomer)

// //ADMIN
uploadDocument.get('/getDocumentsByadmin', getDocumentsByadmin);
uploadDocument.get('/getDocumentsByIdAdmin/:vendorId',getDocumentsByIdAdmin)

// //VENDOR
uploadDocument.post('/uploadDocumentsBByVendor',uploadDocumentsBByVendor)
uploadDocument.get('/getDocumentsByVendor',getDocumentsByVendor)
uploadDocument.get('/getDocumentsByIdVendor/:vendorId',getDocumentsByIdVendor)
uploadDocument.put('/updateDocumentsByIdVendor/:id',updateDocumentsByIdVendor);
uploadDocument.delete('/deleteDocumentsByIdVendor/:id',deleteDocumentsByIdVendor);



module.exports = uploadDocument;