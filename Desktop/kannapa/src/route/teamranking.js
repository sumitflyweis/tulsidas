const express = require('express');
const router = express.Router();
const  rank = require('../controller/teamranking');

router.post('/', rank.createRanking);
router.get('/', rank.getAllRankings);
router.get('/:id', rank.getRankingById);
router.put('/:id',rank.updateRankingById );
router.delete('/:id', rank.deleteRankingById);

module.exports = router
