/**
 * Created by admin on 2016/07/06
 */
'use strict';
var models = require('../../models');
var ArticleModel = models.Article;

/**
 * 获取文章列表
 */
exports.getArticles = function (req, res, next) {
  ArticleModel.find().exec()
      .then(function (docs) {
        var articles = docs.map(function (item) {
          return {
            id: item._id,
            title: item.title,
            content: item.content
          }
        });
        return next({status: 'success', data: {total: articles.length, articles: articles}});
      })
      .catch(function (err) {
        console.error(err);
        return next({status: 'error', msg: err});
      });
}

/**
 * 获取文章信息
 */
exports.getArticle = function (req, res, next) {
  const id = req.params.id;
  ArticleModel.findOne({'_id': id}).exec()
      .then(function (article) {
        return next({status: 'success', data: article});
      })
      .catch(function (err) {
        console.error(err);
        return next({status: 'error', msg: err});
      })
}

/**
 * 添加文章
 */
exports.postArticle = function (req, res, next) {
  // 通过模型方法
  /*ArticleModel.create(req.body,function (err,post) {
   if (err) return next(err);
   res.json(post);
   });*/
  // 通过实例方法
  console.log(decodeURIComponent(req.body.content));
  var ArticleEntity = new ArticleModel({
    title: req.body.title,
    content: req.body.content
  });
  ArticleEntity.save()
      .then(function (article) {
        return next({status: 'success', data: '添加成功'});
      })
      .catch(function (err) {
        console.error(err);
        return next({status: 'error', msg: err});
      });
}

/**
 * 修改文章
 */
exports.putArticle = function (req, res, next) {
  const id = req.params.id;
  ArticleModel.findById(id).exec()
      .then(function (article) {
        article.title = 'Robert Paulson';
        return article.save();
      })
      .then(function (article) {
        console.log('updated article: ' + article.title);
        res.json(article);
      })
      .catch(function (err) {
        console.error(err);
        return next({status: 'error', msg: err});
      });
}

/**
 * 删除文章
 */
exports.deleteArticle = function (req, res, next) {
  const id = req.params.id;
  ArticleModel.remove({'_id': id})
      .then(function (doc) {
        return next({status: 'success', data: '删除成功'});
      })
      .catch(function (err) {
        console.error(err);
        return next({status: 'error', msg: err});
      })

}