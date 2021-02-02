const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

let port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const userRoute = require("./routes/users");

app.use("/users", userRoute);

app.post("/prueba",(req,res)=>{
  res.json({msg:"ssdsds"})
})

app.listen(port, () => {
  console.log(`API running for port ${port}`);
});
