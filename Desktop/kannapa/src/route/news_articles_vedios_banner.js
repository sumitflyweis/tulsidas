const express = require('express');
const router = express.Router();
const anyOneController = require('../controller/news_articles_vedios_banner');

// GET contact by ID
router.get('/:d', anyOneController.getAnyOfOne);


module.exports = router;

