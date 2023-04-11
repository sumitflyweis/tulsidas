const express = require('express') 
 const {getAllscheduleByAdmin,getscheduleByIdByAdmin} = require('../controllers/admin/schedule')
 const { getAllscheduleByStudent,getscheduleByIdByStudent} = require('../controllers/student/schedule')
 const {createschedule,getAllschedule, getscheduleById,updateschedule,deleteschedule} = require('../controllers/teacher/schedule')
const schedule = express.Router()


//ADMIN
schedule.get('/getAllscheduleByAdmin',getAllscheduleByAdmin)
schedule.get('/getscheduleByIdByAdmin/:id',getscheduleByIdByAdmin)

//STUDENT
schedule.get('/getAllscheduleByStudent',getAllscheduleByStudent)
schedule.get('/getscheduleByIdByStudent/:id',getscheduleByIdByStudent)

//TEACHER
schedule.post('/createschedule',createschedule)
schedule.get('/getAllschedule',getAllschedule)
schedule.get('/getscheduleById/:id',getscheduleById)
schedule.put('/updateschedule/:id',updateschedule)
schedule.delete('/deleteschedule/:id',deleteschedule)

module.exports =schedule