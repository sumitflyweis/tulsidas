const TrendingNews = require('../model/trendingNews')


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
})
const imageUpload = multer({ storage: imageStorage })

// configure multer to use Cloudinary as storage destination for files (PDFs)
const fileStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Files", // optional folder name in your Cloudinary account
    allowed_formats: ["pdf"], // allowed file formats (PDF)
  },
});
const fileUpload = multer({ storage: fileStorage })



exports.createTrendingNews = async (req, res) => {
  try {
    
    imageUpload.single("uploadBanner")(req, res, async (imageErr) => {
      if (imageErr) {
        return res.status(400).json({ msg: imageErr.message });
      }
      console.log("hi")
      fileUpload.single("uploadFile")(req, res, async (fileErr) => {
        if (fileErr) {
          return res.status(400).json({ msg: fileErr.message });
        }
        
        const imageUrl = req.file ? req.file.path : "";
        const fileUrl = req.file ? req.file.path : "";

        const { date, data, count, userid, sportCategory, title, writterName ,uploadbanner , uploadFile ,status } = req.body;

        const news = new TrendingNews({
          date,
          data,
          count,
          userid,
          sportCategory,
          title,
          writterName,
          status,
          uploadbanner: imageUrl || uploadbanner ,
          uploadFile: fileUrl || uploadFile
        });

        const savedNews = await news.save();
        return res.status(201).json({ success: true, news: savedNews });
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Failed to create trending news.' });
  }
};


exports.getbyIdTrendingNews = async (req, res) => {
    try {
      const news = await TrendingNews.findById({_id:req.params.id});
      return res.status(200).json({ success: true, news });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Failed to retrieve trending news.' });
    }
  }

 
  exports.getTrendingNews = async (req, res) => {
    try {
      const trendingNews = await TrendingNews.find().populate('userid');
      return res.status(200).json({ success: true, trendingNews });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Failed to retrieve trending news.' });
    }
  };
  
  exports.updateTrendingNews = async (req, res) => {
    try {
      const { id } = req.params;

      imageUpload.single("uploadBanner")(req, res, async (imageErr) => {
        if (imageErr) {
          return res.status(400).json({ msg: imageErr.message });
        }
        console.log("hi")
        fileUpload.single("uploadFile")(req, res, async (fileErr) => {
          if (fileErr) {
            return res.status(400).json({ msg: fileErr.message });
          }
          
          const imageUrl = req.file ? req.file.path : "";
          const fileUrl = req.file ? req.file.path : "";
  
          const { date, data, count, userid, sportCategory, title, writterName ,uploadbanner , uploadFile,status  } = req.body;

 
  
      const updatedNews = await TrendingNews.findByIdAndUpdate(
        id,
        { date,
          data,
          count,
          userid,
          sportCategory,
          title,
          writterName,
          status,
          uploadbanner: imageUrl || uploadbanner ,
          uploadFile: fileUrl || uploadFile},
        { new: true }
      );
  
      return res.status(200).json({ success: true, news: updatedNews });
    })
   })
   } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Failed to update trending news.' });
    }
  };
  
  exports.deleteTrendingNews = async (req, res) => {
    try {
      const { id } = req.params;
  
      await TrendingNews.findByIdAndDelete(id);
  
      return res.status(200).json({ success: true, message: 'Trending news deleted successfully.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Failed to delete trending news.' });
    }
  };
  

exports.viewNews = async (req, res) => {
  try {
    const { newsId } = req.params;
    const { userId } = req.body; 
    // Check if the user has already viewed the news
    const news = await TrendingNews.findById(newsId);
    const viewedUsers = news.viewedUsers || [];

    if (!viewedUsers.includes(userId)) {
      // User has not viewed the news before, increment the count and add the user to the viewed users list
      news.count++;
      news.viewedUsers = [...viewedUsers, userId];
      await news.save();
    }

    return res.status(200).json({ success: true, message: 'News viewed successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Failed to view the news.' });
  }
};


exports.getNewsSortedByCount = async (req, res) => {
  try {
    const sortedNews = await TrendingNews.find().sort({ count: -1 });
    return res.status(200).json({ success: true, news: sortedNews });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Failed to retrieve news data.' });
  }
};


exports.getNewsSortedByDate = async (req, res) => {
  try {
    const sortedNews = await TrendingNews.find().sort({ date: -1 });
    return res.status(200).json({ success: true, news: sortedNews });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Failed to retrieve news data.' });
  }
};



// exports.getAllNews = async (req, res) => {
//     try {
//       const obj = {
//         ...req.query
//       }
//     //   if(req.query.status){
//     //  obj.status = obj.status == "true"?true:false
//     //   }
//      console.log(obj)
//       const order = await TrendingNews.find(obj).populate("subservicesId userId")
//       //const orders = await Order.find();
//       res.status(200).json({
//         success: true,
//         total:order.length,
//         data: order,
//       });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({
//         success: false,
//         message: "Failed to retrieve orders",
//         error: err.message,
//       });
//     }
//   };