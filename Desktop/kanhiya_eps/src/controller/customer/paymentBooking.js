const razerpay = require("razorpay");
const crypto = require("crypto");
const uuid = require("uuid");
const id = uuid.v4();
const payment = require("../../model/paymentBooking");
const booking = require("../../model/booking");
const userSchema = require("../../model/customerAccount");
const vendorSchema =  require("../../model/vendorAccount")
const Wallet = require("../../model/wallet");

const Razorpay = new razerpay({
  key_id: "rzp_live_xhEiJ4uMcMKT1r",
  key_secret: "JSwRiz3kcqggnJSTohP1pJPy",
});

exports.CreatePaymentOrderofBooking = async (req, res) => {
  try {
    const bookingData = await booking.findById({ _id: req.params.id });

    if (!bookingData || bookingData.length == 0) {
      return res.status(500).json({
        message: "No Booking  is their",
      });
    }

    console.log(bookingData.amount);
    console.log(bookingData.userId);
    console.log(bookingData.vendorId)

    const userdata = await userSchema.findById({ _id: bookingData.userId });
   
    if (!userdata || userdata.length == 0) {
      return res.status(500).json({
        message: "No userdata  is their",
      });
    }
    console.log(userdata.wallet);

    const vendordata = await vendorSchema.findById({ _id: bookingData.vendorId });
    if (!vendordata || vendordata.length == 0) {
        return res.status(500).json({
          message: "No vendordata  is their",
        });
      }
      console.log(vendordata);

      const walletdata = await Wallet.find({ user:bookingData.userId });
      if (!walletdata || walletdata.length == 0) {
        return res.status(500).json({
          message: "No walletdata  is their",
        });
      }
      console.log(walletdata[0].balance);
  
    if(parseInt(bookingData.amount) < parseInt(walletdata.balance)){
        walletdata.balance = parseInt(walletdata.balance) - parseInt(bookingData.amount)
        await walletdata.save();  

        userdata.wallet = parseInt(walletdata.balance)
      await userdata.save();

     const DBData = {
      
        invoice: "123",
        amount: bookingData.amount,
        currency: "INR",
        receipt: id,
        partial_payment: false,
        user: userdata._id.toString(),
        userName: userdata.name,
        vendor: vendordata._id.toString(),
        vendorName: vendordata.name,
        status: req.body.status,
      };
      console.log(DBData);
      const AmountData = await payment.create(DBData);
  
      // const AmountData = await payment.create(data1);
      bookingData.Status = "success";
      //  bookingData.amount = bookingData.userobject.wallet;
      await bookingData.save();
      return res.status(200).json({
        details: AmountData,
      });
    }else{
      
        const DBData = {
      
            invoice: "123",
            amount: bookingData.amount,
            currency: "INR",
            receipt: id,
            partial_payment: false,
            user: userdata._id.toString(),
            userName: userdata.name,
            vendor: vendordata._id.toString(),
            vendorName: vendordata.name,
            status: req.body.status,
          };
      console.log(DBData);
      const AmountData = await payment.create(DBData);
  
      // const AmountData = await payment.create(data1);
      bookingData.Status = "success";
      //  bookingData.amount = bookingData.userobject.wallet;
      await bookingData.save();
      return res.status(200).json({
        details: AmountData,
      });
    }


  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
