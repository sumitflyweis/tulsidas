const bookings = require("../../models/booking");
const institute = require("../../models/institutes_model");
const student = require("../../models/student_models");
const library = require("../../models/library");


module.exports.BookingOfBook = async (req, res) => {
  try {
    const studentData = await bookings.findOne({
      studentId: req.body.studentId,
    });
    if (!studentData || studentData.length == 0)
      return res.status(400).send({ msg: "no student found" });

    console.log(studentData._id);
    console.log(studentData.Status);

    if (studentData.Status == "success") {
      const bookingO = {
        bookName: req.body.bookName,
        bookImage: req.body.bookImage,
        price: req.body.price,
        available: req.body.available,
        date: req.body.date,
        booking: req.body.booking,
        studentId: req.body.studentId,
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
    const studentData = await bookings.findOne({
      studentId: req.body.studentId,
    });
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



exports.getAllBooks = async (req, res) => {
  try {
    const books = await library.find();
    res.json({msg:books});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await library.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBookById = async (req, res) => {
  try {
    const book = await library.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteBookById = async (req, res) => {
  try {
    const book = await library.findByIdAndRemove(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};









// const model = require('./model'); // Import the model

// // Get all items
// exports.getAllItems = async (req, res) => {
//   try {
//     const items = await model.find();
//     return res.status(200).json(items);
//   } catch (error) {
//     return res.status(500).json({ msg: error.message, name: error.name });
//   }
// };

// // Get item by ID
// exports.getItemById = async (req, res) => {
//   try {
//     const item = await model.findById(req.params.id);
//     if (!item) {
//       return res.status(404).json({ msg: 'Item not found' });
//     }
//     return res.status(200).json(item);
//   } catch (error) {
//     return res.status(500).json({ msg: error.message, name: error.name });
//   }
// };

// // Update item
// exports.updateItem = async (req, res) => {
//   try {
//     const updatedItem = await model.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedItem) {
//       return res.status(404).json({ msg: 'Item not found' });
//     }
//     return res.status(200).json(updatedItem);
//   } catch (error) {
//     return res.status(500).json({ msg: error.message, name: error.name });
//   }
// };

// // Delete item
// exports.deleteItem = async (req, res) => {
//   try {
//     const deletedItem = await model.findByIdAndDelete(req.params.id);
//     if (!deletedItem) {
//       return res.status(404).json({ msg: 'Item not found' });
//     }
//     return res.status(200).json({ msg: 'Item deleted successfully' });
//   } catch (error) {
//     return res.status(500).json({ msg: error.message, name: error.name });
//   }
// };
