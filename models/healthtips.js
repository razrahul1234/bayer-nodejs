const mongoose = require("mongoose");

const healthTips = new mongoose.Schema({
    email:{
        type:String,
        required: true
     },
  healthTips: [String]
});

const healthTipsModel = mongoose.model("healthtips", healthTips);

module.exports = healthTipsModel;
