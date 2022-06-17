let axios = require("axios");

// rote handler for all meme 
const getAllmeme=async function(req,res){
    try{
    let options={
        method:"get",
        url:`https://api.imgflip.com/get_memes`
    }
    let result=await axios(options)
    let data = result.data
    res.status(200).send({allmemes:data})
    }catch(err){
      res.status(500).send({ msg: err.message }); 
    }
}

//route handler for make meme post with the help of api 
const makeMeme= async function (req, res) {
  try {
    let templateid = req.query.template_id;
    let text0 = req.query.text0;
    let text1 = req.query.text1;
    let username = req.query.username;
    let password = req.query.password;
     console.log(templateid)
    let options = {
      method: "post",
      url: `https://api.imgflip.com/caption_image?template_id=${templateid}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
    };
    let result = await axios(options);
    let data = result.data;
    res.status(200).send({ meme: data });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getAllmeme = getAllmeme;
module.exports.makeMeme = makeMeme;

