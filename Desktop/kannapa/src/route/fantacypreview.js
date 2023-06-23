const express = require('express');
const router = express.Router();
const FantacyController = require('../controller/fantacypreview'); // Assuming the file containing the controller is named 'fantacyController.js'

// Create a new fantacy
router.post('/', FantacyController.createFantacy);

// Get all fantacies
router.get('/', FantacyController.getAllFantacies);

// Get a single fantacy by ID
router.get('/:id', FantacyController.getFantacyById);

// Update a single fantacy by ID
router.put('/:id', FantacyController.updateFantacyById);

// Delete a single fantacy by ID
router.delete('/:id', FantacyController.deleteFantacyById);

module.exports = router;


// router.post('/', contactController.createContact);

// router.get('/', contactController.getContacts);

// // GET contact by ID
// router.get('/:id', contactController.getContactById);

// // UPDATE contact by ID
// router.put('/:id', contactController.updateContactById);

// // DELETE contact by ID
// router.delete('/:id', contactController.deleteContactById);

// router.get('/api/data',contactController.getall)



