/**
 * Created by admin on 2016/07/06
 */
'use strict';
var eventproxy       = require('eventproxy');
var models  = require('../models');
var Curd    = models.Curd;

exports.getCurds=function (callback) {
  Curd.find({},callback);
}


exports.create=function (title,content,callback) {

/*
  var ep =eventproxy.create('tpl','data',function (tpl,data) {
    callback(null, {
      template: tpl,
      data: data
    });
  });
  ep.fail(callback);
*/



  var newTopic={title:title,content:content};
  Curd.create(newTopic,callback);
}

exports.delCurd=function (id,callback) {
  Curd.remove({_id:id},callback);
}

exports.updateCurd=function (conditions,update,callback) {
  Curd.update(conditions, update, callback);
}

exports.retrieveCurd=function (conditions,callback) {
  Curd.find(conditions, callback);
}



