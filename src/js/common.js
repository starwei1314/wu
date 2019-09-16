//常规获取url上的参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = decodeURI(window.location.search.substr(1)).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
//根据屏幕大小加载不同的js文件
function loadJs(src) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = src;
    head.appendChild(s);
}