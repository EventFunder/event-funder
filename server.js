// 'use strict'

var express = require('express');
var app = express();
// var mongoose = require('mongoose');

var port = process.env.PORT || 3000;
// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/event-funder-users');

//router


var userRouter = express.Router();
require('./backend/routes/user-routes')(userRouter);
app.use('/', userRouter);

app.all('*', function(req, res) {
  res.status(404).json({'msg': '404 error, you done fucked up son'});
});

app.listen(port, function() {
  console.log('Server listening at port: ' + port);
})
