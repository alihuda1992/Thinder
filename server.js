// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
const path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");
console.log("user ",db.User)
// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/api.js")(app);
app.get('/', (req, res)=>{
    console.log('yo yo')
})
app.get('/api/login', (req, res)=>{

    db.User.findAll().then(function(dbAuthor) {
        console.log("***",dbAuthor)
        res.json(dbAuthor);
    });
})
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
//     console.log('hello')
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, function() {
        console.log('here we go')
        console.log("App listening on PORT " + PORT);
  })
//   .catch(err=>console.log(err))
});
