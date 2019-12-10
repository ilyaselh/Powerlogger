const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.post("/signup", async (req, res) => {
  //validate data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if user already exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("email exists");

  //encrypt the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.send(err);
  }
});

router.post("/login", async (req, res) => {
  //validate data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if eamil exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.send("wrong");

  //check password
  const valisPassword = await bcrypt.compare(req.body.password, user.password);
  if (!valisPassword) return res.send("wrong");

  //asign web token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_ACCESS);
  res.header("authtoken", token).send(token);
});
module.exports = router;
