const mongoose = require('mongoose');
// collection for storing city and temperature information
const weatherSchema = new mongoose.Schema( {
   city:{
    type:String,
    },
    temp:{
        type:Number
    },
}, { timestamps: true });

module.exports = mongoose.model('Weather', weatherSchema) //users