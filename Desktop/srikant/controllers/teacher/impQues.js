const ImpQues = require("../../models/importantQues");

exports.createImpQues = async (req, res) => {
  try {
    const { impQues } = req.body;

    // Create a new impQues document using the ImpQues model
    const newImpQues = new ImpQues({ impQues });

    // Save the new impQues document to the database
    const savedImpQues = await newImpQues.save();

    res.status(201).json(savedImpQues);
  } catch (error) {
    // Handle any errors that occurred during the creation process
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.getImpQues = async (req, res) => {
  try {
    // Retrieve all impQues documents from the database
    const impQues = await ImpQues.find();

    res.status(200).json(impQues);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getImpQuesById = async (req, res) => {
  try {
    const { id } = req.params;

    // Retrieve a single impQues document by its ID from the database
    const impQues = await ImpQues.findById(id);

    if (!impQues) {
      return res.status(404).json({ error: "ImpQues not found" });
    }

    res.status(200).json(impQues);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateImpQues = async (req, res) => {
  try {
    const { id } = req.params;
    const { impQues } = req.body;

    // Find the impQues document by ID and update its contents
    const updatedImpQues = await ImpQues.findByIdAndUpdate(
      id,
      { impQues },
      { new: true }
    );

    if (!updatedImpQues) {
      return res.status(404).json({ error: "ImpQues not found" });
    }

    res.status(200).json(updatedImpQues);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteImpQues = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the impQues document by ID and remove it from the database
    const deletedImpQues = await ImpQues.findByIdAndRemove(id);

    if (!deletedImpQues) {
      return res.status(404).json({ error: "ImpQues not found" });
    }

    res.status(200).json(deletedImpQues);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
