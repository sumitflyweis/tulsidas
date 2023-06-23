const express = require('express');
const router = express.Router();
const UpdateRankingController = require('../controller/updateRanking'); 

// Create a new updateranking
router.post('/', UpdateRankingController.createUpdateRanking);

// Get all updaterankings
router.get('/', UpdateRankingController.getAllUpdateRankings);

// Get a single updateranking by ID
router.get('/:id', UpdateRankingController.getUpdateRankingById);

// Update a single updateranking by ID
router.put('/:id', UpdateRankingController.updateUpdateRankingById);

// Delete a single updateranking by ID
router.delete('/:id', UpdateRankingController.deleteUpdateRankingById);

module.exports = router;
