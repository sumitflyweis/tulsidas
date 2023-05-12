const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const eventSchema = mongoose.Schema({

  ScheduledDate: {
    type: String,
  },
  data:[{
    type:String
  }]
 


});

module.exports = mongoose.model("events", eventSchema);
