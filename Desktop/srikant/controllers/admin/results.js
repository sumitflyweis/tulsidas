const resultModel = require("../../models/results"); // Import the Mongoose model

// Controller function to create a new result
exports.createResult = async (req, res) => {
  try {
    const { studentid, serial_no, studentName, percentage,subjectName } = req.body; // Extract data from request body
    const result = new resultModel({
      studentid,
      serial_no,
      studentName,
      percentage,
      subjectName
    }); // Create a new result document

    await result.save(); // Save the result document to the database
    res
      .status(201)
      .json({ success: true, message: "Result created successfully" }); // Send success response
  } catch (error) {
    console.error("Error creating result:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create result" }); // Send error response
  }
};

// Controller function to get all results
exports.getAllResults = async (req, res) => {
  try {
    const results = await resultModel.find(); // Find all results in the database
    res.status(200).json({ success: true, data: results }); // Send success response with results data
  } catch (error) {
    console.error("Error getting results:", error);
    res.status(500).json({ success: false, message: "Failed to get results" }); // Send error response
  }
};

// Controller function to get a result by ID
exports.getResultById = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from request parameters
    const result = await resultModel.findById(id); // Find result by ID in the database

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Result not found" }); // Send error response if result not found
    }

    res.status(200).json({ success: true, data: result }); // Send success response with result data
  } catch (error) {
    console.error("Error getting result:", error);
    res.status(500).json({ success: false, message: "Failed to get result" }); // Send error response
  }
};

// Controller function to update a result by ID
exports.updateResultById = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from request parameters
    const { studentid, serial_no, studentName, percentage,subjectName } = req.body; // Extract data from request body

    const result = await resultModel.findByIdAndUpdate(
      id,
      { studentid, serial_no, studentName, percentage,subjectName },
      { new: true }
    ); // Find and update result by ID in the database

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Result not found" }); // Send error response if result not found
    }

    res.status(200).json({ success: true, data: result }); // Send success response with updated result data
  } catch (error) {
    console.error("Error updating result:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update result" }); // Send error response
  }
};

// Controller function to delete a result by ID
exports.deleteResultById = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from request parameters
    const result = await resultModel.findByIdAndDelete(id); // Find and delete result by
    if (!result) {
      return res.status(404).send();
    } else {
      return res.send(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
