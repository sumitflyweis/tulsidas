const express = require("express");
const {
    helpAdmin,updateHelpAdmin,deleteHelpAdmin
} = require("../controller/admin/help");
 const {getHelpBycustomer} = require('../controller/customer/help')
const {getHelpByVendor} = require('../controller/vendor/help')
const helpRouter = express.Router();

//ADMIN
helpRouter.post("/helpAdmin", helpAdmin);
helpRouter.put("/updateHelpAdmin/:id", updateHelpAdmin);
helpRouter.delete("/deleteHelpAdmin/:id", deleteHelpAdmin);

//CUSTOMER
helpRouter.get('/getHelpBycustomer',getHelpBycustomer)

//VENDOR
helpRouter.get('/getHelpByVendor',getHelpByVendor)


module.exports = helpRouter;  
