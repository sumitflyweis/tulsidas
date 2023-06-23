const featuredvediooo = require("../model/featuredvedios");

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


exports.updateFeaturedVedio = async (req, res) => {
  try {
    upload.single("vedio")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      }

      // Get the URL of the uploaded video
      const videoUrl = req.file ? req.file.path : "";

      const { vedio, title, date, time,pasteVideoLink ,status} = req.body;

      const user = await featuredvediooo.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            vedio: videoUrl || vedio,
            title: title,
            date: date,
            time: time,
            pasteVideoLink : pasteVideoLink,
            status: status


          },
        },
        {
          new: true,
        }
      );

      return res
        .status(200)
        .json({ msg: "Profile updated successfully", user: user });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message, name: error.name });
  }
};



exports.createFeaturedVedio = async (req, res) => {
  try {
    upload.single("vedio")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      }
      console.log("hi");
      const videoUrl = req.file ? req.file.path : "";

      const { vedio, title, date, time ,pasteVideoLink ,status } = req.body;

      const createdVideo = await featuredvediooo.create({
        vedio: videoUrl || vedio,
        title : title,
        date : date,
        time : time,
        pasteVideoLink: pasteVideoLink,
        status : status
      });

      res.status(201).json({ vedio: createdVideo });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getAllFeaturedVedios = async (req, res) => {
  try {
    const vedios = await featuredvediooo.find();

    res.json({ vedios });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getFeaturedVedioById = async (req, res) => {
  try {
    const { id } = req.params;

    const vedio = await featuredvediooo.findById(id);

    if (!vedio) {
      return res.status(404).json({ message: "Featured video not found" });
    }

    res.json({ vedio });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteFeaturedVedio = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedVedio = await featuredvediooo.findByIdAndDelete(id);

    if (!deletedVedio) {
      return res.status(404).json({ message: "Featured video not found" });
    }

    res.json({ message: "Featured video deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
