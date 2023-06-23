const Fantacy = require("../model/fantacypreview");

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

// configure multer to use Cloudinary as storage destination for files (PDFs)
const fileStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Files", // optional folder name in your Cloudinary account
    allowed_formats: ["pdf"], // allowed file formats (PDF)
  },
});
const fileUpload = multer({ storage: fileStorage });



exports.createFantacy = async (req, res) => {
  try {
    let imageUrl = "";
    let fileUrl = "";

    imageUpload.single("uploadBanner")(req, res, async (imageErr) => {
      if (imageErr) {
        return res.status(400).json({ msg: imageErr.message });
      }
      imageUrl = req.file ? req.file.path : "";
      console.log(imageUrl);

      fileUpload.single("uploadFile")(req, res, async (fileErr) => {
        if (fileErr) {
          return res.status(400).json({ msg: fileErr.message });
        }
        fileUrl = req.file ? req.file.path : "";
        console.log(fileUrl);

        const { sportCategory, titleName } = req.body;
        const newFantacy = new Fantacy({
          sportCategory: sportCategory,
          titleName: titleName,
          uploadBanner: imageUrl,
          uploadFile: fileUrl,
        });

        const savedFantacy = await newFantacy.save();
        res.status(201).json(savedFantacy);
      });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};






// Get all fantacies
exports.getAllFantacies = async (req, res) => {
  try {
    const fantacies = await Fantacy.find().populate("sportCategory");
    res.status(200).json({msg:fantacies});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single fantacy by ID
exports.getFantacyById = async (req, res) => {
  try {
    const fantacy = await Fantacy.findById(req.params.id).populate(
      "sportCategory"
    );
    if (!fantacy) {
      return res.status(404).json({ message: "Fantacy not found" });
    }
    res.status(200).json({msg:fantacy});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a single fantacy by ID
exports.updateFantacyById = async (req, res) => {
  try {

    let imageUrl = "";
    let fileUrl = "";

    imageUpload.single("uploadBanner")(req, res, async (imageErr) => {
      if (imageErr) {
        return res.status(400).json({ msg: imageErr.message });
      }
      imageUrl = req.file ? req.file.path : "";
      console.log(imageUrl);

      fileUpload.single("uploadFile")(req, res, async (fileErr) => {
        if (fileErr) {
          return res.status(400).json({ msg: fileErr.message });
        }
        fileUrl = req.file ? req.file.path : "";
        console.log(fileUrl);


    const { sportCategory, titleName, uploadBanner, uploadFile } = req.body;
    const updatedFantacy = await Fantacy.findByIdAndUpdate(
      req.params.id,
      { sportCategory:sportCategory, titleName:titleName, uploadBanner:uploadBanner || imageUrl, uploadFile:uploadFile || fileUrl },
      { new: true }
    ).populate("sportCategory");
    if (!updatedFantacy) {
      return res.status(404).json({ message: "Fantacy not found" });
    }
    res.status(200).json(updatedFantacy);
  })
 })
 } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a single fantacy by ID
exports.deleteFantacyById = async (req, res) => {
  try {
    const deletedFantacy = await Fantacy.findByIdAndDelete(req.params.id);
    if (!deletedFantacy) {
      return res.status(404).json({ message: "Fantacy not found" });
    }
    res.status(200).json({ message: "Fantacy deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const Help = require('../model/fantacypreview');
// const fetchFromOffset = async (offset) => {
//   try {
//     const response = await fetch(
//       `https://api.cricapi.com/v1/countries?apikey=b24fc013-5e95-493a-85ff-f6a5b127d427&offset=${offset}`
//     );
//     const data = await response.json();
//     if (data.status !== "success") {
//       throw new Error("Failed");
//     }
//     const datarray = data.data;
//     if (!datarray) {
//       return [];
//     } else if (offset >= data.info.totalRows) {
//       return datarray;
//     } else {
//       return await fetchFromOffset(offset + 25).then(function (data) {
//         return datarray.concat(data);
//       });
//     }
//   } catch (e) {
//     console.log(e);
//     return [];
//   }
// };

// exports.getall = async (req, res) => {
//     const offset = req.query.offset || 0;
//     const data = await fetchFromOffset(offset);
//     const data1 = await Help.create(data)
//     res.json({data:data,data1:data1});
//   }
