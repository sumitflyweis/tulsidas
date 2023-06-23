const Content = require("../model/content"); // Assuming the file containing the model is named 'contentModel.js'

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

// configure Cloudinary credentials
cloudinary.config({
  cloud_name: "dbrvq9uxa",
  api_key: "567113285751718",
  api_secret: "rjTsz9ksqzlDtsrlOPcTs_-QtW4",
});

const imageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Images", // optional folder name in your Cloudinary account
    allowed_formats: ["jpg", "jpeg", "png", "PNG"], // allowed image formats
  },
});
const imageUpload = multer({ storage: imageStorage });

// Create a new content
exports.createContent = async (req, res) => {
  try {
    imageUpload.single("file")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      }

      // Get the URL of the uploaded video
      const fileUrl = req.file ? req.file.path : "";

      const { image, storyTitle } = req.body;
      const newContent = new Content({
        image: fileUrl || image,
        storyTitle: storyTitle,
      });
      const savedContent = await newContent.save();
      res.status(201).json(savedContent);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all contents
exports.getAllContents = async (req, res) => {
  try {
    const contents = await Content.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single content by ID
exports.getContentById = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: "Content not found" });
    }
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a single content by ID
exports.updateContentById = async (req, res) => {
  try {
    imageUpload.single("file")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      }

      // Get the URL of the uploaded video
      const fileUrl = req.file ? req.file.path : "";

      const { image, storyTitle } = req.body;
      const updatedContent = await Content.findByIdAndUpdate(
        req.params.id,
        { image: fileUrl || image, storyTitle: storyTitle },
        { new: true }
      );
      if (!updatedContent) {
        return res.status(404).json({ message: "Content not found" });
      }
      res.status(200).json(updatedContent);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a single content by ID
exports.deleteContentById = async (req, res) => {
  try {
    const deletedContent = await Content.findByIdAndDelete(req.params.id);
    if (!deletedContent) {
      return res.status(404).json({ message: "Content not found" });
    }
    res.status(200).json({ message: "Content deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
