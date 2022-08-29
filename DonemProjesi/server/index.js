import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRouter from './routers/auth.js';
import userRouter from './routers/user.js';

// APP
const app = express();

// USE
dotenv.config()
app.use(express.json())
app.use(cookieParser())

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
app.use("/api/user",userRouter)

// ERROR

// LISTEN
app.listen(PORT, () => {
    mongo_connet(); // DB MONGO BAGLANTI
    console.log(`Server ${PORT} portunu dinliyor...`);
})