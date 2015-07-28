var bodyParser = require('body-parser');
var verify = require('../middleware/verify');
var User = require('../models/User');


module.exports = function(router) {
  router.use(bodyParser.json());

  function successRes(req, res) {
    res.json({'msg': 'route successfully reached'});
  }

  router.route('/:user')
    .get(verify, function(req, res) {
      User.findOne({username: req.username}, function(err, user) {
        res.json(user);
      });
    });

  router.route('/:user/events')
    .get(successRes)
    .post(successRes);

  router.route('/:user/events/:event')
    .get(successRes)
    .put(successRes)
    .delete(successRes);

  router.route('/:user/events/:event/committers')
    .get(successRes)
    .post(successRes);

  router.route('/:user/events/:event/committers/:committer')
    .get(successRes)
    .delete(successRes);
}
