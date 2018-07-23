var db = require("../models");
var path = require('path');
var sequelize = require('sequelize');
var express = require('express');
var router = express.Router();

router.post('/api/login', (req, res)=>{
    // sequelize.query("USE Authentication; SELECT * FROM `users` where username  in (?) and password in (?) ;", [req.body.username, req.body.password], { type: sequelize.QueryTypes.SELECT})
    db.User.findAll({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(users => {
        // res.json(users)
            if (users.length < 1)
            res.send("unauthroized")
            else res.send("authorized")
    })
});
router.use(function(req, res) {
    console.log("dir name",__dirname)
    res.sendFile(path.join(__dirname, "../thinder/build/index.html"))
});

module.exports = router;

