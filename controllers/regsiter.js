function prueba(req,res) {
    console.log(req.data);
    res.json(req.data);
}

module.exports = {
    prueba
}