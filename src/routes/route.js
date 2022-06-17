const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController= require("../controllers/weatherController")
const MemeController= require("../controllers/memesController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get('/cowin/getByDistrict',CowinController.getByDistrictId)

// -------------------------- second problen statement----------------------

// assignment number 2
router.get('/weather/getWeatherOf',WeatherController.getWeatherOf)
router.get('/weather/getTemperature',WeatherController.getTemperatureOf)

// assignment number 3
//memes creation api
router.post('/meme/makeMemes',MemeController.makeMeme)
//getting all memes
router.get('/getAllmeme',MemeController.getAllmeme)

module.exports = router;