// Import manually generated json file
let db = require('../db/db.json');

// User behaviours class
module.exports = class User {

    // All users
    async userAll() {
        let userArray = await db.userArray;
        return userArray;
    }

    // Request filter with user id
    async userFilter(order) {
        let userArray = await db.userArray;
        return userArray.filter((selectUser) => {return selectUser.user_id == order});
    }

    // Request filter with authorization 
    async userAuth(order) {
        let userArray = await db.userArray;
        return userArray.filter((selectUser) => {return selectUser.authorization == order});
    }

    // Username and password query
    async userGuard(order) {
        let userArray = await db.userArray;

        let userName = userArray.filter((selectUser) => {return selectUser.userName == order.userName});
        let userPassword = userArray.filter((selectUser) => {return selectUser.password == order.password});

        let guard = userName.length != 0 && userPassword.length != 0; // Username and password query

        if( guard ) {
            return 'Login Success';
        }else {
            return 'Login Failed';
        }
    }

}
