import express from "express";
import { login, logout, signup } from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";

const router= express.Router();


router.post('/login',login);
router.post('/signup',signup);
router.post('/logout',auth,logout);


export default router;