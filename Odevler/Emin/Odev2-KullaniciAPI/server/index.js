const express = require('express');
var app = express();

// CONST
const PORT = process.env.PORT || 3001;

// GET
app.get("/", (req,res) => {
    res.send("Kullanıcı API Çalışıyor!")
}) 

app.get("/kullanici/hepsi", (req,res) => {
    
}) 

app.get("/kullanici/:kullanici_id", (req,res) => {
    
}) 

app.get("/kullanici/:rol", (req,res) => {
    
}) 

// POST



// Listen Port
app.listen(PORT, () => {
    console.log(`Port ${PORT} dinleniyor...`);
})
