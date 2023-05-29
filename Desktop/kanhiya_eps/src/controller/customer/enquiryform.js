const path = require("path");
require("dotenv").config();
const enquiry = require("../../model/enquiryform");

exports.createEnquiry = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      enquiry: req.body.enquiry,
    };

    const enquirydata = await enquiry.create(data);

    console.log(enquirydata);
    return res.status(200).json({
      id: enquirydata._id,
      message: "enquiryform created ",
      data: enquirydata,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
