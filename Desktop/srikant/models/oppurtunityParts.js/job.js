const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const jobSchema = mongoose.Schema({
  data: {
    type: String,
  },
  });

module.exports = mongoose.model("job", jobSchema)
