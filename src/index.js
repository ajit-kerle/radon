const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const expressListRoutes = require('express-list-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://ajitkerle:2R693j4kFokYqNZJ@cluster0.djs4ptj.mongodb.net/ajitkerle-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', router);
// app.use('/',
//     function(req,res,next){
//         console.log('this is global variable')
//     }
// );

// router.route('/')
//       .post(router)
//       .get(router)
//       .put(router);

// expressListRoutes(router);







app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
