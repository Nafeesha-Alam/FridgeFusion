import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoute from './routes/user.route.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your actual Frontend URL
    credentials: true                // Allows cookies to be sent back and forth
}));       
app.use(express.json());  


app.use('/api/users', userRoute); 

app.get('/', (req, res) => {
    res.send("FridgeFusion API is running... 🚀");
});

app.listen(PORT, () => {
    console.log(`Backend server is started at ${PORT}`);
});