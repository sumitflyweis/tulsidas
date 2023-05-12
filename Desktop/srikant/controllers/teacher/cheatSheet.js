const CheatSheet = require("../../models/cheatSheet");

exports.createCheatSheet = async (req, res) => {
  try {
    const { cheatSheet } = req.body;
    
    // Create a new cheatSheet document using the CheatSheet model
    const newCheatSheet = new CheatSheet({ cheatSheet });

    // Save the new cheatSheet document to the database
    const savedCheatSheet = await newCheatSheet.save();

    res.status(201).json(savedCheatSheet);
  } catch (error) {
    // Handle any errors that occurred during the creation process
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.getCheatSheets = async (req, res) => {
  try {
    // Retrieve all cheatSheet documents from the database
    const cheatSheets = await CheatSheet.find();

    res.status(200).json(cheatSheets);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.getCheatSheetById = async (req, res) => {
  try {
    const { id } = req.params;

    // Retrieve a single cheatSheet document by its ID from the database
    const cheatSheet = await CheatSheet.findById(id);

    if (!cheatSheet) {
      return res.status(404).json({ error: "Cheat sheet not found" });
    }

    res.status(200).json(cheatSheet);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.updateCheatSheet = async (req, res) => {
  try {
    const { id } = req.params;
    const { cheatSheet } = req.body;

    // Find the cheatSheet document by ID and update its contents
    const updatedCheatSheet = await CheatSheet.findByIdAndUpdate(
      id,
      { cheatSheet },
      { new: true }
    );

    if (!updatedCheatSheet) {
      return res.status(404).json({ error: "Cheat sheet not found" });
    }

    res.status(200).json(updatedCheatSheet);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.deleteCheatSheet = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the cheatSheet document by ID and remove it from the database
    const deletedCheatSheet = await CheatSheet.findByIdAndRemove(id);

    if (!deletedCheatSheet) {
      return res.status(404).json({ error: "Cheat sheet not found" });
    }

    res.status(200).json(deletedCheatSheet);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
