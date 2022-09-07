import express from "express";
import { acceptRequest, showRequests } from "../controllers/adminController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

// api/admin/requests
router.get("/requests", verifyAdmin, showRequests);

// api/admin/request-accept/<user_id>
router.get("/request-accept/:id", verifyAdmin, acceptRequest);


export default router;
