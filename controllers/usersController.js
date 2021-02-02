const  libFirebase = require('../utils/firebase');

async function register(req,res){
    let data = req.data;
    console.log("esto es data",data);
    if(data.email === undefined){
        res.status(400).json({error:{
            description: "ole no me envie datos nulos"
        }})
    }
     let user = {
         data:{
         emailVerified: false,
         phoneNumber: data.phoneNumber,
         password: data.password,
         displayName: `${data.name} ${data.lastName}`,
         photoURL: data.photoURL,
         disabled: false,
         email: data.email,
         },
        otherInfo:{
            tpUser: data.tpUser,
            id: data.id,
            name: req.data.name,
            lastName: req.data.lastName,
        }
    }
    let result  = await libFirebase.createUser(user);
    
    if(result.error){
        res.status(400).json(result)
    }else{
        res.status(201).json(result)
    }
}

function login(req,res){
    let data =  req.data
    //metodos para autenticar
}

function recoveryPassword(req,res){
    let data =  req.data
    //metodos para  recovery password
}

function registerEmployed(req,res){
    let data =  req.data
    //metodos para  register
}

module.exports = {
    register,
    login,
    recoveryPassword
}