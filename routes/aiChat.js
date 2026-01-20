import express from "express";
import axios from "axios"; // We will use axios to make HTTP requests
const router = express.Router();

// Define the endpoint for your AI chat
router.post("/chat", async (req, res) => {
  const { message } = req.body; // Message from the user

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const openaiApiKey = process.env.OPENAI_API_KEY; // Get API key from environment

  try {
    // Call the OpenAI API with the user's message
    const response = await axios.post(
      "https://api.openai.com/v1/completions", 
      {
        model: "text-davinci-003", // Use your desired model
        prompt: message, // Send the user's message as a prompt
        max_tokens: 150, // Adjust token limit based on your needs
      },
      {
        headers: {
          "Authorization": `Bearer ${openaiApiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Return the AI's response
    const aiResponse = response.data.choices[0].text.trim();
    res.json({ response: aiResponse });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: "Error communicating with OpenAI API" });
  }
});

export default router;
