const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")
const OrderController = require ("../controllers/orderController")





router.post("/createUser", commonMW.mid1,UserController.createUser  )
router.post("/createProduct", ProductController.createProduct  )
router.post("/createOrder", commonMW.mid1,commonMW.mid2,commonMW.mid3,OrderController.createOrder)
// router.post("/createOrder",OrderController.createOrder  )



module.exports = router;