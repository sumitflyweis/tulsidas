const express = require('express');
const review = require('../Controller/review');

const router= express();


router.post('/', review.AddReview);
router.get('/', review.getAll);



module.exports = router;

