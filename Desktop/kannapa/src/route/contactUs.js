const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactUs');

router.post('/', contactController.createContact);

router.get('/', contactController.getContacts);

// GET contact by ID
router.get('/:id', contactController.getContactById);

// UPDATE contact by ID
router.put('/:id', contactController.updateContactById);

// DELETE contact by ID
router.delete('/:id', contactController.deleteContactById);

module.exports = router;

