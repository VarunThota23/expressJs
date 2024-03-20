import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './db'; // Import the connectDB function
import dotenv from 'dotenv';
import authRoutes from './routes';

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
