const express = require('express') 
 const {createstudentEnquiry,getAllstudentEnquiry,getstudentEnquiryById,updatestudentEnquiry,deletestudentEnquiry} = require('../controllers/admin/student_enquiry')
 const {getAllstudentEnquiryByStudent,getstudentEnquiryByIdByStudent} = require('../controllers/student/student_enquiry')
 const {getAllstudentEnquiryByAdmin,getstudentEnquiryByIdByAdmin} = require('../controllers/teacher/student_enquiry')
const studentEnquiry = express.Router()


//ADMIN
studentEnquiry.post('/createstudentEnquiry',createstudentEnquiry)
studentEnquiry.get('/getAllstudentEnquiry',getAllstudentEnquiry)
studentEnquiry.get('/getstudentEnquiryById/:id',getstudentEnquiryById)
studentEnquiry.put('/updatestudentEnquiry/:id',updatestudentEnquiry)
studentEnquiry.delete('/deletestudentEnquiry/:id',deletestudentEnquiry)


//STUDENT
studentEnquiry.get('/getAllstudentEnquiryByStudent',getAllstudentEnquiryByStudent)
studentEnquiry.get('/getstudentEnquiryByIdByStudent/:id',getstudentEnquiryByIdByStudent)

//TEACHER
studentEnquiry.get('/getAllstudentEnquiryByAdmin',getAllstudentEnquiryByAdmin)
studentEnquiry.get('/getstudentEnquiryByIdByAdmin/:id',getstudentEnquiryByIdByAdmin)

module.exports =studentEnquiry