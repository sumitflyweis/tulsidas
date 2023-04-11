const bookings = require("../../models/booking");
const institute = require("../../models/institutes_model");
const student = require("../../models/student_models");

module.exports.bookingOfStudent = async (req, res) => {
  try {
    const studentData = await student.findById({ _id: req.body.studentId });
    if (!studentData || studentData.length == 0)
      return res.status(400).send({ msg: "no student found" });

    console.log(studentData._id);

    const insituteData = await institute.findById({
      _id: req.body.InstituteId,
    });
    if (!insituteData || insituteData.length == 0)
      return res.status(400).send({ msg: "no institute found" });

    console.log(insituteData._id);

    const bookingO = {
      studentId: studentData._id,
      studentobject: studentData,
      InstituteId: insituteData._id,
      insttuteobject: insituteData,
      amount: parseInt(req.body.amount),
      payment: req.body.payment,
    };
    console.log(bookingO);

    const bookingData = await bookings.create(bookingO);
    return res.status(200).json(bookingData);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

// module.exports.getbookingsbycustomer = async(req,res)=>{
//   try {

//      const bookingData = await bookings.find()
//      console.log(bookingData)
//       if(!bookingData || bookingData.length==0 ){
//           return res.status(400).json({msg:"No bookingData added"})
//       }else{
//           return res.status(200).json(bookingData)
//       }
//   } catch (error) {
//       return res.status(400).json({msg:error.message, name:error.name})
//   }
// }
