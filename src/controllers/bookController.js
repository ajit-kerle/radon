const { count } = require("console");
const BookModel = require("../models/bookModel");

//----------assignment solution ---------------
//----- new entry api is here -------------
const createBook = async function (req, res) {
  let data = req.body;
  let savedData = await BookModel.create(data);
  res.send({ Data: savedData });
};

// --gives all the books- their bookName and authorName only --
const booksList=async function(req,res){
     let data=await BookModel.find({},{bookName:1,authorName:1,_id:0})
     res.send({data:data})
};
//---------------


// takes year as input in post reques---------
const getBookInYear = async function (req, res) {
  let data = req.params['getBooksInYear']
  let savedData = await BookModel.find({year:data});
  res.send({year:savedData});
};
//----------


//take particular input and give getParticularBooks---
const getParticularBook= async function(req,res){
    let data=req.body
    let saveData=await BookModel.find(data)
    res.send(saveData)
}
//---------

// all books who have an Indian price tag
const getXINRBooks= async function(req,res){
   let data= await BookModel.find({"price.indianPrice":{$in:["100INR","200INR","500INR"]}})
   res.send({d:data})
}
//------------

//getRandomBooks - returns books that are available in stock---------
const getRandomBooks=async function(req,res){
  let data= await BookModel.find({stockAvailable:true,totalPages:{$gt:500}})
   res.send({d:data})
}
//--------


// exported data is here for assignment------
module.exports.createBook = createBook;
module.exports.booksList= booksList;
module.exports.getXINRBooks= getXINRBooks;
module.exports.getRandomBooks= getRandomBooks;
module.exports.getBookInYear= getBookInYear;
module.exports.getParticularBook= getParticularBook;     






