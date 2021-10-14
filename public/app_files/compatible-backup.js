// IE8 以及以下的升级引导

(function() {
  var ui = {
    styleStr:
      ".iefix-btn a,.iefix-con,.iefix-icon-close,.iefix-icon-ff,.iefix-icon-qq,.iefix-icon-tab,.iefix-icon-up{display:inline-block;vertical-align:middle}.iefix-mask{position:fixed;top:0;left:0;bottom:0;right:0;z-index:999;background:#000;opacity:0.8;filter:alpha(opacity=80)}.iefix-wrap{width:580px;height:400px;position:fixed;left:50%;top:50%;margin:-225px 0 0 -290px;background:#2277da;z-index:1000;text-align:center}.iefix-con{width:360px;padding-top:40px}.iefix-title{color:#fff;font-size:24px;font-weight:400;padding-top:20px}.iefix-txt{color:#a7c9f0;padding-top:15px;line-height:1.8}.iefix-btn{padding:30px 0}.iefix-btn a{width:150px;height:30px;padding-top:10px;border:1px solid #fff;color:#fff;margin-right:10px}.iefix-btn a:hover{background:#fff;color:#2277da}",
    htmlStr:
      '<div class="iefix"><div class="iefix-mask"></div><div class="iefix-wrap"><div class="iefix-con"><h1 class="iefix-title">请升级您的浏览器</h1><p class="iefix-txt"> 尊敬的用户，我们强烈建议您升级浏览器获得更安全的网络环境和更好的用户体验</p><div class="iefix-btn"> <a href="http://browser.qq.com" target="_blank" rel="noopener noreferrer" > <span>QQ浏览器</span> </a> <a href="https://www.mozilla.org/zh-CN/firefox/new" target="_blank" rel="noopener noreferrer" > <span>火狐浏览器</span> </a></div></div></div></div>'
  };

  var _isIELessThan9 = function() {
    var div = document.createElement("div");
    div.innerHTML = "<!--[if lt IE 9]><i></i><![endif]-->";
    return div.getElementsByTagName("i").length === 1;
  };

  var _bindWindowOnload = function() {
    if (_isIELessThan9()) {
      var body = document.getElementsByTagName("body")[0];
      var div = document.createElement("div");
      div.innerHTML = ui.htmlStr;
      body.appendChild(div);

      var head = document.getElementsByTagName("head")[0];
      var style = document.createElement("style");
      head.appendChild(style);

      style.type = "text/css";
      if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = ui.styleStr;
      }
    }
  };

  window.onload = function() {
    _bindWindowOnload();
  };
})(window);
