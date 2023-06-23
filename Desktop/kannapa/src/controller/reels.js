const Reel = require("../model/reels");

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dbrvq9uxa",
  api_key: "567113285751718",
  api_secret: "rjTsz9ksqzlDtsrlOPcTs_-QtW4",
});

const imageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Images", // optional folder name in your Cloudinary account
    allowed_formats: ["jpg", "jpeg", "png", "PNG", "pdf"], // allowed image formats
  },
});

const imageUpload = multer({ storage: imageStorage });

// // configure multer to use Cloudinary as storage destination for files (PDFs)
// const fileStorage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "Files", // optional folder name in your Cloudinary account
//     allowed_formats: ["pdf"], // allowed file formats (PDF)
//   },
// });
// const fileUpload = multer({ storage: fileStorage });

exports.createReels = async (req, res) => {
  try {
    imageUpload.single("uploadBanner")(req, res, async (imageErr) => {
      if (imageErr) {
        return res.status(400).json({ msg: imageErr.message });
      }
      const imageUrl = req.file ? req.file.path : "";

      const { storyTitle, uploadbanner } = req.body;

      const news = new Reel({
        storyTitle: storyTitle,
        uploadbanner: imageUrl || uploadbanner,
      });

      const savedNews = await news.save();
      return res.status(201).json({ success: true, news: savedNews });
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to create trending news." });
  }
};

exports.getbyIdReels = async (req, res) => {
  try {
    const news = await Reel.findById(req.params.id);
    return res.status(200).json({ success: true, news });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to retrieve trending news." });
  }
};

exports.getAllReels = async (req, res) => {
  try {
    const trendingNews = await Reel.find();
    return res.status(200).json({ success: true, trendingNews });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to retrieve trending news." });
  }
};

exports.updateReels = async (req, res) => {
  try {
    const { id } = req.params;

    imageUpload.single("uploadBanner")(req, res, async (imageErr) => {
      if (imageErr) {
        return res.status(400).json({ msg: imageErr.message });
      }

      // fileUpload.single("uploadFile")(req, res, async (fileErr) => {
      //   if (fileErr) {
      //     return res.status(400).json({ msg: fileErr.message });
      //   }

      const imageUrl = req.file ? req.file.path : "";
      //   const fileUrl = req.file ? req.file.path : "";

      const { storyTitle, uploadbanner } = req.body;

      const updatedNews = await Reel.findByIdAndUpdate(
        id,
        {
          storyTitle: storyTitle,
          uploadbanner: imageUrl || uploadbanner,
        },
        { new: true }
      );

      return res.status(200).json({ success: true, news: updatedNews });
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to update trending news." });
  }
};



exports.deleteReels = async (req, res) => {
  try {
    const { id } = req.params;

    await Reel.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ success: true, message: "Trending news deleted successfully." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to delete trending news." });
  }
};
