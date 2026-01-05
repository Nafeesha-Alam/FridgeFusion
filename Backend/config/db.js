import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const uri = process.env.MONGO_URI;

const connectDB = async () => {
   if (!uri) {
      console.error("MONGO_URI is not defined in .env file");
      process.exit(1);
   }

   try {
     const conn = await mongoose.connect(uri);
     console.log(`Mongodb connected: ${conn.connection.host} `);
   } catch (error) {
     console.error(`Error: ${error.message} `);
     process.exit(1); 
   }
}

export default connectDB;