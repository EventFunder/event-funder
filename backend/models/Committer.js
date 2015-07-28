'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var committerSchema = new Schema({
  name: {type: String, required: 'Name required'},
  amount: {type: Number, required: 'Amount required'}
});


module.exports = mongoose.model('Committer', committerSchema);
