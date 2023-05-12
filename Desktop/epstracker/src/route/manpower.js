const express = require("express");
const {getManpowerByNameByAdmin,getAllManpowerByAdmin} = require("../controller/admin/manpower");
 const {getManpowerByNameByCustomer,getAllManpowerByCustomer} = require('../controller/customer/manpower')
const {createManpowerByVendor,getManpowerByNameByVendor,getAllManpowerByVendor,updateManpowerByVendor,deleteManpowerByVendor,getManpowerByVendorIdByVendor} = require('../controller/vendor/manpower')
const manpower = express.Router();

//ADMIN
manpower.get("/getManpowerByNameByAdmin/:name", getManpowerByNameByAdmin);
manpower.get("/getAllManpowerByAdmin", getAllManpowerByAdmin);
// manpower.delete("/deleteHelpAdmin/:id", deleteHelpAdmin);

// //CUSTOMER
manpower.get('/getManpowerByNameByCustomer/:name',getManpowerByNameByCustomer)
manpower.get('/getAllManpowerByCustomer',getAllManpowerByCustomer)

// //VENDOR
manpower.post('/createManpowerByVendor',createManpowerByVendor)
manpower.get('/getManpowerByNameByVendor/:name',getManpowerByNameByVendor)
manpower.get('/getAllManpowerByVendor',getAllManpowerByVendor)
manpower.get('/getManpowerByVendorIdByVendor/:vendorId',getManpowerByVendorIdByVendor)
manpower.put('/updateManpowerByVendor/:id',updateManpowerByVendor)
manpower.delete('/deleteManpowerByVendor/:id',deleteManpowerByVendor)

module.exports = manpower;  
