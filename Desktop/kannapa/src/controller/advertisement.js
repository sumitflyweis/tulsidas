const Advertise = require("../model/advertisement");
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
    folder: "Images", // optional folder name in your Cloudinary account
    allowed_formats: ["jpg", "jpeg", "png", "PNG", "xlsx", "xls"], // allowed file formats
  },
});

// create multer instance with storage configuration
const upload = multer({ storage: storage });
console.log(upload);



exports.createAdvertise = async (req, res) => {
  try {
    upload.single("file")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      }

      // Get the URL of the uploaded file
      const fileUrl = req.file ? req.file.path : "";

      const { image, title ,status } = req.body;

      const advertise = new Advertise({
        image: fileUrl || image,
        title,
        status
      });

      const savedAdvertise = await advertise.save();
      return res.status(201).json({ success: true, advertise: savedAdvertise });
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to create the advertisement." });
  }
};



exports.updateAdvertise = async (req, res) => {
  try {
    const { id } = req.params;

    upload.single("file")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      }

      // Get the URL of the uploaded file
      const fileUrl = req.file ? req.file.path : "";

      const { image, title ,status} = req.body;

      const updatedAdvertise = await Advertise.findByIdAndUpdate(
        id,
        { image: fileUrl || image , title : title , updatedAt: Date.now() ,status :status},
        { new: true }
      );

      return res
        .status(200)
        .json({ success: true, advertise: updatedAdvertise });
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to update the advertisement." });
  }
};


exports.getAdvertises = async (req, res) => {
  try {
    const advertises = await Advertise.find();
    return res.status(200).json({ success: true, advertises });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Failed to retrieve the advertisements.",
      });
  }
};

exports.getAdvertiseById = async (req, res) => {
  try {
    const advertises = await Advertise.findById({ _id: req.params.id });
    return res.status(200).json({ success: true, advertises });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Failed to retrieve the advertisements.",
      });
  }
};


exports.deleteAdvertise = async (req, res) => {
  try {
    const { id } = req.params;

    await Advertise.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ success: true, message: "Advertisement deleted successfully." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to delete the advertisement." });
  }
};
