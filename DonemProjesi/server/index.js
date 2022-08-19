import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routers/auth.js'

// APP
const app = express();

// USE
dotenv.config()
app.use(express.json())

// CONSTANTS
const PORT = process.env.PORT || 3044;

// DB CONNECTION
const mongo_connet = () => {
    mongoose.connect(process.env.MONGO_DB_LINK).then(() => {
        console.log(`Mongo DB Bağlantısı sağandı !!`);
    }).catch( (err) => {
        console.log(`Mongo DB Bağlantı Hatası :: ${err}`);
        throw err;
    })
}


// ROUTER
app.use("/api/auth",authRouter)

// ERROR

// LISTEN
app.listen(PORT, () => {
    mongo_connet(); // DB MONGO BAGLANTI
    console.log(`Server ${PORT} portunu dinliyor...`);
})