const express = require('express') 
 const {} = require('../controllers/admin/library')
 const {BookingOfBook,StudyZone} = require('../controllers/student/library')
 const {} = require('../controllers/teacher/library')
const library = express.Router()


//ADMIN
// library.get('/getAlllibraryByStudent',getAlllibraryByStudent)
// library.get('/getlibraryByIdByStudent/:id',getlibraryByIdByStudent)

//STUDENT

library.post('/BookingOfBook',BookingOfBook)
library.post('/StudyZone',StudyZone)
// library.get('/getlibraryById/:id',getlibraryById)
// library.put('/updatelibrary/:id',updatelibrary)
// library.delete('/deletelibrary/:id',deletelibrary)

//TEACHER
// library.get('/getAlllibraryByTeacher',getAlllibraryByTeacher)
// library.get('/getlibraryByIdByTeacher/:id',getlibraryByIdByTeacher)

module.exports =library