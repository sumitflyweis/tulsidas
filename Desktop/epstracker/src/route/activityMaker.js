const express = require("express");
const {
    getActivityMAkerVendor,
} = require("../controller/admin/activityMaker");
// const { getSettingBycustomer} = require('../controller/customer/activityMaker')
const {activityMakerVendor,UpdateActivityMakerVendor,deleteActivityMakerVendor} = require('../controller/vendor/activityMaker')
const AcitivityMakerRouter = express.Router();

//ADMIN
AcitivityMakerRouter.get('/getActivityMAkerVendor',getActivityMAkerVendor)
// settingRouter.put("/updatesubscriptionAdmin/:id", updatesubscriptionAdmin);
// settingRouter.delete("/deleteSubcriptionAdmin/:id", deleteSubcriptionAdmin);

//CUSTOMER
// settingRouter.get('/getSettingBycustomer',getSettingBycustomer)

//VENDOR
AcitivityMakerRouter.post('/activityMakerVendor',activityMakerVendor)
AcitivityMakerRouter.put('/UpdateActivityMakerVendor/:id',UpdateActivityMakerVendor)
AcitivityMakerRouter.delete('/deleteActivityMakerVendor/:id',deleteActivityMakerVendor)


module.exports = AcitivityMakerRouter;
