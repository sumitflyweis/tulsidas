const express = require('express');
const router = express.Router();
const typeOfSportController = require('../controller/typeOfSport');

// Create a new type of sport
router.post('/', typeOfSportController.createTypeOfSport);

router.get('/', typeOfSportController.getAllTypeOfSport);

// Get a specific type of sport
router.get('/:id', typeOfSportController.getTypeOfSport);

// Update a type of sport
router.put('/:id', typeOfSportController.updateTypeOfSport);

// Delete a type of sport
router.delete('/:id', typeOfSportController.deleteTypeOfSport);

module.exports = router;
