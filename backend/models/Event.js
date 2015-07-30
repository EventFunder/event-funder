'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  name: {type: String, required: 'Event name required'},
  date: {type: String, required: 'Event date required'},
  description: {type: String, required: 'Event description required'},
  cost: {type: Number, required: 'Event cost required'},
  amtRaised: {type: Number, required: 'Event amtRaised required'},

  owner: {type: String, required: true}
  // commits: {type: Schema.Types.ObjectId, ref: 'Committer'}
});

eventSchema.methods.getUpdatedEventObj = function (req) {

  return {
    name:req.body.name || this.name,
    date:req.body.date || this.date,
    description: req.body.description || this.description,
    cost: req.body.cost || this.cost
  }
}

module.exports = mongoose.model('Event', eventSchema);
