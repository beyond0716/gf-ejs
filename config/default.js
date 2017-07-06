'use strict';
var path = require('path');
var projectName = 'pro-ejs';
var nolog = /^\/(?:wap|css|js|common|app|img|views-build)/;
var log4jsUserAgent = false;


module.exports = {
  projectName: projectName,
  nolog: nolog,
  static:{
    public:path.join(__dirname,'../public'),
    images:'/upload/pro-ejs',
    maxAge:0
  },
  log: {
    dir: '/logs/pro-ejs',
    nolog: /\.(js|css|png|jpg|jpeg|ico|svg|gif)$/,
    format: ':remote-addr :method :url :status :response-time ms :user-agent :content-length',
    level: 'AUTO'
  }

};

