var bodyParser = require('body-parser');


module.exports = function(router) {
  router.use(bodyParser.json());

  router.route('/')
    .get (function(req, res) {
      res.json({'msg': 'got index'});
    });


}
