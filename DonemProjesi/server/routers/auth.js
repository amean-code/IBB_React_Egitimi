import express from "express";
import User from "../Models/User.js";

const router = express.Router();

// Yeni Kullanici Kaydi
router.post("/signup", async (req, res) => {
  try {
    // Body'den Kullanici Bilgilerini Cek
    const user = req.body;
    console.log(`USER: `, user);
    // Veri Tabanina Ekle
    const newUser = new User(user);

    await newUser.save();

    // Cevap Ver
    res.status(200).send({
      success: true,
      user,
    });
  } catch (err) {

    const status = err.status || 500
    const message = err.message || "Kullanıcı eklenirken bir hata oluştu."

    res.status(status).send({
        success: false,
        status,
        message
    })
  }
});

// Giris

export default router;
