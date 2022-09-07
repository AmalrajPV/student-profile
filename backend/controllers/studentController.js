import mongoose from "mongoose";
import profileModel from "../models/profileModel.js";
import verifyRequestsModel from "../models/verifyRequestsModel.js";


export const editProfile = async(req, res, next) =>{
    try {
        let updatedData = await profileModel.findOneAndUpdate({user: req.user.id}, {$set: req.body}, {new: true});
        return res.status(200).json(updatedData);
    } catch (error) {
        return res.status(400).json(error);
    }
}


export const showProfile = async (req, res, next) =>{
    try {
        let prof = await profileModel.findOne({user: req.params.id}).populate("user", "username email");
        if (prof) {
            return res.status(200).json(prof);
        } else {
            return res.status(400).json("not found");
        }
    } catch (error) {
        return res.status(400).json(error);
    }
}


export const showProfiles = async (req, res, next) =>{
    try {
        let prof = await profileModel.find({verified: true}).populate("user", "username email");
        if (prof) {
            return res.status(200).json(prof);
        } else {
            return res.status(400).json("not found");
        }
    } catch (error) {
        return res.status(400).json(error);
    }
}


export const sendRequest = (req, res, next)=>{
    try {
        const user = req.user.id;
        const vreq = new verifyRequestsModel({user, ...req.body});
        vreq.save();
        return res.status(200).json("request send");
    } catch (error) {
        return res.status(400).json(error);
    }
}