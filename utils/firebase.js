const admin = require("firebase-admin");
const serviceAccount = require("../config/firebase.json");

admin.initializeApp({
     credential: admin.credential.cert(serviceAccount),
     databaseURL: "https://apicreateplataform-default-rtdb.firebaseio.com/",
});

const db = admin.firestore();
let result = {}
async function dataBaseUser(resultfirebase,otherData){
  let table =  db.collection("users");
  let docRef = await table.doc(resultfirebase.uid);
  try {
    let createOtherData = await docRef.set(otherData)
    result = {
      database: {
        status: 201
      }
    }
    return createOtherData;
  } catch (error) {
    return  result = {
      error: error,
      status:  400
    }
  }
}

async function createUser(user) {
  let result = {}
    try {
        let result = await admin.auth().createUser(user.data);
        let resultInsertDataBase = await dataBaseUser(result,user.otherInfo);
        if(resultInsertDataBase.error){
         //El error es que esta mal escrito xd
         // result = reresultInsertDataBasesuser.error // este es el error
          result =resultInsertDataBase.error // así debe estar
        }
        return result
      }
    catch (error) {
      result.error = {
        code: error.code,
        description: error.message
      }
      return result;
    }
  }

  module.exports = {
      createUser
  }