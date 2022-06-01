const express = require('express');
const externalModule = require('../logger/logger')
const utilHelperModule=require('../util/helper')
const validFormatter=require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome()
    utilHelperModule.printDate()
    utilHelperModule.printMonth()
    utilHelperModule.getBatchInfo()
    console.log("string after triming: "+validFormatter.trimName)
    console.log("string after lower case: "+validFormatter.toLower)
    console.log("string after upper case: "+validFormatter.toUpper)
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason