// Express Import
const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express();
const PORT = process.env.PORT || 3000;

// Converting post data to object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Router functions import
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

// Router using
app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

// End pointler hakkında bilgilendirme yapalım
app.get("/" , (req, res) => {


    res.send(`
    
    <h1> Kullanıcı API Hoşgeldiniz </h1>

    <p> Aşağıdaki dizinkeri kullanarak kullanıcı bilgilerine ulaşabilirsiniz. </p>

    <ul>

        <li> /kullanici/hepsi </li>
        <li> /kullanici/:kullanici_id</li>
        <li> /kullanici/auth/:rol</li>
    </ul>

    `);
})


// App Listen - Port
app.listen( PORT, () => {
    console.log(`Listen port: ${PORT} success`);
})