const express = require('express');
const router = express.Router();
const tournamentt = require('../controller/tournament');

router.post('/', tournamentt.createTournament);
router.get('/', tournamentt.getAllTournaments);
router.get('/:id', tournamentt.getTournamentById);
router.put('/:id',tournamentt.updateTournamentById );
router.delete('/:id', tournamentt.deleteTournamentById);




module.exports = router
