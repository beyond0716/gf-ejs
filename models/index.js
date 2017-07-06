/**
 * Created by admin on 2016/07/06
 */
'use strict';
var mongoose = require('mongoose');
var config = require('config').db;

mongoose.Promise = require('bluebird');
// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://'+config.host+'/'+config.dbname, {server: {poolSize: 20}}, function (err) {
 if (err) {
 process.exit(1);
 }
 })

/*var db = mongoose.connect(config.db);
db.connection.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
  console.log("——数据库连接成功！——");
});*/

// models
require('./test');
require('./curd');
require('./user');
require('./topic');
require('./article');

exports.Test = mongoose.model('Test');
exports.Curd = mongoose.model('Curd');
exports.User = mongoose.model('User');
exports.Topic = mongoose.model('Topic');
exports.Article = mongoose.model('Article');