const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");

const Exercise = require("../models/exercise");

router.get("/", verify, (req, res) => {
  Exercise.find({ user: req.headers.user })
    .then(item => res.json(item))
    .catch(err => res.json(`${err} error from get request`));
});

router.post("/add", verify, (req, res) => {
  const newExercise = new Exercise({
    name: req.body.name,
    date: req.body.date,
    user: req.body.user
  });

  newExercise
    .save()
    .then(() => {
      res.json(newExercise);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/delete/:id", verify, (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("exercise deleted");
    })
    .catch(err => console.log(err));
});

module.exports = router;
