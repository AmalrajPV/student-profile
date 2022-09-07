import express from "express";
import { editProfile, sendRequest, showProfile, showProfiles } from "../controllers/studentController.js";
import { verifyUserOnly } from "../utils/verifyToken.js";


const router = express.Router();

// router.get("/search/:key");

// api/users/edit
router.put("/edit", verifyUserOnly, editProfile);

// api/users/show
router.get("/show", showProfiles);

// api/users/show/<user_id>
router.get("/show/:id", showProfile);

// api/users/send-request
router.post("/send-request", verifyUserOnly, sendRequest);


export default router
