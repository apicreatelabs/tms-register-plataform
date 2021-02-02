const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

const {
  userValidationRules,
} = require("../controllers/validations/users/register");

const { validate } = require("../controllers/validations/validate");

router.post("/login", controller.loginUser);
router.post("/recovery", controller.recoveryPassword);

router.post(
  "/register",
  userValidationRules(),
  validate,
  controller.registerUser
);

module.exports = router;
