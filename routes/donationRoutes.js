import express from "express";

import {
  createRequest,
  deleteRequest,
  getRequests,
  updateRequest,
  updateRequestStatus,
} from "../controllers/donationController.js";
import { authorizeRoles, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("donor", "admin", "patient"), createRequest);
router.get("/", getRequests);
router.put("/:id/status", updateRequestStatus);


//Update
router.put("/:id", updateRequest)

//Delete
router.delete("/:id", deleteRequest)

export default router;
