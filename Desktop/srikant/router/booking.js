const express = require('express'); 
 const admin = require('../controllers/admin/booking');
const student = require('../controllers/student/booking');
const teacher = require('../controllers/teacher/booking');

const booking = express.Router()


//ADMIN

// booking.get('/getBookingByAdmin',admin.getBookingByAdmin);
// booking.get('/getBookingByIdByAdmin/:id',admin.getBookingByIdByAdmin);

//TEACHER

// booking.get('/getBookingByTeacher',   teacher.getBookingByTeacher);
// booking.get('/getBookingByIdByTeacher/:id',   teacher.getBookingByIdByTeacher);

//STUDENT

booking.post('/bookingOfStudent',student.bookingOfStudent);
// booking.get('/getBookingByStudent',   student.getBookingByStudent);
// booking.get('/getBookingByIdByStudent/:id',   student.getBookingByIdByStudent);
// booking.put('/updateBookingByIdByStudent/:id', student.updateBookingByIdByStudent);
// booking.delete('/deleteBookingByIdByStudent/:id', student.deleteBookingByIdByStudent);


module.exports = booking;