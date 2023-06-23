const express = require("express");
const router = express.Router();
const predictController = require("../controller/predictAndWin");

// Create a new predict
router.post("/", predictController.createPredict)

router.get("/", predictController.getAllPredict)

// Get a predict by ID
router.get("/:id", predictController.getPredictById);

// Update a predict by ID
router.put("/:id", predictController.updatePredictById);

// Delete a predict by ID
router.delete("/:id", predictController.deletePredictById);


router.put("/predicts/:id/answer", predictController.updateUserAnswer);


module.exports = router;
