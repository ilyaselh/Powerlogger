const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  user: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Tracker", trackerSchema);
