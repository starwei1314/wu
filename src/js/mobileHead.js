document.querySelector(".logo>button").onclick = function() {
    $(this).siblings(".navSub").children('.tabLan').slideToggle(300)
}
var navList = $('.navContent')
    // 侧边栏禁止状态
for (var i = 0; i < navList.length; i++) {
    if (navList.eq(i).children().length == 0) {
        $(".subNav").eq(i).addClass("noneContent")
    }
}
var uid, fid;
//侧边栏运行

for (var i = 0; i < navList.length; i++) {
    if (navList.eq(i).children().length == 0) {
        $(".subNav").eq(i).addClass("noneContent")
    }
}
$(".tabLan").off('click', '.subNav').on('click', '.subNav', function(e) {
        e.stopPropagation()
        if (!$(this).hasClass('noneContent')) {
            $(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(500)
        } else {
            //没有子选项时页面需要跳转携带
            window.location.href = ""
        }
    })
    //由于jquery的on委托事件时在切换屏幕大小过程中会增加js不删除原有的js,导致屏幕频繁切换后事件多次执行，
    // 1.可用原生js做事件派发可解决此问题
    // 2.先使用off()销毁之后再加on()事件也可解决
$(".navContent").off().on("click", "li", function(e) {
    e.stopPropagation()
    if ($(this).children('.third').children().length != 0) {
        $(this).children(".third").slideToggle(300)
        $(this).siblings("li").children('.third').slideUp(500)
    } else {
        window.location.href = ''
    }

})
document.querySelector('.login').onclick = function() {
    window.location.href = '';
}