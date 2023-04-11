const express = require('express') 
const { createNotifications,getAllNotification,updateNotification,deleteNotification} = require('../controllers/admin/notification')
const { getAllNotificationByStudent} = require('../controllers/student/notification')
const { getAllNotificationByTeacher} = require('../controllers/teacher/notification')
const notificationRouter = express.Router()


//ADMIN
notificationRouter.post('/createNotifications',createNotifications)
notificationRouter.get('/getAllNotification',getAllNotification)
notificationRouter.put('/updateNotification/:id',updateNotification)
notificationRouter.delete('/deleteNotification/:id',deleteNotification)
//STUDENT
notificationRouter.get('/getAllNotificationByStudent',getAllNotificationByStudent)

//TEACHER
notificationRouter.get('/getAllNotificationByTeacher',getAllNotificationByTeacher)

module.exports =notificationRouter