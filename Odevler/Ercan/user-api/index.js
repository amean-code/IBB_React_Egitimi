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


// App Listen - Port
app.listen( port, () => {
    console.log(`Listen port: ${port} success`);
})