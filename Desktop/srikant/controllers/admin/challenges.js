const Challenges = require("../../models/challenges"); // Import the Challenges model

// Create a new challenge
exports.createChallenge = async (req, res, next) => {
  try {
    const challengeData = req.body;
    const createdChallenge = await Challenges.create(challengeData);
    res.status(201).json(createdChallenge);
  } catch (error) {
    next(error);
  }
};

// Get all challenges
exports.getAllChallenges = async (req, res, next) => {
  try {
    const challenges = await Challenges.find();
    res.status(200).json(challenges);
  } catch (error) {
    next(error);
  }
};

// Get a single challenge by ID
exports.getChallengeById = async (req, res, next) => {
  try {
    const challengeId = req.params.id;
    const challenge = await Challenges.findById(challengeId);
    if (!challenge) {
      res.status(404).json({ error: "Challenge not found" });
    } else {
      res.status(200).json(challenge);
    }
  } catch (error) {
    next(error);
  }
};

// Update a challenge by ID
exports.updateChallengeById = async (req, res, next) => {
  try {
    const challengeId = req.params.id;
    const challengeData = req.body;
    const updatedChallenge = await Challenges.findByIdAndUpdate(
      challengeId,
      challengeData,
      { new: true }
    );
    if (!updatedChallenge) {
      res.status(404).json({ error: "Challenge not found" });
    } else {
      res.status(200).json(updatedChallenge);
    }
  } catch (error) {
    next(error);
  }
};

// Delete a challenge by ID
exports.deleteChallengeById = async (req, res, next) => {
  try {
    const challengeId = req.params.id;
    const deletedChallenge = await Challenges.findByIdAndDelete(challengeId);
    if (!deletedChallenge) {
      res.status(404).json({ error: "Challenge not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    next(error);
  }
};
