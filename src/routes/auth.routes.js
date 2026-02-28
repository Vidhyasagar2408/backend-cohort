const express = require("express");
const userModel = require("../models/user.models");
const jsonWebToken = require("jsonwebtoken");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User already exists with this email address",
    });
  }

  const user = await userModel.create({
    name,
    email,
    password,
  });

  const token = jsonWebToken.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRETE,
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user created successfully",
    user,
    token,
  });
});

authRouter.post("/protected", (req, res) => {
  console.log(req.cookies);

  res.status(200).json({
    message: "this is a protected route",
  });
});

module.exports = authRouter;
