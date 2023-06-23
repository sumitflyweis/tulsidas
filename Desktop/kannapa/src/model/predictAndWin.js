const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const predictSchema = mongoose.Schema(
  {
    question: {
      type: String,
      default:""
    },
    A:{
        type:String,
        default:""
    },
    B:{
        type:String,
        default:""
    },
    C:{
        type:String,
        default:""
    },
    D:{
        type:String,
        default:""
    },
    correctAnswer:{
      type:String,
      default:""
    },
    answer:{
      type:Boolean,
      default:false
    },
   user:{
    type:objectid,
    ref:"userProfile"
   },
   count:{
    type:Number,
    default:0
   },
   total:{
    type:Number,
    default:0
   },
   detailsOfUser:[]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("predict", predictSchema);
