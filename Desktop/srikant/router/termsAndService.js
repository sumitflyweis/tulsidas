const express = require('express'); 
const terms = require('../controllers/admin/termsAndService');
const terms1 = require('../controllers/student/termsAndService');
const terms2 = require('../controllers/teacher/termsAndService');

const termsAndService = express.Router()


//ADMIN
termsAndService.post('/createTerms',   terms.createTerms);
termsAndService.get('/getterms',   terms.getterms);  
termsAndService.put('/updateterms/:id', terms.updateterms);
termsAndService.delete('/DeleteTerms/:id', terms.DeleteTerms);

//STUDENT
termsAndService.get('/gettermsByStudent',   terms1.gettermsByStudent); 
//TEACHER
termsAndService.get('/gettermsByTeacher',   terms2.gettermsByTeacher); 


module.exports = termsAndService;