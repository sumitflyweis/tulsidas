const Ranking = require('../model/teamranking'); // Assuming the file containing the model is named 'teamrankModel.js'

// Create a new team ranking
exports.createRanking = async (req, res) => {
  try {
    const { ranking } = req.body;
    const newRanking = new Ranking({ ranking });
    const savedRanking = await newRanking.save();
    res.status(201).json(savedRanking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all team rankings
exports.getAllRankings = async (req, res) => {
  try {
    const rankings = await Ranking.find();
    res.status(200).json(rankings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single team ranking by ID
exports.getRankingById = async (req, res) => {
  try {
    const ranking = await Ranking.findById(req.params.id);
    if (!ranking) {
      return res.status(404).json({ message: 'Ranking not found' });
    }
    res.status(200).json(ranking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a single team ranking by ID
exports.updateRankingById = async (req, res) => {
  try {
    const { ranking } = req.body;
    const updatedRanking = await Ranking.findByIdAndUpdate(req.params.id, { ranking }, { new: true });
    if (!updatedRanking) {
      return res.status(404).json({ message: 'Ranking not found' });
    }
    res.status(200).json(updatedRanking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a single team ranking by ID
exports.deleteRankingById = async (req, res) => {
  try {
    const deletedRanking = await Ranking.findByIdAndDelete(req.params.id);
    if (!deletedRanking) {
      return res.status(404).json({ message: 'Ranking not found' });
    }
    res.status(200).json({ message: 'Ranking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
