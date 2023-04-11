const express = require('express') 
 const {createMenuAndSubMenu,getAllMenu,getMenuById,updateMenu,deleteMenu} = require('../controllers/admin/menu')
 const { getAllMenuByStudent,getMenuByIdByStudent} = require('../controllers/student/menu')
 const { getAllMenuByTeacher,getMenuByIdByTeacher} = require('../controllers/teacher/menu')
const menu = express.Router()


//ADMIN
menu.post('/createMenuAndSubMenu',createMenuAndSubMenu)
menu.get('/getAllMenu',getAllMenu)
menu.get('/getMenuById/:id',getMenuById)
menu.put('/updateMenu/:id',updateMenu)
menu.delete('/deleteMenu/:id',deleteMenu)

//STUDENT
menu.get('/getAllMenuByStudent',getAllMenuByStudent)
menu.get('/getMenuByIdByStudent/:id',getMenuByIdByStudent)

//TEACHER
menu.get('/getAllMenuByTeacher',getAllMenuByTeacher)
menu.get('/getMenuByIdByTeacher/:id',getMenuByIdByTeacher)

module.exports =menu