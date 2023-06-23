const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
  date: {
    type: String,
    default: ""
  },
  data: {
    type: String,
    default: ""
  },
  count: {
    type: Number,
    default: 0
  },
  userid: {
    type: Schema.Types.ObjectId,
    ref: "userProfile"
  },
  viewedUsers: {
    type: [Schema.Types.ObjectId],
    default: []
  },
  sportCategory:{
    type:Schema.Types.ObjectId,
    ref:"typeOfSportt"
  },
  title:{
    type:String,
    deafult:""
  },
  writterName:{
    type:String,
    default:""
  },
  uploadbanner:{
    type:String,
    default:""
  },
  uploadFile:{
    type:String,
    default:""
  },
  status:{
    type:String,
    default:"inactive"
  }
});

module.exports = mongoose.model('TrendingNews', newsSchema);
