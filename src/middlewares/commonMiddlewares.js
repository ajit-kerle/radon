const OrderModel = require("../models/orderModel");
const ProductModel = require("../models/productModel");
const UserModel = require("../models/userModel");

const mid1=async function ( req, res, next) {
    const header=req.headers.isfreeappuser
    if(!header){
       return res.send("header is missing provide it")
    }
    next()
}

const mid2=async function ( req, res, next) {
  let data = req.body;
  let isproduct = await ProductModel.findOne({ _id: data.productId });
  let isuser = await UserModel.findOne({ _id: data.userId });

  if (isproduct && isuser) {
   next()
  } else if (!isproduct || !isuser) {
    return res.send("error please provide product id and user id ");
  }
   
}

const mid3=async function ( req, res, next) {
    let head=req.headers.isfreeappuser
    let data=req.body
    let isproduct = await ProductModel.findOne({ _id: data.productId });
    let isuser = await UserModel.findOne({ _id: data.userId });
    console.log(head)
    if(head!=="false"){               
       next()
    }else {
      
        if (isproduct.price<isuser.balance ){
       const valUpd=isuser.balance - isproduct.price //100-70=30
        const blncOfUser=await UserModel.findOneAndUpdate({_id: data.userId},{$set:{balance:valUpd}},{new:true})
        res.send(blncOfUser)
        }else{
            return res.send("balance is not enough")
        }
    }
   
}

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
// module.exports.mid4= mid4
