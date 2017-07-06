/**
 * Created by admin on 2016/07/06
 */
'use strict';
var eventproxy       = require('eventproxy');
var models  = require('../models');
var Topic    = models.Topic;

exports.create=function (callback) {
  var ep =eventproxy.create('tpl','data',function (tpl,data) {
    callback(null, {
      template: tpl,
      data: data
    });
  })
  ep.fail(callback);
}

exports.newAndSave = function (tab, title, top, tag, cover, content, callback) {
  var topic         = new Topic();
  topic.tab        = tab;
  topic.title        = title;
  topic.top        = top;
  topic.tag        = tag;
  topic.cover        = cover;
  topic.content   = content;

  topic.save(callback);
};
