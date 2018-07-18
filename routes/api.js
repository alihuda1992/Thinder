var db = require("../models");

module.exports = function(app) {
    app.get('/api/login', (req, res)=>{
        sequelize.query("USE Authentication; SELECT * FROM `users`;", { type: sequelize.QueryTypes.SELECT})
  .then(users => {
      console.log(res);
  })
        })
    };

