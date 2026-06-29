// backend/app.js
import express from 'express';
import cors from 'cors';
import chatbotRoutes from './routes/chatbot.route.js';

const app = express();

// Crucial: Match this with your Vite Frontend port (usually 5173)
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true
}));

app.use(express.json());

// Routes - This will make the full path: /bot/v1/message
app.use("/bot/v1", chatbotRoutes); 

export default app;