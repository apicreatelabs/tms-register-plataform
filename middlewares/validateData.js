const { json } = require("body-parser");

function validateData (req,res,next){
    //POST DELETE UPDATE GET
    let data = {}
    switch (req.method) {
        case "GET":
            data =  req.query;
            break;
        case "POST":
            data = req.body;
            break;
        case "PUT":
            data =  req.body;
            data.id = req.query.id;
            break
        default:
            res.status(500).json({result: { msg: "method Error" }})
            break;
    }
    req.data =  data
    next();
}

module.exports = {
    validateData
}