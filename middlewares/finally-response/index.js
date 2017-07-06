'use strict';
var statusToCode=require('./defines').statusToCode;
var utils=require('../../utils');

module.exports = function finallyResponse(options) {
  options=options || {};
  const defaultFormat=options.format || 'JSONString';
  return function (result, req, res, next) {
    var final=statusToCode[result.status];
    if(!final){
      throw new Error('result.status undefined!');
    }
    const succeed=final.succeed,
        code=final.code,
        desc=final.desc,
        err=result.err,
        data=result.data,
        view=result.view || final.view;
    
    if(view){
      res.render(view,data);
    }else {
      const resJSON={
        success:succeed,
        code:code,
        desc:desc,
        data:data
      };
      const format=result.format || defaultFormat;
      if(format==='JSONString'){
        res.send(JSON.stringify(resJSON));
      }else if(format==='callback'){
        let resStr='callback(?);';
        resStr=resStr.replace(/\?/g,JSON.stringify(resJSON));
        res.send(resStr);
      }else{
        res.json(resJSON);
      }
    }
    
    
    /*if(utils._.isError(result)){
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
    }*/
  }
};