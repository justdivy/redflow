import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"; // Import instead of require
import bloodBankRoutes from "./routes/bloodBankRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import ambulanceRoutes from "./routes/ambulanceRoutes.js";
import userRoutes from "./routes/userRoutes.js"; 
import aiChatRoutes from "./routes/aiChat.js";
import bloodRequestRoutes from "./routes/bloodRequestRoutes.js";





// Configure environment variables
dotenv.config(); 

// Database connection
connectDB();

// Create an Express app
const app = express();

// Fetch OpenAI API key from environment variables
const openaiApiKey = process.env.OPENAI_API_KEY;  
 

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Root API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to RedFlow</h1>");
});

// RoutesA
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes); // Use the imported route
app.use("/api/bloodbanks", bloodBankRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/ambulances", ambulanceRoutes);
app.use("/api/ai-chat", aiChatRoutes);
app.use("/api/blood-requests", bloodRequestRoutes);

// Define PORT
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server is Running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
