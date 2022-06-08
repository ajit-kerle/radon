const express = require("express");
const router = express.Router();
const AuthorController = require("../controllers/authorController");
const moment = require("moment");

router.post("/creatAuthor", AuthorController.creatAuthor);
router.post("/creatBook", AuthorController.creatBook);

router.post("/Book/:Author", AuthorController.authorBookList);
router.post("/:BookName", AuthorController.BookName);

router.get("/findBookBetween", AuthorController.findBookBetween);

//----------------------------------------------------
// pratice api
 router.get('/books/:id',AuthorController.getBookById)
 router.get('/AgeAuthor',AuthorController.ageOfAuthor)

module.exports = router;
