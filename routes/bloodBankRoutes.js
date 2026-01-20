import express from "express";
import { protect } from "./../middleware/authMiddleware.js";
import {
  createBloodBank,
  deleteBloodBank,
  getBloodBanks,
  updateBloodBank,
} from "../controllers/bloodBankController.js";

const router = express.Router();

router.post("/", protect, createBloodBank);
router.get("/", getBloodBanks);

//Update
router.put("/:id", updateBloodBank);

//Delete
router.delete("/:id", deleteBloodBank);
export default router;
