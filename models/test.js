/**
 * Created by admin on 2016/07/06
 */
'use strict';
var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var ObjectId  = Schema.ObjectId;
var base = require("./base");

var testSchema = new Schema({
  name: String,
  pass: String
})

testSchema.plugin(base);
mongoose.model('Test', testSchema);
