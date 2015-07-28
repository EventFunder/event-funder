'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type: String, unique: true, match: /^[a-zA-Z0-9]+$/, required: 'username required'},
  password: {type: String, required: 'username required'},
  // events: {type: Schema.Types.ObjectId, ref: 'Event'}
});

module.exports = mongoose.model('User', userSchema);
