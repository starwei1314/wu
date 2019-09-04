//头部公共代码
var headerHtml = '';
var headerTop = '';
headerTop += '<div class="clearfix top_head w ">';
headerTop += '<ul class="clearfix fr ">';
headerTop += '<li class="fr"><a href="#">相关链接</a></li>';
headerTop += '<li class="fr"><a href="#">旧版入口</a></li>';
headerTop += '<li class="fr"><a href="#">工作网</a></li>';
headerTop += '<li class="fr"><a href="#">English</a></li>';
headerTop += '</ul>';
headerTop += '</div>';
headerHtml += '<div class="clearfix w  logo"><img src="images/logo.png">';
headerHtml += '<div class="login fr">登录我的图书馆</div>'
headerHtml += '<ul class="clearfix fr">';
headerHtml += '<li class="fr"><a href="#">阅读与活动</a></li>';
headerHtml += '<li class="fr"><a href="#">科研支持</a></li>';
headerHtml += '<li class="fr"><a href="#">学习支持</a></li>';
headerHtml += '<li class="fr"><a href="#">借阅服务</a></li>';
headerHtml += '<li class="fr activing"><a href="#">资源</a></li>';
headerHtml += '<li class="fr"><a href="#">概况</a></li>';
headerHtml += '</ul>';
headerHtml += '</div>';
//底部公共代码
var footerHtml = '';
footerHtml += '<div class="w">';
footerHtml += '<ul class="clearfix">';
footerHtml += '<li class="fl"><img src="images/logo.png"></li>';
footerHtml += '<li class="fr"><img src="images/erweima.png"><p>微信公众号</p></li>';
footerHtml += '<li class="fr"><img src="images/erweima.png"><p>关注微博</p></li>';
footerHtml += '<li class="fr"><img src="images/erweima.png"><p>移动图书馆</p></li>';
footerHtml += '</ul>';
footerHtml += '<div class="foot_bottom clearfix">'
footerHtml += '<span class="fl">地址：湖北省武汉市武昌区八一路299号　</span>'
footerHtml += '<span class="fl">邮编：430072</span>'
footerHtml += '<span class="fl">邮箱：@lib.whu.edu.cn</span>'
footerHtml += '<span class="fr">Copyright © 2013-2019 武汉大学图书馆 版权所有</span>'
footerHtml += '</div>'
footerHtml += '</div>'

$('.head_top').html(headerTop);
$(".header").html(headerHtml);
$('.footer').html(footerHtml);