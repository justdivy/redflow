import express from "express";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";
import { createBloodRequest } from "../controllers/bloodRequestController.js";

const router = express.Router();

// 🩸 Patient creates blood request
router.post(
  "/",
  protect,
  authorizeRoles("patient"),
  createBloodRequest
);

export default router;
