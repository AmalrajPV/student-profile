import user from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import profileModel from "../models/profileModel.js";
import mongoose from "mongoose";
const refreshTokens = [];

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new user({
      username: req.body.username,
      email: req.body.email,
      aadhar: req.body.aadhar,
      password: hash,
    });
    const profile = new profileModel({ user: newUser._id });
    await newUser.save();
    await profile.save();
    res.status(200).json("user created");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const USER = await user.findOne({ email: req.body.email });
    if (!USER) return res.status(404).json({ message: "user not found" });

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      USER.password
    );
    if (!isPasswordCorrect)
      return res.status(404).json({ message: "invalid username or password" });

    const access_token = jwt.sign(
      { id: USER._id, isAdmin: USER.isAdmin },
      process.env.SECRET,
      { expiresIn: "60s" }
    );
    const refresh_token = jwt.sign(
      { id: USER._id, isAdmin: USER.isAdmin },
      process.env.SECRET,
      { expiresIn: "7d" }
    );
    refreshTokens.push(refresh_token);

    // const { password, isAdmin, ...otherDetails} = USER._doc;
    // res.cookie("access_token", token, {
    //     httpOnly:true,
    // }).status(200).json({...otherDetails});
    res.status(200).json({ access_token, refresh_token });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const refresh = (req, res, next) => {
  const token = req.body.refresh_token;
  if (token == null) return res.status(400).json("no token found");
  if (!refreshTokens.includes(token))
    return res.status(400).json("invalid token");

  jwt.verify(token, process.env.SECRET, async (err, usr) => {
    if (err) return res.status(400).json({ message: "invalid token" });
    const USER = await user.findOne({ id: usr.id });

    const access_token = jwt.sign(
      { id: USER._id, isAdmin: USER.isAdmin },
      process.env.SECRET,
      { expiresIn: "60m" }
    );
    res.status(200).json({ access_token });
  });
};

export const deleteUser = async (req, res, next) => {
  try {
    await userModel.findOneAndDelete({ _id: req.params.id });
    await profileModel.findOneAndDelete({
      user: mongoose.Types.ObjectId(req.params.id),
    });
    return res.status(200).json("User deleted");
  } catch (error) {
    return res.status(400).json(error);
  }
};
