const { count } = require("console")
const OrderModel= require("../models/orderModel")
const ProductModel= require("../models/productModel")
const UserModel= require("../models/userModel")

const createProduct= async function (req, res) {
    let data= req.body
    let savedData= await ProductModel.create(data)
    res.send({msg: savedData})
}

module.exports.createProduct= createProduct


