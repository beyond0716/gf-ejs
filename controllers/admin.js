/**
 * Created by admin on 2016/07/06
 */
'use strict';
module.exports={
  index:index
}
function index(req,res,next) {
  res.render('admin/index', { what: 'Admin'});
}