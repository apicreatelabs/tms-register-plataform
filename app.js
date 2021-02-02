const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { check, validationResult } = require("express-validator");
require("dotenv").config();

const app = express();

let port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const userRoute = require("./routes/users");

app.use("/users", userRoute);

app.post(
  "/prueba",
  [
    check("name").not().isEmpty().withMessage("Name is required")
  ],
  (req, res) => {
    var errors = validationResult(req).array();
    if (errors) {
      res.json(errors);
    } else {
      res.json("fghjklñ");
    }
  }
);

app.listen(port, () => {
  console.log(`API running for port ${port}`);
});
