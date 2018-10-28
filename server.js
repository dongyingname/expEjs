//get all the tools
var express = require('express');
var routes = require('./routes/index.js');
var port = 3000;

var app = express();

// Setup express application

app.set('view engine', 'ejs');
app.use('/public', express.static(process.cwd() + '/public'));

//setup routes
routes(app);
//start server
app.listen(port, function () {
  console.log("Server is running on "+ port +" port");
});//listen to port 3000