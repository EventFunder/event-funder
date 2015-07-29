'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var committerSchema = new Schema({
  name: {type: String, required: 'Name required'},
  amount: {type: Number, required: 'Amount required'},
  eventToAttend: {type: Schema.Types.ObjectId, ref: 'Event'}
});

//type: String, required: 'Need to attend an event'

module.exports = mongoose.model('Committer', committerSchema);
