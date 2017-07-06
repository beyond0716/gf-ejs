'use strict';
var statusToCode=require('./defines').statusToCode;
var utils=require('../../utils');

module.exports = function finallyResponse(options) {
  return function (result, req, res, next) {
    if(utils._.isError(result)){
      result={
        status:'error',
        err:result
      };
    }
    var final=statusToCode[result.status];
    if(!final){
      throw new Error('result.status undefined!');
    }

    var err = result.err;
    var desc=final.desc;
    var msg = result.msg;
    var url = req.url;
    var view = result.view || final.view;

    if(utils._.isObject(err)){
      logger.error('request url is '+ req.url);
      logger.error('\nError begin','\n',err,'\n',url,'\n','Warn end');
    }else if(utils._.isString(err)){
      logger.error('request url is '+ req.url);
      logger.error('\nError begin','\n',err,'\n',url,'\n','Warn end');
      desc=err;
    }

    res.status(final.statusCode);

    if (view) {
      res.render(view,msg);
    } else {
      var succeed;
      if(result.succeed===false || result.succeed===true){
        succeed=result.succeed;
      }else {
        succeed=final.succeed;
      }
      var retObj={
        RetSucceed:true,
        Succeed:succeed,
        Code:result.code || final.code,
        Message:msg
      };

      if(result.format==='callback'){
        var retStr='callback(?)';
        retStr=retStr.replace(/\?/g,JSON.stringify(retObj));
        return res.send(retStr);
      }
      var format=req.query.format || 'string';
      if(format==='string'){
        return res.send(JSON.stringify(retObj));
      }else {
        return res.json(retObj);
      }
    }
  }
};