const express = require("express");
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController");
const BookController = require("../controllers/bookController");

// assignemet solution-------------------------------------------------------------
// ---------path and handler are here-------------
router.post("/createBook", BookController.createBook);

// get all book name with book name and author name
router.get("/bookList", BookController.booksList);

//takes year as input in post request
router.post("/:getBooksInYear", BookController.getBookInYear);

//take particular input and give getParticularBooks---
router.post("/book/:getParticularBooks", BookController.getParticularBook);

//all books who have an Indian price tag
router.get("/getXINRBooks", BookController.getXINRBooks);

//getRandomBooks - returns books that are available in stock
router.get("/getRandomBooks", BookController.getRandomBooks);

//----------------------------------------------------------------------------------------
//-------------------------------------------------------------
// router.post("/createBook", BookController.createBook  )

// router.post("/:getBooksData", BookController.getBooksData)

router.post("/createUser", UserController.createUser);

router.get("/getUsersData", UserController.getUsersData);

module.exports = router;
