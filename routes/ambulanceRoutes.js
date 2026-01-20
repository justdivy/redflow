import express from "express";
import {
  createAmbulance,
  deleteAmbulance,
  getAvailableAmbulances,
  updateAmbulance,
  updateAvailability,
} from "../controllers/ambulanceController.js";
import { authorizeRoles, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", createAmbulance);
router.get("/", getAvailableAmbulances);
router.put(
  "/:id/availability",
  protect,
  authorizeRoles("admin"),
  updateAvailability
);

//Update
router.put("/:id", updateAmbulance);

//Delete
router.delete("/:id", deleteAmbulance);

export default router;
