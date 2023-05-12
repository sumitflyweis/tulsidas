const express = require('express'); 
const terms = require('../controllers/teacher/studRegistrationRecieved');

const registration = express.Router()

registration.post('/create',   terms.registration);
registration.get('/get',   terms.getregistration); 
registration.get('/getbyid/:id',   terms.getregistrationbyid); 
registration.put('/update/:id', terms.updateregistration);
// registration.put('/addDataToregistrationById/:id', terms.addDataToregistrationById)
registration.delete('/Delete/:id', terms.Deleteregistration);

module.exports = registration;