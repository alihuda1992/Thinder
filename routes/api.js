var db = require("../models");
var sequelize = require('sequelize');

module.exports = function(app) {
    app.post('/api/login', (req, res)=>{
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
    })
};

