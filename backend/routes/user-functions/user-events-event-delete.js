var Event = require('../../models/Event');

module.exports = function (req, res) {

  var eventId = req.params.event;

  Event.findById(eventId, function(err, eventData) {
    if(err) {
      res.status(500).json({msg: 'Server error: cannot find event'});
    } else {
      if(eventData.owner === req.username) {
        deleteEvent(eventId, req)
      } else {
        res.status(403).json({msg: 'You are not authorized to update this file'});
      }
    }
  })

  function deleteEvent(eventId, req) {

    Event.findByIdAndRemove(eventId, function(err, data) {
      if(err) {
        res.status(500).json({msg:'Server error: cannot remove event'});
      } else {
        res.json({msg:'Event successfully deleted', data: data});
      }
    })
  }
}
