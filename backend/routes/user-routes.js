var bodyParser = require('body-parser');


module.exports = function(router) {
  router.use(bodyParser.json());

  function successRes(req, res) {
    res.json({'msg': 'route successfully reached'});
  }

  router.route('/')
    .get(successRes)
    .post(successRes);

  router.route('/:user')
    .get(successRes);

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
