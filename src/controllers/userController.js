const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//   create user function
const createUser = async function (abcd, xyz) {
  let data = abcd.body;
  let savedData = await userModel.create(data);
  xyz.send({ msg: savedData });
};

//   login user function
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;
    // finding user here
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
    // creating jwt token for new login
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FUnctionup",
    },
    "functionup-radon"
  );
  // sending response
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

//   fetch user details for auttherise user
const getUserData = async function (req, res) {
  let userId = req.params.userId;
  // finding autherise user 
  let userDetails = await userModel.findById(userId);
  // sended to client
  res.send({ status: true, data: userDetails });
};

  // user updating function 
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let userData = req.body;
  // updating user data after autherising
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.send({ status: updatedUser, data: updatedUser });
};

const deleteUser=async function(req,res){
  let userId=req.params.userId

  let deletedUser=await userModel.findOneAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true})
  return res.send({status: true, data: deletedUser})
}

  // post uploading function
const postMessage = async function (req, res) {
    // here is post info stored
    let message = req.body.message
    let user = await userModel.findById(req.params.userId)
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser})
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
module.exports.postMessage = postMessage
