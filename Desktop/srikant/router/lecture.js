const express = require('express');
const router = express.Router();
const lectureController = require('../controllers/admin/lecture');

// Get all lectures
router.get('/lectures', lectureController.getLectures);

// Get a single lecture
router.get('/lectures/:id', lectureController.getLecture);

// Create a new lecture
router.post('/lectures', lectureController.createLecture);

// Update a lecture
router.put('/lectures/:id', lectureController.updateLecture)

// Delete a lecture
router.delete('/lectures/:id', lectureController.deleteLecture)

module.exports = router;
