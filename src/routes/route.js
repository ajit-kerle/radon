const express = require('express');
const logger= require('./logger')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log("the constant has value "+logger.url)
    console.log("the second constant has value "+logger.cohort)
    logger.log()
    res.send('welcome world')
});
router.get('/test-me2', function (req, res) {
    res.send('welcome world1')
});
router.get('/test-me2', function (req, res) {
    res.send('welcome world2')
});
router.get('/test-me3', function (req, res) {
    res.send('welcome world3')
});

module.exports = router;
// adding this comment for no reason