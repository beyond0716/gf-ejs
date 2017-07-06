var validator        = require('validator');
var Topic         = require('../proxy').Topic;
var tools        = require('../common/tools');
var muilter = require('../common/multer');
var upload=muilter.single('cover');

exports.index = function (req, res, next) {
  res.send('topic index');
}

//sign up
exports.create = function (req, res) {
  res.render('web/topic/edit',{title:"Topic Create"});
};

exports.put = function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return  console.log(err);
    }
    var path=req.file.path;
    var tab = validator.trim(req.body.tab);
    var title = validator.trim(req.body.title);
    var top = validator.trim(req.body.top);
    var tag = req.body.tag;
    var content = validator.trim(req.body.content);

    Topic.newAndSave(tab, title, top, tag, path, content, function (err) {
      res.send('添加成功！');
    });
  });
};
