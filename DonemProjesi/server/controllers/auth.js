import User from "../Models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  // YENI KULLANICI
  try {
    // Body'den Kullanici Bilgilerini Cek
    const user = req.body;
    user.password = await bcrypt.hash(user.password, 10);
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
    const status = err.status || 500;
    const message = err.message || "Kullanıcı eklenirken bir hata oluştu.";

    res.status(status).send({
      success: false,
      status,
      message,
    });
  }
};

export const signin = async (req, res) => {
  // GIRIS
  try {
    // Body'den Kullanici Bilgilerini Cek
    const user = req.body;
    console.log(`USER: `, user);
    // Veri Tabanindan bu kullanıcıyı bul
    const user_db = await User.findOne({
      email: user.email,
    });

    // Kullanici yoksa
    if (user_db === null) {
      return res.status(404).send({
        success: false,
        message: `Bu mail ile kayıtlı bir kullanıcı bulunmamaktadır.`,
      });
    }

    // Sifreyi Kontrol Et
    const sifreGecerliMi = await bcrypt.compare(user.password,user_db.password)

    if(!sifreGecerliMi){
      return res.status(403).send({
        success: false,
        message: `Kullanici adi veya şifre hatalı.`,
      });
    }

    // TOKEN OLUSTUR
    const accessToken = jwt.sign(
      {
        userID: user_db._id,
        email: user_db.email,
      },
      process.env.JWT_SECRET
    );

    // Header'a Ekle
    res.setHeader("autharization", `token ${accessToken}`);

    // Cookie Olarak Ekle
    res.cookie("autharization", `${accessToken}`);

    // Cevap Ver
    res.status(200).send({
      success: true,
      user,
      user_db,
      accessToken,
    });
  } catch (err) {
    const status = err.status || 500;
    const message = err.message || "Kullanıcı Giriş Yaparken bir hata oluştu.";

    res.status(status).send({
      success: false,
      status,
      message,
    });
  }
};

export const verify = async (req, res, next) => {
  try {
    // TOKEN VAR MI
    const accessToken = req.cookies.autharization;
    if (!accessToken) {
      return res.status(401).send({
        success: false,
        message: "Bu işlemi yapmak için giriş yapmalısınız!",
      });
    }

    // Token Gecerli Mi?
    jwt.verify(accessToken, process.env.JWT_SECRET, async (err, user) => {
      if (err) {
        return res.status(403).send({
          success: false,
          message: "Bu işlemi yapmanız yasak! Lütfen geçerli bir giriş yapın.",
        });
      }

      // TOKEN uzerinden Kullanici ID Al

      // Veri Tabanindan Bunu Cek
      const userDB = await User.findById(user.userID);
      console.log('USERDB: ',userDB);
      // Kullanıcı Var Mı
      if(!userDB){
        const status = 404;
        const message = "Kullanıcı  Bulunamadı.";
    
        return res.status(status).send({
          success: false,
          status,
          message,
        });
      }

      // USER'a Ekle
      req.user = userDB;

      // DEVAM
      next();
    });
  } catch (err) {
    const status = err.status || 500;
    const message = err.message || "Kullanıcı doğrulanırken bir hata oluştu.";

    res.status(status).send({
      success: false,
      status,
      message,
    });
  }
};
