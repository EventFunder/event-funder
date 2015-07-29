var bodyParser = require('body-parser');
var verify = require('../middleware/verify');
var User = require('../models/User');
var Event = require('../models/Event')

module.exports = function(router) {
  router.use(bodyParser.json());

  router.route('/users')
    .get(function (req, res) {
      User.find({}, function(err, users) {
       if(err) return res.status(500).json({'msg': 'server err yo'});
       res.send(users);
      });
    });


  router.route('/:user')
    .get(verify, require('./user-functions/user-get'));

  router.route('/:user/events')
    .get(verify, require('./user-functions/user-events-get'))
    .post(verify, require('./user-functions/user-events-post'));

  router.route('/:user/events/:event')
    .get(require('./user-functions/user-events-event-get'))
    .put(verify, require('./user-functions/user-events-event-put'))
    .delete(verify, require('./user-functions/user-events-event-delete'));

  router.route('/:user/events/:event/committers')
    .get(require('./user-functions/user-events-event-committers-get'))
    .post(require('./user-functions/user-events-event-committers-post'));

  router.route('/:user/events/:event/committers/:committer')
    // .get(verify, require('./user-functions/user-events-event-committers-committer-get'))
    .delete(verify, require('./user-functions/user-events-event-committers-committer-delete'));
}
