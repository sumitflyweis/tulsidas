const express = require('express');
const router = express.Router();
const eventController = require('../controllers/teacher/events');

router.put('/event/:id', eventController.addDataToEventById);
router.get('/searchEventsByDate', eventController.searchEventsByDate)

router.post('/events', eventController.createEvent)

router.get('/events', eventController.getEvents);

// GET event by ID
router.get('/events/:id', eventController.getEventById);

// UPDATE event by ID
router.put('/events/:id', eventController.updateEventById);

// DELETE event by ID
router.delete('/events/:id', eventController.deleteEventById);

module.exports = router;
