const express = require('express'); 
const {getEnquiryByAdmin,getEnquiryByIdByAdmin,updateEnquiryAdmin,deleteEnquiryAdmin} = require('../controller/admin/enquiryform');
//const {getenquiry,getenquiryById,Updateenquiry,deleteenquiry} = require('../controller/vendor/enquiryform');
const {createEnquiry} = require('../controller/customer/enquiryform');
const enquiryRouter = express.Router();

//USER
enquiryRouter.post('/createEnquiry', createEnquiry);



//ADMIN
// enquiryRouter.post('/createEnquiryAdmin', createEnquiryAdmin);
enquiryRouter.get('/getEnquiryByAdmin',getEnquiryByAdmin);
enquiryRouter.get('/getEnquiryByIdByAdmin/:id',getEnquiryByIdByAdmin);
enquiryRouter.put('/updateEnquiryAdmin/:id',updateEnquiryAdmin);
enquiryRouter.delete('/deleteEnquiryAdmin/:id',deleteEnquiryAdmin);


module.exports = enquiryRouter;