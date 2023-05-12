const express = require("express");
const router = express.Router();
const challengesController = require("../controllers/admin/challenges");

// Create a new challenge
router.post("/", challengesController.createChallenge);

// Get all challenges
router.get("/", challengesController.getAllChallenges);

// Get a single challenge by ID
router.get("/:id", challengesController.getChallengeById);

// Update a challenge by ID
router.put("/:id", challengesController.updateChallengeById);

// Delete a challenge by ID
router.delete("/:id", challengesController.deleteChallengeById);

module.exports = router;
