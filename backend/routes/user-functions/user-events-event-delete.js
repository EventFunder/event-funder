var Event = require('../../models/Event');
var Committer = require('../../models/Committer');

module.exports = function (req, res) {

  var eventId = req.params.event;

  //check to see if user owns this event
  Event.findById(eventId, function(err, eventData) {
    if(err) res.status(500).json({msg: 'Server error: cannot find event'});
    else {
      if(eventData.owner === req.username) deleteCommitters(eventId, req);
      else res.status(403).json({msg: 'You are not authorized to delete this file'});
    }
  })

  function deleteCommitters(eventId, req) {
    Committer.remove({eventToAttend: eventId}, function(err, data) {
      if(err) res.status(500).json({msg: 'Server error: cannot remove Committers'});
      else deleteEvent(eventId, req);
    });
  }

  function deleteEvent(eventId, req) {

    Event.findByIdAndRemove(eventId, function(err, data) {
      if(err) res.status(500).json({msg:'Server error: cannot remove event'});
      else res.json({msg:'Event and Committers successfully deleted', data: data});
    })
  }
}
