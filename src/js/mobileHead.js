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
$(".tabLan").off('click', '.subNav').on('click', '.subNav', function() {
    if (!$(this).hasClass('noneContent')) {
        $(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(500)
    } else {
        //没有子选项时页面需要跳转携带
        window.location.href = ""
    }
})
$(".navContent").on("click", "li", function(e) {
    if ($(this).children('.third').children().length != 0) {
        $(this).children(".third").slideToggle(300)
        $(this).siblings("li").children('.third').slideUp(500)
    } else {
        window.location.href = ''
    }
    e.stopPropagation()
})
document.querySelector('.login').onclick = function() {
    window.location.href = '';
}