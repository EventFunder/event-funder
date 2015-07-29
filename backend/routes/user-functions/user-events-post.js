var Event = require('../../models/Event');

module.exports = function(req, res) {

  var eventPost = new Event({
    name: req.body.name,
    date: req.body.date,
    description: req.body.description,
    cost: req.body.cost,
    amtRaised: 0,
    owner: req.username
  });
  eventPost.save(function(err) {
    if(err) res.status(500).json({msg: 'Server error: Cannot save event'});
    else res.json({msg: 'Event has been saved'});
  });
}
