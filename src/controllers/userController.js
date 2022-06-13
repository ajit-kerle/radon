const OrderModel= require("../models/orderModel")
const ProductModel= require("../models/productModel")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    // const header=req.headers.isfreeappuser
    // if(!header){
    //     res.send("please provide headers")
    // }
    let savedData= await UserModel.create(data)
    res.send({data:savedData})
}


module.exports.createUser= createUser
