const Poll = require('../model/poll'); // Assuming the file containing the model is named 'pollQuesModel.js'

// Create a new poll question
exports.createPollQuestion = async (req, res) => {
  try {
    const { pollQues, option_1, option_2 } = req.body;
    const newPollQuestion = new Poll({ pollQues, option_1, option_2 });
    const savedPollQuestion = await newPollQuestion.save();
    res.status(201).json(savedPollQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all poll questions
exports.getAllPollQuestions = async (req, res) => {
  try {
    const pollQuestions = await Poll.find();
    res.status(200).json(pollQuestions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single poll question by ID
exports.getPollQuestionById = async (req, res) => {
  try {
    const pollQuestion = await Poll.findById(req.params.id);
    if (!pollQuestion) {
      return res.status(404).json({ message: 'Poll question not found' });
    }
    res.status(200).json(pollQuestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a single poll question by ID
exports.updatePollQuestionById = async (req, res) => {
  try {
    const { pollQues, option_1, option_2 } = req.body;
    const updatedPollQuestion = await Poll.findByIdAndUpdate(req.params.id, { pollQues, option_1, option_2 }, { new: true });
    if (!updatedPollQuestion) {
      return res.status(404).json({ message: 'Poll question not found' });
    }
    res.status(200).json(updatedPollQuestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a single poll question by ID
exports.deletePollQuestionById = async (req, res) => {
  try {
    const deletedPollQuestion = await Poll.findByIdAndDelete(req.params.id);
    if (!deletedPollQuestion) {
      return res.status(404).json({ message: 'Poll question not found' });
    }
    res.status(200).json({ message: 'Poll question deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
