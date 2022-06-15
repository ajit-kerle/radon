const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const authenticate =async function (req, res, next) {
  //check the token in request header
  let token = req.headers["x-auth-token"];
  if (!token) token = req.headers["x-Auth-token"];
  //validate this token
  if (!token) {
    return res.send({ status: false, msg: "token must be present" });
  }
  let decodedToken = jwt.verify(token, "functionup-radon");
  
  if (!decodedToken) {
    return res.send("token is invalid");
  }
  next()
};

const authorise =async function (req, res, next) {
  // comapre the logged in user's id and the id in request
  let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (decodedToken.userId === req.params.userId) {
       let userId = req.params.userId;
      // finding autherise user 
      let userDetails = await userModel.findById(userId);
      if (!userDetails)
         return res.send({ status: false, msg: "No such user exists" });
      next();
  } else {
    return res.send({status: false, msg: 'your are not autherise to access'});
  }
 
};


module.exports.authenticate=authenticate
module.exports.autherise=authorise