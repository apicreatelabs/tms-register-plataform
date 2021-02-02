let validateDataMiddleware = require('../middlewares/validateData')
let userController =  require('./usersController');

exports.registerUser = [
    validateDataMiddleware.validateData,
    userController.register
];