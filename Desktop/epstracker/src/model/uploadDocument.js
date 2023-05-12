const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const documentSchema = mongoose.Schema({
  vendorId: { type: objectId, ref: "vendorProfile" },
  status: { type: String },
  uploadIdProof: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
  },
  uploadAddressProof: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
  },
  uploadPoliceVerification: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
  },
});

const documentModel = mongoose.model("document", documentSchema);
module.exports = documentModel;
