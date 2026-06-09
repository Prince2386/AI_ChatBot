import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";
import { GoogleGenAI } from "@google/genai";

export const Message = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text?.trim()) {
            return res.status(400).json({
                error: "Text cannot be empty",
            });
        }

        // Initialize Gemini AFTER .env has loaded
        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
        });

        const user = await User.create({
            sender: "user",
            text,
        });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: text,
        });

        const botReply = response.text;

        const bot = await Bot.create({
            text: botReply,
        });

        return res.status(200).json({
            userMessage: user.text,
            botMessage: bot.text,
        });

    } catch (error) {
        console.error("Error in Message Controller:", error);

        return res.status(500).json({
            error: error.message || "Internal Server Error",
        });
    }
};