
const morgan = require('morgan');
const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const studentRouter = require('./router/student_router');
const institutes = require('./router/institutesRouter');
const teacher = require('./router/teacher_router');
const schdule = require('./router/schdule_router')
const helpAndSupport = require('./router/helpAndSupport')
const privacy = require('./router/privacyPolicy')
const termsAndService = require('./router/termsAndService')
const notification = require('./router/notification')
const menu = require('./router/menu')
const submenu = require('./router/submenu')
const topics = require('./router/topics')
const learningSites = require ('./router/learningSites')
const booking = require('./router/booking')
const payment = require ('./router/paymentByStudent')
const library = require('./router/library')
const themes = require('./router/themes')
const course = require('./router/course')
const attendence = require('./router/attendence')
const competitionParts = require('./router/competitionParts')
const competition = require('./router/competition')
const schedule = require('./router/schedule')
const exam = require('./router/exam')
const studentEnquiry = require('./router/student_enquiry')
const revision  = require('./router/revision')
const oppurtunities = require('./router/oppurtunities')
const internship = require('./router/oppurtunityParts/internship')
const interview = require('./router/oppurtunityParts/interview')
const job = require('./router/oppurtunityParts/job')
const seminars = require('./router/oppurtunityParts/seminars')
const overview = require('./router/resume/overview')
const faq = require('./router/resume/FAQ')
const lessons = require('./router/resume/lessons')
const requirement = require('./router/resume/requirement')
const submenuoppurtunity = require('./router/oppurtunityParts/submenu/submenu')
const menuoppurtunity = require('./router/oppurtunityParts/menu/menu')
const lecture = require('./router/lecture')
const result = require('./router/results')
const challenges = require('./router/challenges')
const events = require('./router/events')
const registration = require('./router/studRegistrationRecieved')
const checkSheett = require('./router/checksheet')
const impQues = require('./router/impQues')


const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());


app.use('/api/v1/student', studentRouter);
app.use('/api/v1/institutes', institutes);
app.use('/api/v1/teacher', teacher);
app.use('/api/v1/schdule', schdule);
app.use('/api/v1/helpAndSupport',helpAndSupport)
app.use('/api/v1/privacyPolicy', privacy)
app.use('/api/v1/termsAndService', termsAndService)
app.use('/api/v1/notification', notification)
app.use('/api/v1/menu', menu)
app.use('/api/v1/submenu',submenu)
app.use('/api/v1/topics', topics)
app.use('/api/v1/learningSites', learningSites)
app.use('/api/v1/booking',booking)
app.use('/api/v1/payment',payment)
app.use('/api/v1/library',library)
app.use('/api/v1/themes',themes)
app.use('/api/v1/course',course)
app.use('/api/v1/attendence',attendence)
app.use('/api/v1/competitionParts',competitionParts)
app.use('/api/v1/competition',competition)
app.use('/api/v1/schedule',schedule)
app.use('/api/v1/exam',exam)
app.use('/api/v1/studentEnquiry',studentEnquiry)
app.use('/api/v1/revision',revision)
app.use('/api/v1/oppurtunities',oppurtunities)
app.use('/api/v1/internship',internship)
app.use('/api/v1/interview',interview)
app.use('/api/v1/job',job)
app.use('/api/v1/seminars',seminars)
app.use('/api/v1/overview',overview)
app.use('/api/v1/faq',faq)
app.use('/api/v1/lessons',lessons)
app.use('/api/v1/requirement',requirement)
app.use('/api/v1/submenuoppurtunity',submenuoppurtunity)
app.use('/api/v1/menuoppurtunity',menuoppurtunity)
app.use('/api/v1/lecture',lecture)
app.use('/api/v1/result',result)
app.use('/api/v1/challenges',challenges)
app.use('/api/v1/events',events)
app.use('/api/v1/registration',registration)
app.use('/api/v1/checkSheett',checkSheett)
app.use('/api/v1/impQues',impQues)



app.all('*', (req, res, next) => {
    return next(
        createError(404, 'Path does not exists'));
})


app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    if (err.status) {
        console.log(err);
        console.log('error middleware');
        return res.status(err.status).json({
            msg: err.message
        })

    } else {

        console.log(err);
        console.log('error middleware status not given');
        return res.status(500).json({
            msg: err.message
        })
    }

})


module.exports = app;