import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Failed: ${error.message}`);
    process.exit(1);
  }
};
