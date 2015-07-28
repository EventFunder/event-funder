var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
var User = require(__dirname + '/../models/User');


module.exports = function(router) {
  router.use(bodyParser.json());

  router.route('/auth')
    .post(function(req, res) {

      User.findOne({username: req.body.username}, function(err, user) {
        if(err) return res.status(500).json({'msg': 'server err'});


        bcrypt.compare(req.body.password, user.password, function(err, bool) {
          if(bool) {
            var token = jwt.sign(user, 'saltyballs');
            res.json({'msg': 'Token aquired', token: token} );
          } else {
            res.json({'msg' : 'Authentication failed'});
          }

        })

      });

    });
}
