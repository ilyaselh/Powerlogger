const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Exercise", exerciseSchema);
