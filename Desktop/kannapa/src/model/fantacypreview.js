const mongoose = require('mongoose');
const objectid = mongoose.Schema.Types.ObjectId;
const fantacySchema = new mongoose.Schema({
 
  sportCategory: {
    type: objectid,
    ref:"typeOfSportt"   
  },
  titleName:{
    type:String,
    default:""
  },
  uploadBanner:{
    type:String,
    default:""
  },
  uploadFile:{
    type:String,
    default:""
  }
  
});

const fantacyModel = mongoose.model('fantacy', fantacySchema);

module.exports = fantacyModel


