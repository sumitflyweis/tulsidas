const express = require('express') 
const {createSubMenu,getAllSubMenu,getSubMenuById,updateSubMenu,deleteSubMenu} = require('../controllers/admin/submenu')
const { getAllSubMenuByStudent,getSubMenuByIdByStudent} = require('../controllers/student/submenu')
const { getAllSubMenuByTeacher,getSubMenuByIdByTeacher} = require('../controllers/teacher/submenu')
const menu = express.Router()


//ADMIN
menu.post('/createSubMenu',createSubMenu)
menu.get('/getAllSubMenu',getAllSubMenu)
menu.get('/getSubMenuById/:id',getSubMenuById)
menu.put('/updateSubMenu/:id',updateSubMenu)
menu.delete('/deleteSubMenu/:id',deleteSubMenu)

//STUDENT
menu.get('/getAllSubMenuByStudent',getAllSubMenuByStudent)
menu.get('/getSubMenuByIdByStudent/:id',getSubMenuByIdByStudent)

//TEACHER
menu.get('/getAllSubMenuByTeacher',getAllSubMenuByTeacher)
menu.get('/getSubMenuByIdByTeacher/:id',getSubMenuByIdByTeacher)

module.exports =menu