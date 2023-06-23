const express = require('express');
const router = express.Router();
const  reelss = require('../controller/reels');

router.post('/', reelss.createReels);
router.get('/', reelss.getAllReels);
router.get('/:id', reelss.getbyIdReels);
router.put('/:id',reelss.updateReels );
router.delete('/:id', reelss.deleteReels);




module.exports = router
