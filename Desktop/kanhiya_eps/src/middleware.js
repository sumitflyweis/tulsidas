const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
//const SECRET = "demo@1234";

const customerModel = require("../src/model/customerAccount");
const commonLogin = require("../src/model/auth");


// =======================================================AUTHENTICATION==============================================

const authentication = (req, res, next) => {
  try {
    let token = req.headers["x-api-key"]
    console.log(token)
    if (!token)
      return res.status(401).send({ status: false, msg: "token is required" })
    jwt.verify(token, process.env.KEY, function (error, decoded) {
      if (error) {
        return res.status(401).send({ status: false, msg: error.message })
      } else {
        console.log(decoded.id)
        req.token = decoded
       // console.log( req.token._id)
        next()
      }
    })
  } catch (error) {
    res.status(500).send({ status: false, err: error.message });
  }
}

// ============================================AUTHORISATION===============================================================

//     const authorisation =async  function (req, res, next) {

//     try {
//         let decodedtoken=req.token
//         let userId = req.body.userId;

//      if (!mongoose.Types.ObjectId.isValid(userId))
//      { return res.status(400).send({ status: false, msg: "enter valid user id"}); }
//       let user = await customerModel.findById(userId);
//     if (!user) {
//       return res.status(404).send({ status: false, msg: "no such user exist" });
//     }
//         if (decodedtoken.userId != userId) {
//             return res.status(403).send({ status: false, msg: "you are not authorise" })
//         }

//         next()
//     }
//     catch (error) {
//         return res.status(500).send({ status: false, msg: error.message })

//     }

// }

// ======================================================AUTHORISATION BY BOOKID=======================================================

const authorisationbyBId = async function (req, res, next) {
  try {
    let id = req.params.id;
    let decodedtoken = req.token;
    console.log(decodedtoken)
    
   
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ status: false, message: "Invalid userId" });
    }

    let userData = await commonLogin.findById({ _id: id });
    console.log(userData);
    console.log(userData._id.toString());
   // console.log(decodedtoken.userId);
  console.log(decodedtoken.id);


    if (!userData) {
      return res
        .status(404)
        .send({ status: false, message: "No userexists with that id" });
    }

    if (decodedtoken.id !== userData._id.toString()) {
      return res
        .status(403)
        .send({ status: false, message: "You are not a authorized user" });
    }
    next();
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};

// ====================================================AUTHORISATION BY VENDOR==========================================================================


// const authorisationbyBId_VENDOR = async function (req, res, next) {
//   try {
//     let id = req.params.id;
//     let decodedtoken = req.token;
    
   
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).send({ status: false, message: "Invalid userId" });
//     }

//     let userData = await vendorModel.findById({ _id: id });
//     console.log(userData);
//     console.log(userData._id.toString());
//     console.log(decodedtoken.userId);

//     if (!userData) {
//       return res
//         .status(404)
//         .send({ status: false, message: "No userexists with that id" });
//     }

//     if (decodedtoken.userId !== userData._id.toString()) {
//       return res
//         .status(403)
//         .send({ status: false, message: "You are not a authorized user" });
//     }
//     next();
//   } catch (error) {
//     return res.status(500).send({ status: false, msg: error.message });
//   }
// };



//=========================================================================================
//exporting functions
module.exports = { authentication, /*authorisation,*/ authorisationbyBId,/*authorisationbyBId_VENDOR*/ };
