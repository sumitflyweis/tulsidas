const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const examSchema = mongoose.Schema({
  important_Questions: {
    type: [Object],
    default: [
      {
        variable:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      },
    ],
  },

  previous_papers: {
    type: [Object],
    default: [
      {
        variable:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      },
    ],
  },

  examSchedule: {
    type: String,
  },
  date: {
    type: String,
  },
  viewResults:{
    type:[objectId],
    ref:"result"
},
student_enquiry:{
    type:[objectId],
    ref:"student"
},
revision:{
    type:[objectId],
    ref:"revision"
}

});

module.exports = mongoose.model("examSchema", examSchema);
