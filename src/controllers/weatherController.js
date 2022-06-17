let axios = require("axios")
const weather = require("../models/weather")


let getWeatherOf=async function(req,res){
    try{// getting state and appis
        let state=req.query.q
        let appId=req.query.appid
        const obj={}// empty object for storing
         var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${appId}`
        }
        let result=await axios(options)
        let data=result.data["main"] //accessing main for getting temperature
         obj["city"]=state // city key
         obj["temp"]=data.temp //storing temperature
         // storing city and temperature in database
         let savedTemp=await weather.create(obj) 
         //sending response
        res.status(200).send({msg:savedTemp})
    }catch(err){
     res.status(500).send({ msg: err.message })
    }
}


let getTemperatureOf=async function(req,res){
    try{// getting data of city and temperature with increasing order
       let getAllCity=await weather.find({},{city:1,temp:1,_id:0}).sort({temp:1})
        res.status(200).send({msg:getAllCity})

    }catch(err){
     res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeatherOf=getWeatherOf
module.exports.getTemperatureOf=getTemperatureOf