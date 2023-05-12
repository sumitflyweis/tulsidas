const path = require("path");
require("dotenv").config();

const generateReport = require("../../model/generateReport");
const manpowerReport = require("../../model/manpower")
const moment = require("moment")
module.exports.GetgenerateReportByAdmin = async (req, res) => {
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

module.exports.generateReportByIdByAdmin = async (req, res) => {
  try {
    const generateData = await generateReport.findById({ _id: req.params.id });
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


module.exports.generateAllReportByIdByAdmin = async (req, res) => {
  try {
    const generateData = await generateReport.find({ employeeId: req.params.id });
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

module.exports.ReportOfParticularManpowerByIdByAdmin = async (req, res) => {
  try {

    const manpower = await manpowerReport.findById({ _id: req.params.id });
    console.log(manpower._id)

    var momentDate1 = moment(req.body.dateIn,"hh:mm:ss")
      var momentDate2 = moment(req.body.dateOut,"hh:mm:ss")
      var hour1 = momentDate2.hours();
      var hour2 = momentDate1.hours();
      var b = Math.abs(hour1 - hour2)
      // var minutes = momentDate.minutes();
      // var seconds = momentDate.seconds();
      console.log(b/*, minutes, seconds*/)
      
      const data = {
            trade:manpower.post,
            EmployerName: manpower.name,
            In: momentDate1,
            Out: momentDate2,
            hours: b,
            PresentAbsent: req.body.PresentAbsent,
            vendorId:manpower.vendorId,
            employeeId:manpower._id,
             };
      
          const generatedata = await generateReport.create(data);
      
          console.log(generatedata);
          return res.status(200).json({
            id: generatedata._id,
            message: "generatedata created ",
            data: generatedata,
          });
    
  } catch (error) {
    console.log(error)
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};




exports.deleteGenerateReportByAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    await generateReport.deleteOne({ _id: id });
    res.status(200).send({ message: "report deleted " });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

module.exports.weeklyYearlyData = async (req, res) => {
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
