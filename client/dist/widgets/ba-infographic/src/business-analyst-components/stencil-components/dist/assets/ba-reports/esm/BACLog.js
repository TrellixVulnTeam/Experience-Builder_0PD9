var BACLog=function(){function o(){}return o.log=function(o,n){if(console.log("=======>"+this._logClass+"|"+o),n&&n.length)for(var l=0;l<n.length;l++)console.log("..."+n[l])},o._isDebug=!1,o.classname="",o}();export default BACLog;