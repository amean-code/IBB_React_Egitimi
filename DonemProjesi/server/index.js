import express from 'express';

// APP
const app = express();

// CONSTANTS
const PORT = process.env.PORT || 3044;

// USE

// ROUTER

// ERROR

// LISTEN
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunu dinliyor...`);
})