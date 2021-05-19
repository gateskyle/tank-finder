const Router = require("express").Router();
const db = require("../models");

Router.get('/api/:tankName', async (req, res) => {
    console.log(req.params.tankName)
    db.Tanks.find({name: req.params.tankName})
        .then(tank => res.json(tank))
        .catch(err => res.status(422).end());
})

module.exports = Router;