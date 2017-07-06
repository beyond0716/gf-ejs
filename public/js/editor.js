document.addEventListener('DOMContentLoaded',function () {
  UE.Editor.prototype._bkGetActionUrl=UE.Editor.prototype.getActionUrl;
  UE.Editor.prototype.getActionUrl=function getActionUrl(action) {
    if(action==='uploadimage'){
      // debugger
      return '/api/ue/uploadimg';

    }else if(action==='catchimage'){
      return '/api/ue/replaceimg';
    }
    return this._bkGetActionUrl(action);
  }
});