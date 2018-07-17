var db = require("../models");

module.exports = function(app) {
    app.get('/api/login', (req, res)=>{
        db.User.findAll({}).then(function(dbAuthor) {
            console.log('hello')
            res.json(dbAuthor);
        });
    })
}
