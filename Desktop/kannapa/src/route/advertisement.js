const express = require('express');
const router = express.Router();
const {
  createAdvertise,
  getAdvertises,
  getAdvertiseById,
  updateAdvertise,
  deleteAdvertise
} = require('../controller/advertisement'); // Replace with the correct path to your controller file

// Create a new advertisement
router.post('/', createAdvertise);

// Get all advertisements
router.get('/', getAdvertises);

router.get('/:id', getAdvertiseById);

// Update an advertisement by ID
router.put('/:id', updateAdvertise);

// Delete an advertisement by ID
router.delete('/:id', deleteAdvertise);

module.exports = router;
