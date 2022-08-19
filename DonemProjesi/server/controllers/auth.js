import User from "../Models/User.js";

export const signup = async (req, res) => {
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
    const status = err.status || 500;
    const message = err.message || "Kullanıcı eklenirken bir hata oluştu.";

    res.status(status).send({
      success: false,
      status,
      message,
    });
  }
};

export const signin = async(req, res) => {
    try {
        // Body'den Kullanici Bilgilerini Cek
        const user = req.body;
        console.log(`USER: `, user);
        // Veri Tabanindan bu kullanıcıyı bul
        const user_db = await User.findOne({
            email: user.email
        })

        // Kullanici yoksa
        if(user_db === null){
            return res.status(404).send({
                success: false,
                message: `Bu mail ile kayıtlı bir kullanıcı bulunmamaktadır.`,
              });
        }

        // Sifreyi Kontrol Et
        if(user_db.password != user.password){
            return res.status(403).send({
                success: false,
                message: `Kullanıcı adı veya şifre hatalı girildi.`,
              });
        }

        console.log(user_db);
    
        // Cevap Ver
        res.status(200).send({
          success: true,
          user,
          user_db
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
}


