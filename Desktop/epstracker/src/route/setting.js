const express = require("express");
const {
  settingAdmin,
  updatesubscriptionAdmin,
  deleteSubcriptionAdmin,
} = require("../controller/admin/setting");
 const { getSettingBycustomer} = require('../controller/customer/setting')
const {getSettingByvendor} = require('../controller/vendor/setting')
// const { getNotificationBycustomertoheroId} = require('../controllers/customer-to-hero/notification')
const settingRouter = express.Router();

//ADMIN
settingRouter.post("/settingAdmin", settingAdmin);
settingRouter.put("/updatesubscriptionAdmin/:id", updatesubscriptionAdmin);
settingRouter.delete("/deleteSubcriptionAdmin/:id", deleteSubcriptionAdmin);

//CUSTOMER
settingRouter.get('/getSettingBycustomer',getSettingBycustomer)

//VENDOR
settingRouter.get('/getSettingByvendor',getSettingByvendor)


module.exports = settingRouter;
