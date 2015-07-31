'use strict'

var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

var MONGOLAB_URI = process.env.MONGOLAB_URI || require('./config.js').mongolabUri();
mongoose.connect(MONGOLAB_URI, function(err) {
  if (err) console.log('error: ' + err);
  else console.log('MongoDB connection successful.');
}); //process.env.MONGOLAB_URI || 'mongodb://localhost/eventfunder-users');


process.env.secret = process.env.SECRET || require('./config.js').secret();

//router
app.use(express.static(path.join(__dirname, '/public')));
//app.get('/', function(req, res) {  // '/' is GET route, then callback function for get
//  res.render('index');
//});

var userRouter = express.Router();
require(__dirname + '/backend/routes/authentication-route')(userRouter);
require(__dirname + '/backend/routes/index-route')(userRouter);
require(__dirname + '/backend/routes/user-routes')(userRouter);
app.use('/', userRouter);

app.all('*', function(req, res) {
  res.status(404).json({'msg': '404 error, you done fucked up son'});
});

app.listen(port, function() {
  console.log('Server listening at port: ' + port);
  console.log('Connected to MongoDB: ' + process.env.MONGOLAB_URI);
})
