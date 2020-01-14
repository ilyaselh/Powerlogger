const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");

const Tracker = require("../models/tracker");

router.get("/", verify, (req, res) => {
  Tracker.find({ user: req.headers.user })
    .then(item => res.json(item))
    .catch(err => res.json(`${err}, err from tracker get request`));
});

router.post("/add", verify, (req, res) => {
  const newTracker = new Tracker({
    date: req.body.date,
    value: req.body.value,
    user: req.body.user
  });

  newTracker
    .save()
    .then(() => {
      res.json(newTracker);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
