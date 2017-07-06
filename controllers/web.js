/**
 * Created by admin on 2016/07/06
 */
'use strict';
module.exports={
  index:index,
  test:test,
  block:block,
  ueditor:ueditor
}

function index(req,res,next) {
  res.render('web/index', { title: 'Index', muppets: [ 'Kermit', 'Fozzie', 'Gonzo' ] });
}

function test(req,res,next) {
  res.render('web/study/test', { title: 'Test',supplies:	['mop', 'broom', 'duster']});
}

function block(req,res,next) {
  res.render('web/study/block', {title:"Block"});
}

function ueditor(req, res, next) {
  res.render('web/study/ueditor',{ title: 'Ueditor'});
}
