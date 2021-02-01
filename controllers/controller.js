let validateDataMiddleware = require('../middlewares/validateData')
let userRegister =  require('./regsiter');

exports.registerUser = [
    validateDataMiddleware.validateData,
    userRegister.prueba
];