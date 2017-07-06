'use strict';
const base = [
  {statusCode: 200, succeed: true, code: 0, status: 'success', desc: undefined},
  {statusCode: 200, succeed: false, code: 1, status: 'error', desc: undefined},
  {statusCode: 200, succeed: false, code: 1, status: 'failure', desc: '失败'},
  {statusCode: 400, succeed: false, code: 2, status: 'badRequest', desc: '用户请求错误'},
  {statusCode: 400, succeed: false, code: 3, status: 'paramError', desc: '参数错误'},
  {statusCode: 500, succeed: false, code: 4, status: 'internalError', desc: '内部错误'},
  {statusCode: 403, succeed: true, code: 5, status: 'noAuth', desc: '未验证'},
  {statusCode: 403, succeed: true, code: 6, status: 'noPermission', desc: '无权限'},
  {statusCode: 403, succeed: false, code: 7, status: 'accessDenied', desc: '访问被拒绝'},
  {statusCode: 503, succeed: false, code: 8, status: 'networkError', desc: '网络错误'},
  {statusCode: 503, succeed: false, code: 9, status: 'databaseError', desc: '数据库错误'},
  {statusCode: 404, succeed: true, code: 10, status: 'apiNotExists', desc: 'api不存在', view: 'error/404'},
  {statusCode: 403, succeed: true, code: 11, status: 'apiUnsupport', desc: 'api不支持'},
  {statusCode: 403, succeed: true, code: 12, status: 'userNotActive', desc: '用户未激活'},
  {statusCode: 403, succeed: true, code: 13, status: 'userNotLogin', desc: '用户未登录'},
  {statusCode: 403, succeed: true, code: 14, status: 'userNotAuth', desc: '用户未验证'},
  {statusCode: 403, succeed: true, code: 15, status: 'userNotExist', desc: '用户不存在'},
  {statusCode: 400, succeed: true, code: 16, status: 'tokenNotExist', desc: 'token不存在'},
  {statusCode: 400, succeed: true, code: 17, status: 'tokenNotMatch', desc: 'token不匹配'}
];
const statusToCode = {};
base.forEach(function (item) {
  statusToCode[item.status] = item;
});
module.exports = {
  statusToCode
};