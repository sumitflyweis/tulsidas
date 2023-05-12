const express = require('express');
const router = express.Router();
const resultController = require('../controllers/admin/results'); // Import the result controller

// Route to create a new result
router.post('/results', resultController.createResult);

// Route to get all results
router.get('/results', resultController.getAllResults);

// Route to get a result by ID
router.get('/results/:id', resultController.getResultById);

// Route to update a result by ID
router.put('/results/:id', resultController.updateResultById);

// Route to delete a result by ID
router.delete('/results/:id', resultController.deleteResultById);

module.exports = router;
