// backend/routes/chatbot.route.js
import express from 'express';
import { sendMessage } from '../controllers/chatbot.controllers.js';

const router = express.Router();

// The full path becomes /bot/v1/message
router.post('/message', sendMessage);

export default router;