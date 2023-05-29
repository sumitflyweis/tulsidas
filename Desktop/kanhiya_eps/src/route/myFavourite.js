const express = require('express'); 
const {getFavouritebyAdmin,getAllFavourite,updateEnquiryAdmin,deleteEnquiryAdmin} = require('../controller/admin/myFavourite');
//const {getenquiry,getenquiryById,Updateenquiry,deleteenquiry} = require('../controller/vendor/enquiryform');
const {createfavourite} = require('../controller/customer/myFavourite');
const MyFavouriteRouter = express.Router();

//USER
MyFavouriteRouter.post('/createfavourite/:UserId/:vendorId', createfavourite);



//ADMIN
// MyFavouriteRouter.post('/createEnquiryAdmin', createEnquiryAdmin);
MyFavouriteRouter.get('/getFavouritebyAdmin/:UserId',getFavouritebyAdmin);
MyFavouriteRouter.get('/getAllFavourite',getAllFavourite);
// MyFavouriteRouter.put('/updateEnquiryAdmin/:id',updateEnquiryAdmin);
// MyFavouriteRouter.delete('/deleteEnquiryAdmin/:id',deleteEnquiryAdmin);


module.exports = MyFavouriteRouter;