const mongoose = require("mongoose");

const setSchema = new mongoose.Schema({
  name: {
    type: String
  },
  weight: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  rpe: {
    type: Number,
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

module.exports = mongoose.model("Set", setSchema);
