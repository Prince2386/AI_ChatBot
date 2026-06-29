import { GoogleGenerativeAI } from "@google/generative-ai";
import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

// 1. Initialize the stable SDK
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export const sendMessage = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text?.trim()) {
            return res.status(400).json({ error: "Text cannot be empty" });
        }

        // 2. Generate content
        const result = await model.generateContent(text);
        const botReply = result.response.text();

        // 3. Save to database
        const userMessage = await User.create({ sender: "user", text });
        const botMessage = await Bot.create({ text: botReply });

        return res.status(200).json({
            userMessage: userMessage.text,
            botMessage: botMessage.text,
        });
    } catch (error) {
        console.error("SDK Error:", error);
        return res.status(500).json({ error: error.message });
    }
};


