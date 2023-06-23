const UpdateRanking = require('../model/updateRanking'); // Assuming the file containing the model is named 'updaterankkModel.js'

// Create a new updateranking
exports.createUpdateRanking = async (req, res) => {
  try {
    const { tournament, rank, teamName, rating } = req.body;
    const newUpdateRanking = new UpdateRanking({ tournament, rank, teamName, rating });
    const savedUpdateRanking = await newUpdateRanking.save();
    res.status(201).json(savedUpdateRanking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all updaterankings
exports.getAllUpdateRankings = async (req, res) => {
  try {
    const updateRankings = await UpdateRanking.find().populate('tournament rank');
    res.status(200).json(updateRankings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single updateranking by ID
exports.getUpdateRankingById = async (req, res) => {
  try {
    const updateRanking = await UpdateRanking.findById(req.params.id).populate('tournament rank');
    if (!updateRanking) {
      return res.status(404).json({ message: 'Update Ranking not found' });
    }
    res.status(200).json(updateRanking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a single updateranking by ID
exports.updateUpdateRankingById = async (req, res) => {
  try {
    const { tournament, rank, teamName, rating } = req.body;
    const updatedUpdateRanking = await UpdateRanking.findByIdAndUpdate(
      req.params.id,
      { tournament, rank, teamName, rating },
      { new: true }
    ).populate('tournament rank');
    if (!updatedUpdateRanking) {
      return res.status(404).json({ message: 'Update Ranking not found' });
    }
    res.status(200).json(updatedUpdateRanking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a single updateranking by ID
exports.deleteUpdateRankingById = async (req, res) => {
  try {
    const deletedUpdateRanking = await UpdateRanking.findByIdAndDelete(req.params.id);
    if (!deletedUpdateRanking) {
      return res.status(404).json({ message: 'Update Ranking not found' });
    }
    res.status(200).json({ message: 'Update Ranking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
