const path = require("path");
require("dotenv").config();
const enquiry = require("../../model/enquiryform");


module.exports.getEnquiryByAdmin = async (req, res) => {
    try {

        const enquirydata = await enquiry.find();
      console.log(enquirydata);
      if (!enquirydata || enquirydata.length == 0) {
        return res.status(400).json({ msg: "No enquiry added" });
      } else {
        return res.status(200).json(enquirydata);
      }
    } catch (error) {
      return res.status(400).json({ msg: error.message, name: error.name });
    }
  };
  
  
module.exports.getEnquiryByIdByAdmin= async (req, res) => {
    try {
     
      const enquiryData = await enquiry.findById({_id:req.params.id});
      console.log(enquiryData);
      if (!enquiryData || enquiryData.length == 0) {
        return res.status(400).json({ msg: "No Enquiry added" });
      } else {
        return res.status(200).json(enquiryData);
      }
    } catch (error) {
      return res.status(400).json({ msg: error.message, name: error.name });
    }
  };


module.exports.updateEnquiryAdmin = async (req, res) => {
  try {
    const data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        enquiry: req.body.enquiry,
      };
    const Enquirydata = await enquiry.findOneAndUpdate(
      { _id: req.params.id },
      data,
      { new: true }
    );

    console.log(Enquirydata);
    return res.status(200).json(Enquirydata);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

exports.deleteEnquiryAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    await enquiry.deleteOne({ _id: id });
    res.status(200).send({ message: "enquiry deleted " });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
