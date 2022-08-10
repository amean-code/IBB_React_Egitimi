import Express  from 'express';
import  Kullanici, { testKullaniciArr } from './models/Kullanici.js';

var app = Express();

// CONST
const PORT = process.env.PORT || 3001;
const TEST_KULLANICI_ARR = testKullaniciArr;

// GET
app.get("/", (req,res) => {
    res.send("Kullanıcı API Çalışıyor!")
}) 

app.get("/kullanici/hepsi", (req,res) => {

    res.send(TEST_KULLANICI_ARR);
    
}) 

app.get("/kullanici/rol/:rol", (req,res) => {
    
    let secilenRol = req.params.rol;

    let secilenKullanici = TEST_KULLANICI_ARR.find((kullanici) => {
        return kullanici.rol === secilenRol;
    });

    res.send(secilenKullanici);

}) 

app.get("/kullanici/id/:kullanici_id", (req,res) => {

    let secilenKullaniciID = req.params.kullanici_id;

    let secilenKullanici = TEST_KULLANICI_ARR.find((kullanici) => {
        return kullanici.id == secilenKullaniciID;
    });

    res.send(secilenKullanici);
}) 



// POST



// Listen Port
app.listen(PORT, () => {
    console.log(`Port ${PORT} dinleniyor...`);
})
