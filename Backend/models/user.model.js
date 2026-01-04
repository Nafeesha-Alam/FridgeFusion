import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { 
        type: String, 
        required: true, 
        enum: ['male', 'female', 'other'],
        lowercase: true 
    },

    dietaryPreference: {
        type: String,
        required: true,
        enum: ['veg', 'non-veg', 'vegan', 'paleo', 'keto'],
        default: 'non-veg'
    },
    allergies: [{ type: String }], 
    
  
    inventory: [String], 
    chatHistory: [{
        prompt: String,
        response: String,
        createdAt: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;