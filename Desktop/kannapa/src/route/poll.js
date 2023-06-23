const express = require('express');
const router = express.Router();
const PollController = require('../controller/poll'); 


router.post('/', PollController.createPollQuestion);


router.get('/', PollController.getAllPollQuestions);


router.get('/:id', PollController.getPollQuestionById);


router.put('/:id', PollController.updatePollQuestionById);


router.delete('/:id', PollController.deletePollQuestionById);

module.exports = router;
