const express = require('express');
const router = express.Router();
const contactController = require('../controller/content');

router.post('/', contactController.createContent);

router.get('/', contactController.getAllContents);

// GET contact by ID
router.get('/:id', contactController.getContentById);

// UPDATE contact by ID
router.put('/:id', contactController.updateContentById);

// DELETE contact by ID
router.delete('/:id', contactController.deleteContentById);

module.exports = router;
