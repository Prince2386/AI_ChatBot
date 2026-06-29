AI ChatBot 🤖
A full-stack, responsive AI-powered chatbot application built using the MERN stack (MongoDB, Express, React, Node.js) and integrated with the Google Gemini API.

🚀 Features
AI-Powered Responses: Utilizes Google Gemini's latest Flash models for fast, intelligent conversation.

Full-Stack Persistence: Chat history is saved and retrieved from a MongoDB cloud database.

Secure Authentication: Implements JWT-based security to ensure user data remains protected.

Modern Tech Stack: Built with a modular architecture for scalability and clean code maintenance.

🛠 Tech Stack
Frontend: React, Vite, CSS

Backend: Node.js, Express

Database: MongoDB Atlas

AI Integration: Google Generative AI SDK (@google/generative-ai)

Security: JWT (JSON Web Tokens), bcryptjs, Helmet, CORS

📦 Installation & Setup
Clone the repository:

Bash
git clone https://github.com/Prince2386/AI_ChatBot.git
cd AI_ChatBot
Configure Environment Variables:
Create a .env file in the backend folder and add:

Plaintext
PORT=4002
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_secret_key
Install dependencies and run:

Bash
# For backend
cd backend
npm install
npm run dev

# For frontend
cd ../frontend
npm install
npm run dev
🏗 Project Architecture
📝 License
This project is licensed under the ISC License.