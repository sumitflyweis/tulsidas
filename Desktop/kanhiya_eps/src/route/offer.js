const express = require('express'); 
const {createOfferbyAdmin,getALlOfferbyAdmin,getOfferByIdbyAdmin,updateOfferBybyAdmin,deleteOfferBybyAdmin} = require('../controller/admin/offer');
const {getALlOfferbyCustomer,getOfferByIdbyCustomer} = require('../controller/customer/offer');
const {getALlOfferbyVendor,getOfferByIdbyVendor} = require('../controller/vendor/offer');

const offers = express.Router();

//USER
 offers.get('/getALlOfferbyCustomer', getALlOfferbyCustomer);
offers.get('/getOfferByIdbyCustomer/:id',getOfferByIdbyCustomer)

//ADMIN
 offers.post('/createOfferbyAdmin',createOfferbyAdmin)
offers.get('/getALlOfferbyAdmin',getALlOfferbyAdmin);//getOfferByIdbyAdmin
offers.get('/getOfferByIdbyAdmin/:id',getOfferByIdbyAdmin)
offers.put('/updateOfferBybyAdmin/:id',updateOfferBybyAdmin);
offers.delete('/deleteOfferBybyAdmin/:id',deleteOfferBybyAdmin);

//VENDOR
offers.get('/getALlOfferbyVendor', getALlOfferbyVendor);
offers.get('/getOfferByIdbyVendor/:id',getOfferByIdbyVendor)


module.exports = offers;