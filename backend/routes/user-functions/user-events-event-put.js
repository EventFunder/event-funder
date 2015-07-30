var Event = require('../../models/Event');

module.exports = function (req, res) {

  var eventId = req.params.event;

  //check to see if user owns this event
  Event.findById(eventId, function(err, eventData) {
    if(err) res.status(500).json({msg: 'Server error: cannot find event'});
    else {
      if(eventData.owner === req.username) updateEvent(eventData, eventId, req);
      else res.status(403).json({msg: 'You are not authorized to update this file'});
    }
  })

  function updateEvent(eventData, eventId, req) {

    var newEvent = eventData.getUpdatedEventObj(req);

    Event.findByIdAndUpdate(eventId, {$set:newEvent}, function(err, data) {
      if(err) res.status(500).json({msg:'Server error: cannot update event'});
      else res.json({msg:'Event successfully updated', data: data});
    })
  }
}
