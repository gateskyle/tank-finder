const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect('mongodb+srv://kgates:YorktownEnterprise1@cluster0.qnrbj.mongodb.net/Tanks', {useNewUrlParser: true}, {useUnifiedTechnology: true}) ;

const tankSeed = [
  {
    name: "Tiger"
  },
  {
    name: "Sherman"
  },
  {
    name: "T-34"
  },
];

db.Tanks.remove({})
  .then(() => db.Tanks.collection.insertMany(tankSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });