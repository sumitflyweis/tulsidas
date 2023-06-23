const Fanatikk = require("../model/fanatikkZone");

const videoPattern = "[^\\s]+(.*?)\\.(mp4|avi|mov|flv|wmv)$";
const multer = require("multer");

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

// configure Cloudinary credentials
cloudinary.config({
  cloud_name: "dbrvq9uxa",
  api_key: "567113285751718",
  api_secret: "rjTsz9ksqzlDtsrlOPcTs_-QtW4",
});

// configure multer to use Cloudinary as storage destination
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "videos", // optional folder name in your Cloudinary account
    allowed_formats: ["mp4", "avi", "mov", "flv", "wmv"], // allowed video formats
    resource_type: "video", // specify the resource type as video
  },
});

// create multer instance with storage configuration
const upload = multer({ storage: storage });

exports.createFanatikk = async (req, res) => {
  try {
    upload.single("file")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      }

      // Get the URL of the uploaded file
      const fileUrl = req.file ? req.file.path : "";

      const { pasteLink, reelTitle, uploadReel } = req.body;
      const newFanatikk = new Fanatikk({
        pasteLink: pasteLink,
        reelTitle: reelTitle,
        uploadReel: fileUrl || uploadReel,
      });
      const savedFanatikk = await newFanatikk.save();
      res.status(201).json(savedFanatikk);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all fanatikks
exports.getAllFanatikks = async (req, res) => {
  try {
    const fanatikks = await Fanatikk.find();
    res.status(200).json(fanatikks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single fanatikk by ID
exports.getFanatikkById = async (req, res) => {
  try {
    const fanatikk = await Fanatikk.findById(req.params.id);
    if (!fanatikk) {
      return res.status(404).json({ message: "Fanatikk not found" });
    }
    res.status(200).json(fanatikk);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a single fanatikk by ID
exports.updateFanatikkById = async (req, res) => {
  try {
    upload.single("file")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      }

      // Get the URL of the uploaded file
      const fileUrl = req.file ? req.file.path : "";

      const { pasteLink, reelTitle, uploadReel } = req.body;

      const updatedFanatikk = await Fanatikk.findByIdAndUpdate(
        req.params.id,
        {
          pasteLink: pasteLink,
          reelTitle: reelTitle,
          uploadReel: fileUrl || uploadReel,
        },
        { new: true }
      );
      if (!updatedFanatikk) {
        return res.status(404).json({ message: "Fanatikk not found" });
      }
      res.status(200).json(updatedFanatikk);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a single fanatikk by ID
exports.deleteFanatikkById = async (req, res) => {
  try {
    const deletedFanatikk = await Fanatikk.findByIdAndDelete(req.params.id);
    if (!deletedFanatikk) {
      return res.status(404).json({ message: "Fanatikk not found" });
    }
    res.status(200).json({ message: "Fanatikk deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
