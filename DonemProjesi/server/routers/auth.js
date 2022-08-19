import express from "express";
import {signup, signin} from "../controllers/auth.js"

const router = express.Router();

// Yeni Kullanici Kaydi
router.post("/signup", signup);

// Giris
// Yeni Kullanici Kaydi
router.post("/signin", signin);

export default router;
