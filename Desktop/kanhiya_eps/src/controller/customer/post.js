const path = require("path");
require("dotenv").config();
const post = require("../../../src/model/post");
const vendor = require("../../../src/model/vendorAccount");
// const customer = require("../../../src/model/customerAccount");

exports.createpost = async (req, res) => {
  try {
    const vendorData = await vendor.findById({ _id: req.params.vendorId });

    if (!vendorData || vendorData.length == 0)
      return res.status(404).send({ message: "data not found" });

    const data = {
      vendorId: vendorData._id,
      name: vendorData.name,
      date: req.body.date,
      comment: req.body.comment,
      //   like: { type: String ,default:0},
      //   dislike: { type: String ,default:0},
      image: req.body.image,
    };

    const postData = await post.create(data);

    return res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.updatepost = async (req, res) => {
  try {
    if (req.params.action == "like") {
      const vendor = await post.findById({ _id: req.body.id });
      console.log(vendor);
      vendor.like += 1;
      await vendor.save();
      return res.status(200).send(vendor);
    }

    if (req.params.action == "dislike") {
      const vendor = await post.findById({ _id: req.body.id });
      console.log(vendor);
      vendor.dislike += 1;
      return res.status(200).send(vendor);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
