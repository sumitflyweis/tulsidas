const express = require('express') 
 const {} = require('../controllers/admin/library')
 const {BookingOfBook,StudyZone ,getAllBooks, getBookById,updateBookById, deleteBookById} = require('../controllers/student/library')
 const {} = require('../controllers/teacher/library')
const library = express.Router()


//ADMIN
// library.get('/getAlllibraryByStudent',getAlllibraryByStudent)
// library.get('/getlibraryByIdByStudent/:id',getlibraryByIdByStudent)

//STUDENT

library.post('/BookingOfBook',BookingOfBook)
library.post('/StudyZone',StudyZone)
library.get('/getAllBooks',getAllBooks)
library.get('/getBookById/:id',getBookById)
library.put('/updateBookById/:id',updateBookById)
library.delete('/deleteBookById/:id',deleteBookById)

//TEACHER
// library.get('/getAlllibraryByTeacher',getAlllibraryByTeacher)
// library.get('/getlibraryByIdByTeacher/:id',getlibraryByIdByTeacher)

module.exports =library