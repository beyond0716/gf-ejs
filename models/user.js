/**
 * Created by admin on 2016/07/06
 */
'use strict';
var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var ObjectId  = Schema.ObjectId;
var base = require("./base");

var userSchema = new Schema({
  name: String,
  pass: String,
  email: String
})

userSchema.plugin(base);
mongoose.model('User', userSchema);
