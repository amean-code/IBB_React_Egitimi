

// Express Dahil et ve Calistir
const express = require('express')
const app = express()
const port = 3014

function haritaGetir() {
    return (`
    <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Marmara%20Forum+(IBB%20Ek%20Hizmet%20Binas%C4%B1)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe></div>`)
}

// GET REQUEST
app.get('/', (req, res) => {
  res.send('<h1> Anasayfa </h1>');
})

app.get('/harita', (req, res) => {
    res.send(haritaGetir());
  })

app.get('/kullanici', (req, res) => {

    const kullanici1 = {
        kullaniciID: 1,
        kullaniciadi: "amean",
        sifre: "ibbreact",
        girisYap: function (kullaniciadi,sifre) {
            if(kullaniciadi == kullanici.kullaniciadi && sifre == kullanici.sifre){
                console.log("Giris Basarili!");
                return;
            }
            console.log("Giris Basarisiz! Tekrar Deneyin!");
        },
        kendiniTanit: () => {
            console.log(`
                ID: ${kullanici.kullaniciID}
                Kullanici Adi: ${kullanici.kullaniciadi}
            `);
        }
    }

    res.send(kullanici1)
})

// SERVER DINLEME
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})