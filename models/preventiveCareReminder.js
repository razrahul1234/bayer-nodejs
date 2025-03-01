const mongoose = require("mongoose");

const preventiveCare = new mongoose.Schema({
    email:{
        type:String,
        required: true
     },
  upcoming: {
    type: String,
    trim: true,
  },
  date:{
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const preventiveCareModel = mongoose.model("preventivecare", preventiveCare);

module.exports = preventiveCareModel;