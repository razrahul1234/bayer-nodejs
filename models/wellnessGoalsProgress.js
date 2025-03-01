const mongoose = require("mongoose");

const wellnessGoals = new mongoose.Schema({
 email:{
    type:String,
    required: true
 },
  stepsTaken: {
    type: String,
    trim: true,
  },
  hoursOfSleep: {
    type: String,
    trim: true,
  },
  diet: {
    type: String,
    trim: true,
  },
  therapy: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const wellnessGoalsModel = mongoose.model("wellnessgoals", wellnessGoals);

module.exports = wellnessGoalsModel;
