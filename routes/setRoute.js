const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");

const Set = require("../models/set");

router.get("/", verify, (req, res) => {
  Set.find({ user: req.headers.user })
    .then(item => res.json(item))
    .catch(err => res.json(err));
});

router.post("/add", verify, (req, res) => {
  const newSet = new Set({
    name: req.body.name,
    weight: req.body.weight,
    reps: req.body.reps,
    rpe: req.body.rpe,
    date: req.body.date,
    user: req.body.user
  });

  newSet
    .save()
    .then(() => {
      res.json(newSet);
    })
    .catch(err => res.json(err));
});

router.post("/update/:id", verify, (req, res) => {
  Set.findById(req.params.id)
    .then(set => {
      set.weight = req.body.weight;
      set.reps = req.body.reps;
      set.rpe = req.body.rpe;
      set.date = req.body.date;

      set
        .save()
        .then(() => {
          res.json(set);
        })
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
});

//delete a set by id
router.delete("/delete/:id", verify, (req, res) => {
  Set.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("set deleted");
    })
    .catch(err => console.log(err));
});

//delete all sets of an exercise
router.delete("/deleteAll/:name", (req, res) => {
  Set.deleteMany({ name: req.params.name }, err => {
    console.log(err);
  });
});
module.exports = router;
