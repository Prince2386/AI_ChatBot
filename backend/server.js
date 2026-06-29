// 1. Load environment variables immediately
import 'dotenv/config'; 
import app from './app.js';
import connectDB from './config/db.js';

// 3. Establish Database Connection
connectDB();

// 4. Start Server
const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`Server listening on port ${PORT}`);
});

