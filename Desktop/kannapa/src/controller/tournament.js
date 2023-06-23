const Tournament = require('../model/tournament'); // Assuming the file containing the model is named 'tournamentModel.js'

// Create a new tournament
exports.createTournament = async (req, res) => {
  try {
    const { tournament } = req.body;
    const newTournament = new Tournament({ tournament });
    const savedTournament = await newTournament.save();
    res.status(201).json(savedTournament);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all tournaments
exports.getAllTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find();
    res.status(200).json(tournaments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single tournament by ID
exports.getTournamentById = async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) {
      return res.status(404).json({ message: 'Tournament not found' });
    }
    res.status(200).json(tournament);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a single tournament by ID
exports.updateTournamentById = async (req, res) => {
  try {
    const { tournament } = req.body;
    const updatedTournament = await Tournament.findByIdAndUpdate(req.params.id, { tournament }, { new: true });
    if (!updatedTournament) {
      return res.status(404).json({ message: 'Tournament not found' });
    }
    res.status(200).json(updatedTournament);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a single tournament by ID
exports.deleteTournamentById = async (req, res) => {
  try {
    const deletedTournament = await Tournament.findByIdAndDelete(req.params.id);
    if (!deletedTournament) {
      return res.status(404).json({ message: 'Tournament not found' });
    }
    res.status(200).json({ message: 'Tournament deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
