import express from "express";
import { verify } from "../controllers/auth.js";
import { userDelete } from "../controllers/user.js";


const router = express.Router();

// Kullanıcı Silme İşlemi
router.delete("/delete",verify, userDelete);


export default router;
