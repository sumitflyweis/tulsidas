const express = require("express");
const {  GetgenerateReportByAdmin,generateReportByIdByAdmin ,generateAllReportByIdByAdmin,deleteGenerateReportByAdmin,weeklyYearlyData,ReportOfParticularManpowerByIdByAdmin} = require("../controller/admin/generateReport");
const {generateReportByIdByCustomer} = require('../controller/customer/generateReport')
const {GetgenerateReportByVendor,generateAllReportByIdByVendor,weeklyYearlyDataByVendor} = require('../controller/vendor/generateReport')
const generateReport = express.Router();

//ADMIN
// generateReport.post("/helpAdmin", helpAdmin);
generateReport.get('/GetgenerateReportByAdmin',GetgenerateReportByAdmin)
generateReport.get('/generateReportByIdByAdmin/:id',generateReportByIdByAdmin)
generateReport.post('/ReportOfParticularManpowerByIdByAdmin/:id',ReportOfParticularManpowerByIdByAdmin)
generateReport.get('/generateAllReportByIdByAdmin/:id',generateAllReportByIdByAdmin)
generateReport.delete("/deleteGenerateReportByAdmin/:id", deleteGenerateReportByAdmin);
generateReport.get("/weeklyYearlyData/:d",weeklyYearlyData)
// generateReport.put("/updateHelpAdmin/:id", updateHelpAdmin);

//CUSTOMER
//  generateReport.get('/generateReportByIdByCustomer/:id',generateReportByIdByCustomer)

//VENDOR
generateReport.get('/GetgenerateReportByVendor',GetgenerateReportByVendor)
generateReport.get('/generateAllReportByIdByVendor/:id',generateAllReportByIdByVendor)
generateReport.get('/weeklyYearlyDataByVendor/:d',weeklyYearlyDataByVendor)


module.exports = generateReport;  
