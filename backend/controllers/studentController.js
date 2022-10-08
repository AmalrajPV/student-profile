import mongoose from "mongoose";
import profileModel from "../models/profileModel.js";
import verifyRequestsModel from "../models/verifyRequestsModel.js";


export const editProfile = async(req, res, next) =>{
    try {
        console.log("reached");
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


export const showMyProfile = async (req, res, next) =>{
    try {
        let prof = await profileModel.findOne({user: req.user.id}).populate("user", "username email");
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
        let prof = await profileModel.find({verified: true}).select("photo").populate("user", "username email");
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


export const searchUser = async(req, res, next) => {
    try {
        // const username = req.params.username;
        // const education = req.params.education;

        // const user = await profileModel.find({
        //     $or: [
        //     {
        //         username: username
        //     },
        //     {
        //         education: education
        //     }
        // ],
        // })
        console.log(req.query);
        let data = req.query;
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json(error);
    }
}




