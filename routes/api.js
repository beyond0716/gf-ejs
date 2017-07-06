/**
 * Created by admin on 2016/07/06
 */
'use strict';
var express = require('express');
var router = express.Router();
var article = require('../controllers/v1/article');

var ueditorConfig = require('../public/ueditor/nodejs/config.json');

var formidable = require('formidable');


router.get('/', function (req, res, next) {
  res.send('这是web api');
});

router.get('/test', function (req, res, next) {
  // res.send('这是web api');
  return next({status: 'success',format:'JSONString', data: [{id:1,title:'a'},{id:2,title:'b'}]});
  // res.json({status: 'error', msg: err});
});

/*router.use(function(req, res, next) {
 return next();
 });*/

/**
 * 获取文章列表
 */
router.get('/articles', article.getArticles);

/*router.get('/articles', function (req,res,next) {
 return next('fdf');
 });*/

/**
 * 获取文章信息
 */
router.get('/article/:id', article.getArticle);

/**
 * 添加文章
 */
router.post('/article', article.postArticle);

/**
 * 修改文章
 */
router.put('/article/:id', article.putArticle);

/**
 * 删除文章
 */
router.delete('/article/:id', article.deleteArticle);


/**
 * 百度编辑器图片上传
 */
router.post('/ue/uploadimg', function (req, res, next) {
  const date = new Date(),
      year = date.getFullYear(),
      month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
      day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const uploadDir = config.static.images+'/images/' + year + month + day + '/';
  fse.ensureDirSync(uploadDir);
  const formConfig = {
    uploadDir: uploadDir,
    keepExtensions: true
  };
  const form = new formidable.IncomingForm(formConfig);
  //设定上传文件路径
  form.parse(req, function (error, fields, files) {
    const file = files[ueditorConfig.imageFieldName],
        filePath = file.path,
        fileName = file.name,
        fileType = file.type,
        fileSize = file.size,
        newFilename = '/images/' + year + month + day + filePath.substring(filePath.lastIndexOf('\\'));
    const json = {
      "state": "SUCCESS",
      "url": newFilename,
      "title": fileName,
      "original": fileName,
      "type": fileType,
      "size": fileSize
    };
    res.writeHead(200, {"Content-Type": "text/json"});
    res.write(JSON.stringify(json));
    res.end();
  });
});

router.post('/ue/replaceimg', function (req, res, next) {
  // console.log(res);
});

module.exports = router;