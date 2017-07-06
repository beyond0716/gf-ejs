require('./common/global');
var express = require('express');
var ejs = require('ejs');
var favicon = require('serve-favicon');
// var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var engine = require('ejs-mate');
var session = require('express-session');
var ueditor = require("ueditor");

var web = require('./routes/web');
var admin = require('./routes/admin');
var api = require('./routes/api');

var finallyResponse = require('./middlewares/finally-response');

var app = express();
app.use(logger.log4js.connectLogger(logger,config.log));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// app.engine('html',ejs.__express); // or app.engine("html",require("ejs").renderFile);
app.engine('html', engine);
// app.locals._layoutFile = 'layout.html';


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(config.static.public,{maxAge:config.static.maxAge}));
fse.ensureDirSync(config.static.images);
app.use(express.static(config.static.images));
// app.use(session({secret: 'secret',cookie:{maxAge: 1000*60*30}}));
app.use(session({secret: 'secret',cookie:{maxAge: 0}}));

/*app.use(function(req,res,next){
  res.locals.user = req.session.user;   // 从session 获取 user对象
  var err = req.session.error;   //获取错误信息
  delete req.session.error;
  res.locals.message = "";   // 展示的信息 message
  if(err){
    res.locals.message = '<div class="alert alert-danger" style="margin-bottom:20px;color:red;">'+err+'</div>';
  }
  next();  //中间件传递
});*/

web(app);
admin(app);
app.use('/api', api);



/*var ueditor = require('ueditor-nodejs');
app.use('/ueditor/ue', ueditor({
  configFile: '/ueditor/php/config.json',
  mode: 'local',
  staticPath: path.join(__dirname, 'public'),
  dynamicPath: '/blogpicture'
}));*/


// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/

// error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/

app.use(finallyResponse({format:'JSON'}));
module.exports = app;
