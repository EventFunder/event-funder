var bodyParser = require('body-parser');
var User = require(__dirname + '/../models/User');



module.exports = function(router) {
  router.use(bodyParser.json());

  function successRes(req, res) {
    res.json({msg: 'Index route successfully reached'});
  }

  router.route('/')
    .get(function (req, res) {
      res.render('index');
    })
    //create user
    .post(function(req, res) {
      var user = new User(req.body);
      user.password = user.generateHash(req.body.password);
      user.save(function(err) {
        if(err) res.status(500).json({msg: 'Server Error: cannot save user'});
        res.json({msg: 'user done been created', token:user.generateToken()});
      });
    });
}


//to delete use:
//User.find({}).remove().exec()
