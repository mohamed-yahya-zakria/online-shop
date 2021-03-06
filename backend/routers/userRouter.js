const express = require("express");
const asyncHandler = require("express-async-handler");
const data = require("../data");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const generateToken = require("../utils");

const userRouter = express.Router();
userRouter.get(
  "/seed",
  asyncHandler(async (req, res) => {
    await User.remove({});
    const createUsers = await User.insertMany(data.users);

    res.send({ createUsers });
  })
);

userRouter.post(
  "/signin",
  asyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    // Mansour
    /*  res.send(user);
    console.log('dfgdgfdgdfs',user) */

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password " });
  })
);

userRouter.post(
  "/register",
  asyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 7),
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  })
);
module.exports = userRouter;
