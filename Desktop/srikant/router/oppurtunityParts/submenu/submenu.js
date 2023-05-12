const express = require('express') 
const {createSubMenu1,getAllSubMenu1,getSubMenuById1,updateSubMenu1,deleteSubMenu1} = require('../../../controllers/admin/oppurtunityParts/submenu/submenu')
// const { getAllSubMenuByStudent,getSubMenuByIdByStudent} = require('../controllers/student/submenu')
// const { getAllSubMenuByTeacher,getSubMenuByIdByTeacher} = require('../controllers/teacher/submenu')
const menu = express.Router()


//ADMIN
menu.post('/createSubMenu1',createSubMenu1)
menu.get('/getAllSubMenu1',getAllSubMenu1)
menu.get('/getSubMenuById1/:id',getSubMenuById1)
menu.put('/updateSubMenu1/:id',updateSubMenu1)
menu.delete('/deleteSubMenu1/:id',deleteSubMenu1)

//STUDENT
// menu.get('/getAllSubMenuByStudent',getAllSubMenuByStudent)
// menu.get('/getSubMenuByIdByStudent/:id',getSubMenuByIdByStudent)

//TEACHER
// menu.get('/getAllSubMenuByTeacher',getAllSubMenuByTeacher)
// menu.get('/getSubMenuByIdByTeacher/:id',getSubMenuByIdByTeacher)

module.exports =menu