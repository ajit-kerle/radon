const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

//-------------assignement------------------
// route handler----------are here for books info
router.get("/getBooks",UserController.getBooks)
router.post("/addBooks",UserController.addBooks)


//--------------------------------------------
router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;