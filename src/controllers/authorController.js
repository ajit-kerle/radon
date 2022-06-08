const { count } = require("console");
const AuthorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel");

const creatAuthor = async function (req, res) {
  let authorData = req.body;
  let saveAuthor = await AuthorModel.create(authorData);
  res.send({ Author: saveAuthor });
};

const creatBook = async function (req, res) {
  let bookData = req.body;
  let saveBook = await BookModel.create(bookData);
  res.send({ Author: saveBook });
};

const authorBookList = async function (req, res) {
  let authorData = req.body;
  let Author = await AuthorModel.findOne(authorData, { author_id: 1, _id: 0 });
  let bookList = await BookModel.find(Author, { name: 1, _id: 0 });
  res.send({ Author: bookList });
};

const BookName = async function (req, res) {
  let bookName = req.body;
  let Author = await BookModel.findOneAndUpdate(
    bookName,
    { $set: { price: "100" } },
    { new: true }
  );
  let AuthorName = await AuthorModel.find(
    { author_id: Author.author_id },
    { author_name: 1, _id: 0 }
  );
  let prices = Author.price;
  res.send({ BookAuthor: AuthorName, NewPrice: prices });
};



const findBookBetween = async function (req, res) {
  let betBook = await BookModel.find({ price: { $gte: 50, $lte: 100 } }).select(
    "author_id"
  );
  let id = betBook.map((Bt) => Bt.author_id);
  let temp = [];
  for (let i = 0; i < id.length; i++) {
    const x = id[i];
    let Author = await AuthorModel.find(
      { author_id: x },
      { author_name: 1, _id: 0 }
    );
    temp.push(Author);
  }
  const authoname = temp;
  //  console.log(id)
  res.send({ author: authoname });
};



//------------------------------------------
// optinal assignment questions
// first solution
const getBookById= async function(req,res){
  let id=req.params["id"]
   let getBookData=await BookModel.find({author_id:id},{name:1,_id:0})
   res.send({Book:getBookData})
}
//second solution
const ageOfAuthor=async function(req,res){
  let sepAge=await AuthorModel.find({age:{$gte:50}},{author_name:1,age:1,_id:0})
 
//   const temp=[]
//   for(let i=0;i<sepAge.length;i++){
//     let id=sepAge[i].author_id
//     let sepBook=await sepAge.find({author_id:id},{author_name:1,age:1})
//     temp.push(sepBook)
// }
//  const newar=temp
//   console.log(sepAge)
  res.send(sepAge)
}




module.exports.getBookById=getBookById
module.exports.ageOfAuthor=ageOfAuthor





module.exports.creatBook = creatBook;
module.exports.creatAuthor = creatAuthor;
module.exports.authorBookList = authorBookList;
module.exports.BookName = BookName;
module.exports.findBookBetween = findBookBetween;
