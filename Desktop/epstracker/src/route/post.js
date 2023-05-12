const express = require('express'); 
const {} = require('../controller/admin/post');
const {createpost,updatepost} = require('../controller/customer/post');
const {} = require('../controller/vendor/post');

const post = express.Router();

//USER
post.post('/createpost/:vendorId', createpost);
post.put('/updatepost/:action',updatepost);

//ADMIN
// post.get('/getpostByAdmin',getpostByAdmin);
// post.get('/getpostByIdByAdmin/:id',getpostByIdByAdmin);
// post.put('/updatepostAdmin/:vendorId',updatepostAdmin);
// post.delete('/deletepostAdmin/:id',deletepostAdmin);

module.exports = post;