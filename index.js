const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session'); 
const path = require("path");

const {mongoose} = require('./db.js');

global.appRoot = __dirname;

//declare controller
var homeController = require('./controllers/homeController.js');
var employeeController = require('./controllers/employeeController.js');

//var base_url = session({''});
// var base_url = ;

var app = express();
app.set('view engine', 'pug');
app.set("views", path.join(global.appRoot, "views"));
// app.use(express.static(__dirname)); 
app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.json());
//server init
app.listen(3000, ()=> console.log("server running at: http://localhost:3000/home/") );// http://localhost:3000/home/
//routing
app.use('/home', homeController);
app.use('/employees', employeeController);
