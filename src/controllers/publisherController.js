const publisherModel= require("../models/publisherModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createPublisher=async function(req,res){
    let publisher=req.body
    let publisherCreated=await PublisherModel.create(publisher)
    res.send({data:publisherCreated})
}

module.exports.createPublisher=createPublisher