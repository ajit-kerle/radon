const UserModel= require("../models/userModel")

//------assignment-----------------
//----- funstions for get books info add new book
const getBooks=async function(req,res){
    let getBook=await UserModel.find()
    res.send({msg:getBook})
    
}
const addBooks=async function(req,res){
    let bdata=req.body
    let savedBookData=await UserModel.create(bdata)
    res.send({Books:savedBookData})
}



// ---------------------------------------------
const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.getBooks= getBooks
module.exports.addBooks= addBooks
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData