document.querySelector('.mobileBanner').onclick = function() {
    $(this).children().children().toggleClass('glyphicon-menu-up').toggleClass('glyphicon-menu-down')
    $('.mobileSearch').toggle(500)
}
$(".searchKuang span").off().on('click', function() {
    // 点击检索跳转检索页面
    console.log('检索页面缺失')
})