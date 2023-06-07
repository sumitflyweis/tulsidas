const mongoose = require("mongoose");

const sellerSchema = mongoose.Schema({
  phone: { type: String, require: false },
  firstname: {
    type: String,
    default: "",
  },
  middleName:{
    type:String,
    default:""
  },
  lastname: {
    type: String,
    default: "",
  },
  //   age: {
  //     type: String,
  //   },
  address: {
    type: String,
    default: "",
  },
  //   language: {
  //     type: String,
  //     default:""
  //   },
  //   location: {
  //     type: String,
  //     default:""
  //   },

  country:{
    type:String,
    default:""
  },
  state:{
    type:String,
    default:""
  },
  district:{
    type:String,
    default:""
  },
  pincode:{
    type:String,
    default:""
  },

  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  RePassword: {
    type: String,
    default: "",
  },
  wantToSell: {
    type: String,
   // enum: ["<1week", "<1month", "<2month", "<3month", ">3month"],
    default: "",
  },
  sellingYourHome: {
    type: String,
    // enum: [
    //   "upgrading my home",
    //   "selling secondary home",
    //   "relocating",
    //   "down sizing my home",
    //   "retiring",
    //   "other",
    // ],
    default: "",
  },
  area: {
    type: String,
    default: 0,
  },
  yearBuild: {
    type: String,
    default: "",
  },
  lotSize: {
    type: String,
    default: "",
  },
  finishedSquareft: {
    type: String,
    default: "",
  },
  bedrooms: {
    type: String,
    default: "",
  },
  fullbath: {
    type: String,
    default: "",
  },
  halfBath: {
    type: String,
    default: "",
  },
  appliances: {
    type: String,
    // enum: [
    //   "upgrading my home",
    //   "garbage disposal",
    //   "Refrigerator",
    //   "Microwave",
    //   "Dryer",
    //   "Trash Comactor",
    //   "Freezer",
    //   "Range Oven",
    //   "Wahser",
    // ],
    default: "",
  },
  floors: {
    type: String,
    // enum: [
    //   "carpet",
    //   "Laminatte",
    //   "softwood",
    //   "concrete",
    //   "Linoleum-Vintl",
    //   "tile",
    //   "hard wood",
    //   "slate",
    //   "other",
    // ],
    default: "",
  },
  others:{
    type:String,
    default:""
  },
  parking:{
    type:String,
    default:""
  },
  rooms:{
    type:String,
    default:""
  },
  views:{
    type:String,
    default:""
  },
  anyImprovement:{
    type:String,
    default:""
  },
  listingPrice:{
    type:Number,
    default:0
  },
  descriptionOfYourHome:{
    type:String,
    default:""
  },
  uploadPhoto:{
    type:String,
    default:""
  },
  uploadVedio:[{
    type:String,
    default:""
  }],
  willingToWorkWithTheBuyerAgent:{
    type:String,
    default:""
  },
  percentageOfAgent:{
    type:String,
    default:""
  },
  BuyerCreditOrRefund:{
    type:String,
    default:""
  },
  percentageOfBuyerCredit:{
    type:String,
    default:""
  },
  startDate:{
    type:String,
    default:""
  },
  endDate:{
    type:String,
    default:""
  },
  time:{
    type:String,
    default:""
  },
  preApprovalLetter:{
    type:String,
    default:""
  },
  proofOfFunds:{
    type:String,
    default:""
  },
  OfferAcceptNegotiate:{
    type:String,
    default:""
  },
  otp:{
    type:String,
    default:""
  },
  ////////////////////////////////////////////
  estimatedMarketValue:{
    type:String,
    default:""
  },
  closingTime:{
    type:String,
    default:""
  }



});

const sellerModel = mongoose.model("sellerProfile", sellerSchema);

module.exports = sellerModel;



