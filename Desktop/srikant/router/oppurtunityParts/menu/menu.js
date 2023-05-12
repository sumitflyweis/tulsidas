const express = require('express') 
 const {createMenuAndSubMenu1,getAllMenu1,getMenuById1,updateMenu1,deleteMenu1 } = require('../../../controllers/admin/oppurtunityParts/menu/menu')
//  const { getAllMenuByStudent,getMenuByIdByStudent} = require('../controllers/student/menu')
//  const { getAllMenuByTeacher,getMenuByIdByTeacher} = require('../controllers/teacher/menu')
const menu = express.Router()


//ADMIN
menu.post('/createMenuAndSubMenu1',createMenuAndSubMenu1)
menu.get('/getAllMenu1',getAllMenu1)
menu.get('/getMenuById1/:id',getMenuById1)
menu.put('/updateMenu1/:id',updateMenu1)
menu.delete('/deleteMenu1/:id',deleteMenu1)

//STUDENT
// menu.get('/getAllMenuByStudent',getAllMenuByStudent)
// menu.get('/getMenuByIdByStudent/:id',getMenuByIdByStudent)

//TEACHER
// menu.get('/getAllMenuByTeacher',getAllMenuByTeacher)
// menu.get('/getMenuByIdByTeacher/:id',getMenuByIdByTeacher)

module.exports =menu