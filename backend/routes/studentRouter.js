import express from "express";
import { editProfile, searchUser, sendRequest, showMyProfile, showProfile, showProfiles } from "../controllers/studentController.js";
import { verifyToken, verifyUserOnly } from "../utils/verifyToken.js";


const router = express.Router();

// router.get("/search/:key");

// api/users/edit
router.put("/edit", verifyUserOnly, editProfile);

// api/users/show
router.get("/show", showProfiles);

// search 
router.get("/search", searchUser);

router.get("/myprofile",verifyToken, showMyProfile);

// api/users/show/<user_id>
router.get("/show/:id", showProfile);

// api/users/send-request
router.post("/send-request", verifyUserOnly, sendRequest);


export default router
