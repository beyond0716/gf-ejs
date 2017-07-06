/**
 * Created by admin on 2016/07/06
 */
'use strict';
var models  = require('../models');
var User    = models.User;

exports.newAndSave = function (name, pass, email, callback) {
  var user         = new User();
  user.name        = name;
  user.pass        = pass;
  user.email       = email;

  user.save(callback);
};

exports.getUserByName = function (name, callback) {
  User.findOne({'name': new RegExp('^'+name+'$', "i")}, callback);
};

exports.getUserByQuery=function (query,callback) {
  User.find(query,callback);
}

