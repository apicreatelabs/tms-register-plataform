const { check } = require("express-validator");

const userValidationRules = () => {
  return [
      check("email").isEmail(),
      check("tpUser").isNumeric(),
      check("idUser").isInt(),
      check("name").isString(),
      check("lastName").isString(),
      check("email").isString(),
      check("password").isLength({ min: 6 }),
      check("phoneNumber").isMobilePhone(),
    ];
};

module.exports = {
  userValidationRules,
};
