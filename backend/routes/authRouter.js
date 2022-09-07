import express from "express";
import { register, login, deleteUser } from "../controllers/authController.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

// api/auth/register 
router.post("/register", register);

// api/auth/delete/<user_id>
router.delete("/delete/:id", verifyUser, deleteUser)

// api/auth/login
router.post("/login", login);


export default router
