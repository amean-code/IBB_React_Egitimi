// Express Import
const express = require('express');
const app = express();
const port = 3000;

// Converting post data to object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router functions import
const userRoutes = require('./routes/user');

// Router using
app.use(userRoutes);

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
app.listen( port, () => {
    console.log(`Listen port: ${port} success`);
})