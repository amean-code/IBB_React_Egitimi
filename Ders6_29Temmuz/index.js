
// Express Import
var express = require("express");
var app = express();
var port = 3001

// Handling Get Request
app.get("/", (req , res) => {
    res.send("AMEAN Danışmanlık - IBB React Eğitimi")
})

// App Listen - Port
app.listen(port, () => {
    console.log(`${port} Portu Dinleniyor`);
})
