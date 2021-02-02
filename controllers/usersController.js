function register(req,res){
    let data =  req.data
    //metodos para registrar un usuario
}

function login(req,res){
    let data =  req.data
    //metodos para autenticar
}

function recoveryPassword(req,res){
    let data =  req.data
    //metodos para  recovery password
}

module.exports = {
    register,
    login,
    recoveryPassword
}