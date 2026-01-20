import express from "express";
import {
  deleteUser,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/authController.js";

const router = express.Router();

//Register User route
router.post("/register", registerUser);

//Login User route
router.post("/login", loginUser);

//UPDATED USER
router.put("/:id", updateUser);

//DELETED USER
router.delete("/:id", deleteUser);

export default router;
