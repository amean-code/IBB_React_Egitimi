// Import user behaviours
const user = require('../models/user');

// Controllers all users
exports.userAllControllers = async (request, response) => {
    user.userAll().then(result => {
        response.status(200).json(result)
    }).catch((err) => {
        console.log(err);
    })
}

// Request controllers with user id
exports.userFilterControllers = async (request, response) => {
    let order = request.params.kullanici;
    user.userFilter(order).then(result => {
        response.status(200).json(result)
    }).catch((err) => {
        console.log(err);
    })
}

// Request controllers with user authorization
exports.userAuthControllers = async (request, response) => {
    let order = request.params.rol;
    user.userAuth(order).then(result => {
        response.status(200).json(result)
    }).catch((err) => {
        console.log(err);
    })
}

// Login controllers
exports.userGuardControllers = async (request, response) => {
    let order = request.body[0];
    user.userGuard(order).then(result => {
        response.status(200).send(result)
    }).catch((err) => {
        console.log(err);
    })
}