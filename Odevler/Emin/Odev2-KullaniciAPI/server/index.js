import Express from "express";
import DotENV from "dotenv";
import MySQL from "mysql";
import Kullanici, { testKullaniciArr } from "./models/Kullanici.js";

DotENV.config();

var app = Express();

// CONST
const PORT = process.env.PORT || 3011;
const TEST_KULLANICI_ARR = testKullaniciArr;
const db_config = {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQP_DATABASE || "ibbTest",
}

console.log("DATABASE CONF: ",db_config);
var db = MySQL.createConnection(db_config);

// DB Connection
db.connect();
console.log('Bağlantı Yapıldı !! - ',db.status);

// GET
app.get("/", (req, res) => {
  res.send("Kullanıcı API Çalışıyor!");
});

app.get("/kullanici/hepsi", (req, res) => {
  res.send(TEST_KULLANICI_ARR);
});

app.get("/db/kullanici/hepsi", (req, res) => {
  const selectSQL = "SELECT * FROM Kullanici;";
  console.log("SQL Gönderiliyor!");
  db.query(selectSQL, (err, result) => {
    if (err) {
      console.log("DATABASE ERROR: ", err);
      res.send({
        status: 400,
        kullanicilar: undefined,
      });
    } else {
    console.log("Sorgu Başarılı: ", result);
      res.send({
        status: 200,
        kullanicilar: result,
      });
    }
  });
});

app.get("/db/kullanici/:kullanici_id", (req, res) => {
    let sorgu_kullaniciID = req.params.kullanici_id;
    const selectSQL = `SELECT * FROM Kullanici WHERE KullaniciID='${sorgu_kullaniciID}';`;
    console.log("SQL Gönderiliyor!", selectSQL);
    db.query(selectSQL, (err, result) => {
      if (err) {
        console.log("DATABASE ERROR: ", err);
        res.send({
          status: 400,
          kullanicilar: undefined,
        });
      } else {
      console.log("Sorgu Başarılı: ", result);
        res.send({
          status: 200,
          kullanicilar: result,
        });
      }
    });
  });

app.get("/kullanici/rol/:rol", (req, res) => {
  let secilenRol = req.params.rol;

  let secilenKullanici = TEST_KULLANICI_ARR.find((kullanici) => {
    return kullanici.rol === secilenRol;
  });

  res.send(secilenKullanici);
});

app.get("/kullanici/id/:kullanici_id", (req, res) => {
  let secilenKullaniciID = req.params.kullanici_id;

  let secilenKullanici = TEST_KULLANICI_ARR.find((kullanici) => {
    return kullanici.id == secilenKullaniciID;
  });

  res.send(secilenKullanici);
});

// POST

// Listen Port
app.listen(PORT, () => {
  console.log(`Port ${PORT} dinleniyor...`);
});
