var validator        = require('validator');
var eventproxy       = require('eventproxy')
var User         = require('../proxy').User;
var tools        = require('../common/tools');

exports.index = function (req, res) {
  if(!req.session.user){
    req.session.error = "请先登录";
    res.redirect("/login");
  }
  res.render("web/user/index",{title:'User'});
}

exports.setting = function (req, res) {
  res.send('user setting');
}

exports.showSignup = function (req, res) {
  res.render('web/user/signup',{title:"Signup"});
}

exports.signup = function (req, res) {
  var name = validator.trim(req.body.name).toLowerCase();
  var email     = validator.trim(req.body.email).toLowerCase();
  var pass      = validator.trim(req.body.pass);
  var repass    = validator.trim(req.body.repass);

  var ep=new eventproxy();
  ep.on('err_msg',function (msg) {
    res.render('web/user/signup',{title:"Signup",error:msg,name:name,email:email});
  });
  if([name,email,pass,repass].some(function (value) {
      return value==='';
    })){
    return ep.emit('err_msg','信息不完整！');
  }
  if(name.length <= 5){
    return ep.emit('err_msg','用户名至少需要1个字符!');
  }
  if(pass != repass){
    return ep.emit('err_msg','两次密码输入不一致！');
  }
  if(!validator.isEmail(email)){
    return ep.emit('err_msg','邮箱不合法！');
  }

  User.getUserByQuery({'$or':[{'name':name},{'email':email}]},function (err,user) {
    if(err){
      return next(err);
    }
    if(user.length>0){
      return ep.emit('err_msg','用户名或邮箱已被使用！');
    }
  })

  User.newAndSave(name, pass, email, function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
}

exports.showLogin = function (req, res) {
  res.render('web/user/login',{ title: 'Login'});
}

exports.login = function (req, res) {
  var name=validator.trim(req.body.name).toLowerCase();
  User.getUserByName(name,function (err,user) {
    req.session.user = user;
    res.redirect("/user");
  })
}

exports.logout = function (req, res) {
  req.session.user = null;
  req.session.error = null;
  res.redirect("/");
}
