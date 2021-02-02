let validateDataMiddleware = require('../middlewares/validateData');
require('./validations/users/register');
let userController =  require('./usersController');

exports.registerUser = [
    validateDataMiddleware.validateData,
    userController.register

];


exports.loginUser = [
    validateDataMiddleware.validateData,
    userController.login
];

exports.recoveryPassword = [
    validateDataMiddleware.validateData,
    userController.recoveryPassword
];