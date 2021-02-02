function validateData (req,res,next){
    //POST DELETE UPDATE GET
    let data = {}
    console.log("el metodo es",req.method);
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
    }
    req.data =  data
    next();
}

module.exports = {
    validateData
}