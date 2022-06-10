const express = require('express');
const router = express.Router();

const middlewareController=require('../Middleware/commonMiddleware')
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")

router.post('/createAuthor',middlewareController.mid1,authorController.createAuthor)
router.post('/createPublisher',middlewareController.mid1,publisherController.createPublisher)
router.post('/createBook',middlewareController.mid1,bookController.createBook)

router.get('/getFetchALL',middlewareController.mid1,bookController.getFetchAll)

router.put('/booksPublishBy',middlewareController.mid1,bookController.booksPublishBy)
router.put('/havingRating',middlewareController.mid1,bookController.havingRating)


module.exports = router;