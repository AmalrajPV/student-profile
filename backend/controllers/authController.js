import user from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/errors.js";
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js";
import profileModel from "../models/profileModel.js";
import mongoose from "mongoose";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new user({
      username: req.body.username,
      email: req.body.email,
      aadhar:req.body.aadhar,
      password: hash,
    });
    const profile = new profileModel({user: newUser._id});
    await newUser.save();
    await profile.save();
    res.status(200).json("user created");
  } catch (error) {
    next(error);
  }
};


export const login = async (req, res, next) => {
  try {
    const USER = await user.findOne({username:req.body.username});
    if(!USER)return next(createError(404, "user not found !"));
    
    const isPasswordCorrect = await bcrypt.compare(req.body.password, USER.password);
    if (!isPasswordCorrect) return next(createError(404, "user not found !"));

    const token = jwt.sign({id:USER._id, isAdmin: USER.isAdmin}, process.env.SECRET);

    const { password, isAdmin, ...otherDetails} = USER._doc;
    res.cookie("access_token", token, {
        httpOnly:true,
    }).status(200).json({...otherDetails});
  } catch (error) {
    next(error);
  }
};


export const deleteUser = async(req, res, next) =>{
  try {
    await userModel.findOneAndDelete({_id: req.params.id});
    await profileModel.findOneAndDelete({user: mongoose.Types.ObjectId(req.params.id)})
    return res.status(200).json("User deleted");
  } catch (error) {
    return res.status(400).json(error);
  }
}
