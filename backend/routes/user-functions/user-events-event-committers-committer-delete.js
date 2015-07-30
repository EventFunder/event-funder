var Committer = require('../../models/Committer');
var Event = require('../../models/Event');


module.exports = function (req, res) {
  var committerId = req.params.committer;

  //find event that committer is attending
  Committer.findById(committerId, function(err, committer) {
    if (err) res.status(500).json({msg: 'Server error: cannot get committer'});
    else verifyOwnerAndDelete(committer.eventToAttend, req);
  });

  function verifyOwnerAndDelete(eventId, req) {
    Event.findById(eventId, function(err, eventData) {
      if(err) {
        res.status(500).json({msg: 'Server error: cannot find event'});
      } else {
        if(eventData.owner === req.username) updateEventAndDeleteCommitter(committerId, eventId, req)
        else res.status(403).json({msg: 'You are not authorized to update this file'});
      }
    });
  }

  function updateEventAndDeleteCommitter(committerId, eventId, req) {
    Committer.findByIdAndRemove(committerId, function(err, committer) {
      if (err) res.status(500).json({msg: 'Cannot delete this committer'})
      else updateEvent(committer, eventId, req);
    });
  }

  function updateEvent(committer, eventId, req) {
    Event.findByIdAndUpdate(eventId, {$inc: {amtRaised: -committer.amount}}, function(err, data) {
      if (err) res.status(500).json({msg: 'Event amount raised could not be updated'});
      else res.json({msg: 'Committer has been deleted and event amount has been updated'});
    });
  }
}
