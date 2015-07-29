var Event = require('../../models/Event');

module.exports = function (req, res) {
  var eventId = req.params.event;

  Event.findById(eventId, function(err, eventData) {
    if (err) {
      res.status(500).json({msg: 'Server Error: cannot find event'});
    } else {
      res.json(eventData);
    }
  });
}
