const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller')

router.post('/register', controller.registerUser)

module.exports = router;