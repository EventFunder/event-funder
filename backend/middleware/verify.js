var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var User = require('../models/User');

module.exports = function(req, res, next) {

  var token = req.body.token || req.query.token;
  if(token) {
    jwt.verify(token, 'saltyballs', function(err, decoded) {
      if (err) {
        res.status(500).json({msg:'failed to verify User'})
       } else {
       console.log("decoded username", decoded);
        User.findOne({username: decoded}, function(err, user){
          if (err){
            console.error(err);
            res.status(500).json({msg: "internal server err: failted to handle request"});
          } else {
            console.log('data found by user.findone in very:\n', user)

            req.username = user.username;
            next();
          }
        });
      }
    });
  } else {
    res.status(403).json({msg: 'You shall not pass!'})
  }

}
