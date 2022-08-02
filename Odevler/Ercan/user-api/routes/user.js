// Express Router import
const express = require('express');
const router = express.Router();

const user = require('../controllers/user');

// API Router function
router.get('/kullanici/hepsi', user.userAllControllers); // fetch all users
router.get('/kullanici/:kullanici', user.userFilterControllers); // filter request with user id
router.get('/kullanici/auth/:rol', user.userAuthControllers); // filter request with user authorization
router.post('/kullanici/guard', user.userGuardControllers); // login

// Router export
module.exports = router;