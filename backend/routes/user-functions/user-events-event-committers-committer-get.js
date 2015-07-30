var Committer = require('../../models/Committer');

module.exports = function (req, res) {
  var committerId = req.params.committer;

  Committer.findById(committerId, function(err, committer) {
    if (err) res.status(500).json({msg: 'Server Error: cannot find committer'});
    else res.json(committer);
  });
}
