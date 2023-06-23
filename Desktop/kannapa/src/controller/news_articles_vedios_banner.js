const TrendingNews = require("../model/trendingNews");
const featuredvediooo = require("../model/featuredvedios");
const banner = require("../model/banner");
const Advertise = require("../model/advertisement");

module.exports.getAnyOfOne = async (req, res) => {
  try {
    const d = req.params.d;
    console.log(d);

    if (d == "news") {
      const trendingNews = await TrendingNews.find().populate("userid");
      if (!trendingNews) {
        return res.status(400).json({ msg: "trendingNews not found" });
      }
      return res.status(200).json({ success: true, trendingNews });
    }

    if (d == "article") {
      const advertises = await Advertise.find();
      if (!advertises) {
        return res.status(400).json({ msg: "advertises not found" });
      }
      return res.status(200).json({ success: true, advertises: advertises });
    }

    if (d == "video") {
      const vedios = await featuredvediooo.find();
      if (!vedios) {
        return res.status(400).json({ msg: "vedios not found" });
      }
      res.json({ vedios });
    }

    if (d == "banner") {
      const allbanner = await banner.find();
      if (!allbanner) {
        return res.status(400).json({ msg: "banner not found" });
      }
      console.log(allbanner);
      res.status(200).json({
        message: "All banner ",
        Data: allbanner,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
