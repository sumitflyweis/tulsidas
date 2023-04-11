const express = require('express');
//const  payment = require('../controllers/admin/payment')
const student = require('../controllers/student/paymentByStudent')
// const admin  =  require('../controllers/admin/paymentByStudent')
// const teacher = require('../controllers/teacher/paymentByStudent')
const paymentRouter = express();

//admin
// paymentRouter.get('/getPaymentByAdmin', admin.getPaymentByAdmin)
// paymentRouter.get('/getPaymentByAdminById/:id', admin.getPaymentByAdminById)

//customer
paymentRouter.post('/CreatePaymentOrder/:id', student.CreatePaymentOrder),
// paymentRouter.get('/getPaymentByStudent', student.getPaymentByStudent)

//teacher
// paymentRouter.get('/getPaymentByteacher', teacher.getPaymentByteacher)
// paymentRouter.get('/getPaymentByteacherById/:id', teacher.getPaymentByteacherById)

module.exports = paymentRouter;