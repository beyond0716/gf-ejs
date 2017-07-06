/**
 * Created by admin on 2016/07/06
 */
'use strict';
/*var validator = require('validator');
var eventproxy       = require('eventproxy');
var Curd         = require('../../proxy').Curd;*/

/*exports.index=function (req,res,next) {
  Curd.getCurds(function (err,doc) {
    console.log(doc);
    res.render('web/curd/index',{title:'CURD',result:doc});
  })
}*/

exports.showCreate=function (req,res,next) {
  res.render('web/article/create',{title:'Create'});
}

/*exports.create=function (req,res,next) {
  var title=req.body.title;
  var content=req.body.content;
  Curd.create(title,content,function (err,doc) {
    res.redirect("/curd");
  });
  
}

exports.showDelete=function (req,res,next) {
  Curd.getCurds(function (err,doc) {
    console.log(doc);
    res.render('web/curd/delete',{title:'CURD',result:doc});
  })
}

exports.delete=function (req,res,next) {
  var id=req.body.topic;
  Curd.delCurd(id,function (err,rel) {
    console.log(rel);
    res.redirect("/curd");
  })
}

exports.showUpdate=function (req,res,next) {
  Curd.getCurds(function (err,doc) {
    console.log(doc);
    res.render('web/curd/update',{title:'CURD',result:doc});
  })
}

exports.update=function (req,res,next) {
  var num=req.body.num;
  var title=req.body.title[num];
  var content=req.body.content[num];
  var id=req.body._id[num];
  var conditions={_id:id};
  var update={$set:{title:title,content:content}};
  Curd.updateCurd(conditions,update,function (err) {
    if(err){
      console.log(err);
    }else{
      console.log("更新成功！");
      res.redirect("/curd");
    }
  })
  
}

exports.showRetrieve=function (req,res,next) {
  res.render('web/curd/retrieve',{title:'CURD',result :null});
}

exports.retrieve=function (req,res,next) {
  var retrieveType = req.body.retrieve_type,
      keyWord = req.body.keyword;
  if (retrieveType == 0) {
    var conditions={title:keyWord};
    Curd.retrieveCurd(conditions,function (err,doc) {
      if(err){
        return console.log(err);
      }
      console.log(doc);
      res.render('web/curd/retrieve',{title:'CURD',result:doc});
    })
  } else {
    var conditions={content:keyWord};
    Curd.retrieveCurd(conditions,function (err,doc) {
      if(err){
        console.log(err);
      }
      console.log(doc);
      res.render('web/curd/retrieve',{title:'CURD',result:doc});
    })
  }
}*/
