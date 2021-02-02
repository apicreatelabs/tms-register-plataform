const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller')

router.post('/register', controller.registerUser);
router.post('/login',controller.loginUser);
router.post('/recovery',controller.recoveryPassword);

module.exports = router;