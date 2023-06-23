const express = require('express');
const router = express.Router();
const fanatikkController = require('../controller/fanatikkZone');

// GET all help data
router.get('/', fanatikkController.getAllFanatikks)


router.get('/:id', fanatikkController.getFanatikkById);

// POST create new help data
router.post('/', fanatikkController.createFanatikk);

// PUT update help data by ID
router.put('/:id', fanatikkController.updateFanatikkById);

// DELETE delete help data by ID
router.delete('/:id', fanatikkController.deleteFanatikkById);

module.exports = router;
