
// Express Import
var express = require("express");
var app = express();
var port = 3001

var kullanicilar = [
    {
        id: 1,
        isim: "admin",
        kullanici_adi: "admin",
        sifre: "123",
        rol: "admin"
    },
    {
        id: 2,
        isim: "test",
        kullanici_adi: "test",
        sifre: "123",
        rol: "test"
    },
    {
        id: 3,
        isim: "guest",
        kullanici_adi: "guest",
        sifre: "312",
        rol: "guest"
    },
];

// Handling Get Request
app.get("/", (req , res) => {
    res.send("AMEAN Danışmanlık - IBB React Eğitimi")
})

// Kullanici API
app.get("/kullanici/:kullanici_id", (req , res) => {

    // parametre olarak kullanici id al 
    var kullanici_id = req.params.kullanici_id;
    // test log
    // console.log("GELEN KULLANICI ID: ", kullanici_id)

    // kullanici idye sahip olan kullaniciyi bul
    var currentKullanici = kullanicilar.filter((kul) => {
        return kul.id == kullanici_id 
    });
    // test log
    console.log("GELEN KULLANICI: ", currentKullanici)

    // response olarak gonder
    if(currentKullanici.length == 0){
        // kullanici yok
        res.send(`${kullanici_id} ID numarasına sahip bir kullanıcı bulunamadı !!`)
        return;
    }else{
        // kullanici var
        res.send(currentKullanici[0])
    }
         
})

// App Listen - Port
app.listen(port, () => {
    console.log(`${port} Portu Dinleniyor`);
})
