var bodyParser = require('body-parser');

module.exports = function(router) {
  router.use(bodyParser.json());

  function successRes(req, res) {
    res.json({'msg': 'Index route successfully reached'});
  }

  router.route('/')
    .get(successRes)
    .post(successRes);
}
