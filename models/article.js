/**
 * Created by admin on 2016/07/06
 */
'use strict';
var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var ObjectId  = Schema.ObjectId;
var base = require("./base");

var articleSchema = new Schema({
  title: String,
  content: String
})

articleSchema.plugin(base);
mongoose.model('Article', articleSchema);
