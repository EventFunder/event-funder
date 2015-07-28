var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var User = require(__dirname + '/../models/User');
var jwt = require('jsonwebtoken')


module.exports = function(router) {
  router.use(bodyParser.json());

  function successRes(req, res) {
    res.json({'msg': 'Index route successfully reached'});
  }

  router.route('/')
    .get(function (req, res) {
      User.find({}, function(err, users) {
        if(err) return res.status(500).json({'msg': 'server err yo'});
        res.send(users);
      });
    })
    .post(function(req, res) {
      var user = new User(req.body);
      bcrypt.hash(user.password, 8, function(err, hash) {

        user.password = hash
        user.save(function(err) {
          if(err) return res.status(500).json({'msg': 'server err yo'});
          res.json({'msg': 'user done been created'});
        });

      });
    });
}


//to delete use:
//User.find({}).remove().exec()
