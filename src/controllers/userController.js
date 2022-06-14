const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//------user creation route handler ------
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

//--- loginuser Function for login and authenticate----
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

// here is checking user is present or not authenticating
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

//------ getting user profile by jwt token and userId---- 
const getUserData = async function (req, res) {
  let userId = req.params.userId;
  //cehecking user is present or not in usermodel 
  let userDetails = await userModel.findById(userId);
  // if user is not present 
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
 // else present then this code will run 
  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  //cehecking user is present or not in usermodel for updating  
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }
 // updating user data in user model 
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.send({ status: updatedUser});
};

const deleteUser= async function(req,res){
  
  let userId=req.params.userId 
  let user=await userModel.findById(userId)

  if (!user) {
    return res.send("No such user exists");
  }
// this code is for updating isDelete value to true by updating 
  let deleteUser = await userModel.findOneAndUpdate({ _id: userId },{$set:{isDeleted:true}},{new:true});
  res.send({ status: deleteUser});
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
