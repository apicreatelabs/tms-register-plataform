let validateDataMiddleware = require('../middlewares/validateData')

exports.registerUser = [
    validateDataMiddleware.validateData
];