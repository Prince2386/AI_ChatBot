import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import chatbotRoutes from './routes/chatbot.route.js'
import cors from 'cors'

const app = express();
dotenv.config()

const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors())

// database connection code
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("connected to mongodb")
}).catch((error) => {
    console.log("Error connecting to mongodb",error);
})

// Define routes
app.use("/bot/v1/",chatbotRoutes)


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(process.env.GEMINI_API_KEY);
});