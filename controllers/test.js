/**
 * Created by admin on 2016/07/06
 */
'use strict';
var Test         = require('../proxy').Test;

exports.create=function (req,res,next) {
  Test.create();
  res.send("dff");
}
