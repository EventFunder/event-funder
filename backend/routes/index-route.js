var bodyParser = require('body-parser');
var User = require(__dirname + '/../models/User');



module.exports = function(router) {
  router.use(bodyParser.json());

  function successRes(req, res) {
    res.json({msg: 'Index route successfully reached'});
  }

  router.route('/')
    .get(function (req, res) {
      //User.find({}, function(err, users) {
      //  if(err) return res.status(500).json({'msg': 'server err yo'});
      //  res.send(users);
      //});
      res.render('index');
    })
    .post(function(req, res) {
      var user = new User(req.body);
      user.password = user.generateHash(req.body.password);
      user.save(function(err) {
        if(err) return res.status(500).json({msg: 'server err yo'});
        res.json({msg: 'user done been created'});
      });
    });
}


//to delete use:
//User.find({}).remove().exec()
