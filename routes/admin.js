/**
 * Created by admin on 2016/07/06 
 */
'use strict';
var admin = require('../controllers/admin');

module.exports=function (app) {
  app.get('/admin',admin.index);
}
