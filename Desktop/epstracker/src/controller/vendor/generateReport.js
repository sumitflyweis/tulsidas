const path = require("path");
require("dotenv").config();
const generateReport = require("../../model/generateReport");
const manpowerReport = require("../../model/manpower")
const moment = require("moment")


module.exports.GetgenerateReportByVendor = async (req, res) => {
  try {
    const generateData = await generateReport.find();
    console.log(generateData);
    if (!generateData || generateData.length == 0) {
      return res.status(400).json({ msg: "No report added" });
    }
    return res.status(200).json(generateData);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};


module.exports.generateAllReportByIdByVendor = async (req, res) => {
  try {
    const generateData = await generateReport.find({ vendorId: req.params.id });
    console.log(generateData);
    if (!generateData || generateData.length == 0) {
      return res.status(400).json({ msg: "No report added" });
    } else {
      return res.status(200).json(generateData);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};


module.exports.weeklyYearlyDataByVendor = async (req, res) => {
  try {
    const d = req.params.d;
    console.log(d);

    if (d == "weekly") {
      const data1 = await generateReport.aggregate([
        {
          $match: {
            createdAt: { $gt: new Date(new Date() - 7 * 60 * 60 * 24 * 1000) },
          },
        },
      ]);
     // console.log({ user: data1.length });

      return res.status(200).send({data:  data1.length });
    }


    if (d == "yearly") {
      const data2 = await generateReport.aggregate([
        {
          $match: {
            createdAt: {
              $gt: new Date(new Date() - 12 * 4 * 7 * 60 * 60 * 24 * 1000),
            },
          },
        },
      ]);
     // console.log({ user: data2.length });
     
      return res.status(200).send({ data:  data2.length });
    }

  } catch (err) {
    console.log(err);
  }
};
