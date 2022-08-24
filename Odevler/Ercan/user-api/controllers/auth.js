const jwt = require("jsonwebtoken")

const login = async (req,res,next) => {

    // BODY Uzerinden Kullanici Al
    const user = req.body
    console.log(`Kullanici: `,user);

    // Kullanici yoksa hata ver
    if(!user.username || !user.sifre) return res.status(402).send({ succsess: false, message: "Kullanıcı bilgileri alınamadı!"})

    // Sifre Kontrol Et
    if(user.sifre !== "123456") return res.status(401).send({ succsess: false, message: "Kullanıcı adı veya şifre yanlış!"})

    // JWT Token Olustur ve gonder
    const accessToken = await  jwt.sign({username: user.username},"AMEANIBB");

    res.cookie(`autharize ${accessToken}`).status(200).send({
        succsess: true,
        accessToken: accessToken
    })
}


module.exports = {login}