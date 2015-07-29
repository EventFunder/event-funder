var Committer = require('../../models/Committer');
var Event = require('../../models/Event');
module.exports = function (req, res) {

  var eventId = req.params.event;

  var committer = new Committer({
    name: req.body.name,
    amount: req.body.amount,
    eventToAttend: eventId
  });

  committer.save(function(err) {
    if(err) res.status(500).json({msg: 'Server error: Cannot save committer'});
    else {
      Event.findByIdAndUpdate(eventId, {$inc: {amtRaised: req.body.amount}}, function(err, data) {
        if (err) res.status(500).json({msg: 'Event amount raised could not be updated'});
        else res.json({msg: 'Committer has been saved and updated'});
      });
    }
  });
}

