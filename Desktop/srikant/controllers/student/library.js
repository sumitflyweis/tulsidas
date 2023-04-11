const bookings = require("../../models/booking");
const institute = require("../../models/institutes_model");
const student = require("../../models/student_models");
const library = require("../../models/library");

module.exports.BookingOfBook = async (req, res) => {
  try {
    const studentData = await bookings.findOne({ studentId: req.body.studentId });
    if (!studentData || studentData.length == 0)
      return res.status(400).send({ msg: "no student found" });

    console.log(studentData._id);
    console.log(studentData.Status);

    if (studentData.Status == "success") {
      const bookingO = {
        bookName: req.body.bookName,
        available: req.body.available,
        date: req.body.date,
        booking: req.body.booking,
      };
      console.log(bookingO);

      const libraryData = await library.create(bookingO);
      return res.status(200).json(libraryData);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};



module.exports.StudyZone = async (req, res) => {
  try {
    const studentData = await bookings.findOne({ studentId: req.body.studentId });
    if (!studentData || studentData.length == 0)
      return res.status(400).send({ msg: "no student found" });

    console.log(studentData._id);
    console.log(studentData.Status);

    if (studentData.Status == "success") {
      const bookingO = {
        bookName: req.body.bookName,
        available: req.body.available,
        date: req.body.date,
        booking: req.body.booking,
      };
      console.log(bookingO);

      const libraryData = await library.create(bookingO);
      return res.status(200).json(libraryData);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};