// 'use strict'

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

process.env.MONGOLAB_URI = require('./mongoconfig.js')();
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/eventfunder-users');

//router


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
})
