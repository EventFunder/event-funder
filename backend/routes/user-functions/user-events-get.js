var Event = require('../../models/Event');

module.exports = function(req, res) {

  Event.find({owner: req.username}, function(err, events) {
    if(err) {
      res.status(500).json({msg: 'Server error: could not get events'});
    } else {
      res.json({msg: 'Events array recieved', events: events});
    }
  });
}
