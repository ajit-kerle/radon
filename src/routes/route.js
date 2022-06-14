const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authMiddleware= require("../middleware/auth")

//-------------assignment solution---------------

// ---user creation api -------
router.post("/users", userController.createUser  )

//---user login api here ---------
router.post("/login", userController.loginUser)

//--- api for getting authenticated user info by using jsonwebtoken---
router.get("/users/:userId",authMiddleware.auth,userController.getUserData)

//-- this api is for upadting user data after authenticating jwt  token in 
router.put("/users/:userId",authMiddleware.auth, userController.updateUser)

//-- this api is for deleting user data after authenticating jwt  token in 
router.delete("/users/:userId",authMiddleware.auth, userController.deleteUser)

module.exports = router;