import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    try {
        const { name, email, password, age, gender, dietaryPreference, allergies } = req.body;

        if (!name || !email || !password || !age || !gender || !dietaryPreference) {
            return res.status(400).json({ success: false, message: "Required fields missing." });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User exists." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name, email, password: hashedPassword, age, gender, dietaryPreference, allergies
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        return res.status(201)
            .cookie('token', token, {
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000 
            })
            .json({
                success: true,
                message: "User created!",
                user: { id: user._id, name: user.name, email: user.email }
            });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Enter email and password." });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Wrong password." });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        return res.status(200)
            .cookie('token', token, {
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            .json({
                success: true,
                message: `Welcome ${user.name}`,
                user: { id: user._id, name: user.name, email: user.email }
            });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const logout = (req, res) => {
    return res.status(200)
        .cookie('token', '', { maxAge: 0 })
        .json({ success: true, message: "Logged out" });
};