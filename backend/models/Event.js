'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  name: {type: String, required: 'Event name required'},
  date: {type: String, required: 'Event date required'},
  description: {type: String, required: 'Event date required'},
  cost: {type: Number, required: 'Event date required'},
  amtRaised: {type: Number, required: 'Event date required'},
  commits: {type: Schema.Types.ObjectId, ref: 'Committer'}
});