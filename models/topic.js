/**
 * Created by admin on 2016/07/06
 */
'use strict';
var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var ObjectId  = Schema.ObjectId;
var base = require("./base");

var topicSchema = new Schema({
  tab: { type: String },
  title: { type: String },
  top: { type: Boolean, default: 0 },
  tag: { type: Array },
  cover: { type: String },
  content: { type: String },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

topicSchema.plugin(base);
mongoose.model('Topic', topicSchema);
