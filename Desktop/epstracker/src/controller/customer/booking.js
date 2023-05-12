const bookings = require("../../model/booking");
const user = require("../../model/customerAccount");
const vendor = require("../../model/vendorAccount");

module.exports.bookingOfcategory = async (req, res) => {
  try {
    const booking = {
      userId: req.params.userId,
      vendorId: req.params.vendorId,
    };
    const data1 = await user.findById({ _id: booking.userId });
    console.log(data1);

    if (!data1 || data1.length == 0) {
      return res.status(400).json({ msg: "No user Found " });
    } else {
      const data2 = await vendor.findById({ _id: booking.vendorId });
      if (!data2 || data2.length == 0) {
        return res.status(400).json({ msg: "No vendor Found " });
      } else {
        const bookingO = {
          userId: data1._id,
          user: data1,
          vendorId: data2._id,
          vendor: data2,
          Time: req.body.Time,
          Status: req.body.Status,
          amount: parseInt(req.body.amount),
          payment: req.body.payment,
        };

        const book = await bookings.create(bookingO);
        console.log(book);
        return res.status(200).json(book);
      }
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};
