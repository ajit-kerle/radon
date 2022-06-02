const express = require('express');
const { route } = require('express/lib/application');
const under=require('underscore')
const externalModule = require('../logger/logger')
const utilHelperModule=require('../util/helper')
const validFormatter=require('../validator/formatter')
// const loaDash=require('../loadash/loadash')
const ldash=require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome()
    utilHelperModule.printDate()
    utilHelperModule.printMonth()
    utilHelperModule.getBatchInfo()
    console.log("string after triming: "+validFormatter.trimName)
    console.log("string after lower case: "+validFormatter.toLower)
    console.log("string after upper case: "+validFormatter.toUpper)
    console.log(under.first(["ajit","madhavrao","kerle"]))
    res.send('My first ever api!')
});

router.get('/hello',function(req,res){
    //array of months chunk
    const arr1=["jan","feb","march","april","may","jun","july","aug","sept","oct","nov","dec"]
    console.log(ldash.chunk(arr1, [size=3]))

    //array of odd number tail
    const arr2=[1,3,5,7,9,11,13,15,17,19]
    console.log(ldash.tail(arr2))

    //five array merge using union
    const a1=[1,5,56]
    const a2=[54,5,1]
    const a3=[89,9,10]
    const a4=[6,4,3]
    const a5=[1,4,54]
    console.log(ldash.union(a1,a2,a3,a4,a5))

    // by using fromPairs
    const movie=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(ldash.fromPairs(movie))


    res.send('hello')
});

module.exports = router;
// adding this comment for no reason