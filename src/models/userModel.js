const mongoose = require('mongoose');

// ----------assihment-----------------
//------books schemas collect is here
const bookSchema=new mongoose.Schema({
    bookName:{ type:String, required:true },
    authorName:String,
    category:{
        type:String,
        enum:["thirller","advanterous","horror","comic"]
    },
    year:Number
},{ timestamps: true })

//----------------------------------------
const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });


// ---exported schemas-----------------
module.exports = mongoose.model('User', userSchema) //users
module.exports = mongoose.model('Books', bookSchema) //users



// String, Number
// Boolean, Object/json, array