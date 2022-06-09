const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let autId= req.body.author
    let pubId=req.body.publisher
    if(autId== undefined){
      res.send("require auther id ")
    }else if(pubId == undefined){
        res.send("require publisher id")
    }else if(autId !=undefined || pubId !=undefined){
    let createdBook=await bookModel.create(book)
    console.log("Object is presented")
    res.send(createdBook)
    }
}
   
const getFetchAll=async function(req,res){
    let fetchAll=await bookModel.find().populate('author').populate('publisher')
    console.log(fetchAll[0])
    res.send(fetchAll)
}

const booksPublishBy=async function(req,res){
    let publishBy=await publisherModel.find({name:{$in:["HarperCollins","Penguin"]}},{_id:1})
    const temp=[]
    for(let i=0;i<2;i++){
      let id=publishBy[i]._id
      let updateBy=await bookModel.findOneAndUpdate({publisher:id},{isHardCover:true},{new:true})
      temp.push(updateBy)
    }
    const newTemp= temp
    
    res.send(newTemp)
}

const havingRating=async function(req,res){
    let haveRating=await authorModel.find({rating:{$gt:3.5}},{_id:1})
    const temp=[]
    for(let i=0;i<3;i++){
      let id=haveRating[i]._id
      let updatePrice=await bookModel.findOneAndUpdate({author:id},{},{new:true})
      let valueget=updatePrice.price
      let add=valueget+10
      temp.push(updatePrice,{price:add})
    }
    const newTemp= temp
    res.send(newTemp)
}




module.exports.createBook= createBook
module.exports.getFetchAll= getFetchAll
module.exports.booksPublishBy= booksPublishBy
module.exports.havingRating= havingRating

