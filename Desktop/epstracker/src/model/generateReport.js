const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const generateReportSchema = mongoose.Schema(
  {
    dateIn: { type: String },
    dateOut: { type: String },
    vendorId: { type: objectId, ref: "vendorProfile" },
    employeeId: { type: objectId, ref: "manpower" },
    trade: { type: String },
    EmployerName: { type: String },
    In: { type: String },
    Out: { type: String },
    hours: { type: String },
    PresentAbsent: { type: String },
  },
  { timestamps: true }
);
const generateReportModel = mongoose.model(
  "generateReport",
  generateReportSchema
);
module.exports = generateReportModel;
