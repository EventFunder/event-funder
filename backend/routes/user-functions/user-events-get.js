var Event = require('../../models/Event');

module.exports = function(req, res) {
  var user = req.params.user;

  Event.find({owner: user}, function(err, events) {
    if(err) {
      res.status(500).json({msg: 'Server error: could not get events'});
    } else {
      res.json({msg: 'Events array recieved', events: events});
    }
  });
}
