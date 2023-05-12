const express = require("express");
const router = express.Router();
const cheatSheetController = require("../controllers/teacher/cheatSheet");

// POST route to create a new cheat sheet
router.post("/", cheatSheetController.createCheatSheet);

// GET route to retrieve all cheat sheets
router.get("/", cheatSheetController.getCheatSheets);

// GET route to retrieve a cheat sheet by ID
router.get("/:id", cheatSheetController.getCheatSheetById);

// PUT route to update a cheat sheet by ID
router.put("/:id", cheatSheetController.updateCheatSheet);

// DELETE route to delete a cheat sheet by ID
router.delete("/:id", cheatSheetController.deleteCheatSheet);

module.exports = router;
