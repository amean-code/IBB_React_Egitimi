import User from "../Models/User.js";

export const userDelete = (req,res) => {

    // Kullanıcı Al
    const user = req.user;
    console.log("REQ USER: ",req.user);

    User.findByIdAndRemove(user.id, (err,docs) => {
        console.log(docs);
        if(err){
            return res.status(403).send({
                success : false,
                message : `Kullanıcı Silinirken Veri Tabanında Hata Oluştu.`,
                user : req.user
            })
        }

        res.status(200).send({
            success : true,
            message : `Kullanici Silindi.`,
            user : req.user
        })
    
        // Giris Yapan Kullaniciyi sil
        req.user = null;

    }) 
}