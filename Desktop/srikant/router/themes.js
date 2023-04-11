const express = require('express') 
const {createtheme,getAlltheme,updatetheme,deletetheme} = require('../controllers/admin/themes')
const {getallThemeByStudent } = require('../controllers/student/themes')
const {getAllThemeByTeacher} = require('../controllers/teacher/themes')
const themes = express.Router()


//ADMIN
themes.post('/createtheme',createtheme)
themes.get('/getAlltheme',getAlltheme)
themes.put('/updatetheme/:id',updatetheme)
themes.delete('/deletetheme/:id',deletetheme)

//STUDENT
themes.get('/getallThemeByStudent',getallThemeByStudent)

//TEACHER
themes.get('/getAllThemeByTeacher',getAllThemeByTeacher)

module.exports =themes