/**
 * Created by admin on 2016/07/06
 */
'use strict';
var eventproxy       = require('eventproxy');
var models  = require('../models');
var Test    = models.Test;

exports.create=function () {
  Test.create({
    name : "gf",
    pass  : "gffff"
  },function(err,doc){
    console.log(doc);
  });
}

exports.create=function () {
  Test.create({
    name : "gf",
    pass  : "gffff"
  },function(err,doc){
    console.log(doc);
  });
}
