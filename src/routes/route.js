const express = require("express");
const { route } = require("express/lib/application");
const under = require("underscore");
const externalModule = require("../logger/logger");
const utilHelperModule = require("../util/helper");
const validFormatter = require("../validator/formatter");
// const loaDash=require('../loadash/loadash')
const ldash = require("lodash");

const router = express.Router();
let players = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: ["soccer"],
  },
  {
    name: "lokesh",
    dob: "1/1/1990",
    gender: "male",
    city: "mumbai",
    sports: ["soccer"],
  },
];

router.post("/players", function (req, res) {
  for(let i=0;i<players.length;i++){
  if(req.body.name===players[i].name){
      res.send("player exists")
      console.log("player exists")
  }
  }
  players.push(req.body)
  console.log(players)
  res.send("player added successfully")
  // res.send(  { data: players , status: true }  )
});

router.get("/test-me", function (req, res) {
  // externalModule.welcome();
  // utilHelperModule.printDate();
  // utilHelperModule.printMonth();
  // utilHelperModule.getBatchInfo();
  // console.log("string after triming: " + validFormatter.trimName);
  // console.log("string after lower case: " + validFormatter.toLower);
  // console.log("string after upper case: " + validFormatter.toUpper);
  // console.log(under.first(["ajit", "madhavrao", "kerle"]));
  res.send("My first ever api!");
});

router.get("/hello", function (req, res) {
  //array of months chunk
  // const arr1=["jan","feb","march","april","may","jun","july","aug","sept","oct","nov","dec"]
  // console.log(ldash.chunk(arr1, [size=3]))

  // //array of odd number tail
  // const arr2=[1,3,5,7,9,11,13,15,17,19]
  // console.log(ldash.tail(arr2))

  // //five array merge using union
  // const a1=[1,5,56]
  // const a2=[54,5,1]
  // const a3=[89,9,10]
  // const a4=[6,4,3]
  // const a5=[1,4,54]
  // console.log(ldash.union(a1,a2,a3,a4,a5))

  // // by using fromPairs
  // const movies=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
  // console.log(ldash.fromPairs(movies))

  res.send("hello");
});

// movies accessing solution
router.get("/movies", function (req, res) {
  // list of movie is response
  const movies = [
    "Rang de basanti",
    "The shining",
    "Lord of the rings",
    "Batman begins",
  ];

  res.send(movies);
});

router.get("/movies/:index", function (req, res) {
  // list of movie is response by index id
  const movie = [
    "Rang de basanti",
    "The shining",
    "Lord of the rings",
    "Batman begins",
  ];

  if (req.params.index >= movie.length) {
    console.log("use a valid index");
    res.send("use a valid index");
  }
  const i = req.params.index;
  res.send(movie[i]);
});

// films accessing solution
router.get("/films", function (req, res) {
  // fims accessing using /films
  const films = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ];

  res.send(films);
});

router.get("/films/:filmid", function (req, res) {
  // films accessing using filmid
  const films = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ];
  if (req.params.filmid >= 5) {
    res.send("No movie exists with this id");
  }
  const i = req.params.filmid - 1;

  res.send(films[i]);
});

// router.get("/candidates", function (req, res) {
//   console.log(
//     "Query paramters for this request are " + JSON.stringify(req.query)
//   );
//   let gender = req.query.gender;
//   let state = req.query.state;
//   let district = req.query.district;
//   console.log("State is " + state);
//   console.log("Gender is " + gender);
//   console.log("District is " + district);
//   let candidates = ["Akash", "Suman"];
//   res.send(candidates);
// });

// router.get("/candidates/:canidatesName", function (req, res) {
//   console.log("Candidates name is " + req.params.canidatesName);
//   res.send("Done");
// });

module.exports = router;
// adding this comment for no reason
