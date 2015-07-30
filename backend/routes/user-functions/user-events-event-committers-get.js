var Committer = require('../../models/Committer');

module.exports = function (req, res) {
  var eventId = req.params.event;

  Committer.find({eventToAttend: eventId}, function(err, committers) {
    if(err) res.status(500).json({msg: 'Server error: could not get Comitters'});
    else res.json({msg: 'Committers array recieved', committers: committers});
  });
}
