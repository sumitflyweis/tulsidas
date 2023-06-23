const express = require('express');
const router = express.Router();
const featuredVedioController = require('../controller/featuredvedios');

// Create a featured video
router.post('/', featuredVedioController.createFeaturedVedio);

// Get all featured videos
router.get('/', featuredVedioController.getAllFeaturedVedios);

// Get a featured video by ID
router.get('/:id', featuredVedioController.getFeaturedVedioById);

router.put('/:id', featuredVedioController.updateFeaturedVedio);

// Delete a featured video by ID
router.delete('/:id', featuredVedioController.deleteFeaturedVedio);

module.exports = router;
