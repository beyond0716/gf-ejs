/**
 * Created by admin on 2016/07/06
 */
'use strict';
var web = require('../controllers/web');
var article = require('../controllers/page/article');
/*var test = require('../controllers/test');
var curd = require('../controllers/curd');
var user = require('../controllers/user');
var topic = require('../controllers/topic');*/

module.exports=function (app) {
  app.get('/',web.index);
  app.get('/test',web.test);
  app.get('/block',web.block);
  app.get('/ue', web.ueditor);

  /*用户*/
  /*app.get('/user',user.index);
  app.get('/signup', user.showSignup);
  app.post('/signup', user.signup);
  app.get('/login',user.showLogin);
  app.post('/login',user.login);
  app.get('/logout',user.logout);
  app.get('/setting',user.setting);

  /*主题*/
  /*app.get('/topic/create', topic.create);
  app.post('/topic/create', topic.put);*/
  
  /*测试*/
  // app.get('/test/create', test.create);
  
  /*增删改查*/
  /*app.get('/curd', curd.index);
  app.get('/curd/create', curd.showCreate);
  app.post('/curd/create', curd.create);
  app.get('/curd/delete', curd.showDelete);
  app.post('/curd/delete', curd.delete);
  app.get('/curd/update', curd.showUpdate);
  app.post('/curd/update', curd.update);
  app.get('/curd/retrieve', curd.showRetrieve);
  app.post('/curd/retrieve', curd.retrieve);*/

  app.get('/article/create', article.showCreate);
}