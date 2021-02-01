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
    }
    req.data =  data
    next();
    //res.json({result: data });
}

module.exports = {
    validateData
}