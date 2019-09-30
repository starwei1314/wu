$('.banner-mao').on('click', 'li', function() {
        $(this).addClass('now')
        $(this).siblings().removeClass('now')
    })
    //

//搜索栏运行
/*----------------------------------
        点击展开移出区域隐藏列表
  ----------------------------------*/
//外层select框
var oDropDown = $('.select');
//选择列表项
var oChangeA = $('.listA');
oDropDown.click(function() {
    $(this).find('.selectList').toggle().siblings('.xl-icon').toggleClass('sq-icon');

});

oDropDown.mouseleave(function() {
    $(this).find('.selectList').hide().siblings('.xl-icon').removeClass('sq-icon');
});

oChangeA.click(function() {
    var oVal = $(this).text();
    $(this).parents('.listA-all').parents('.selectList').siblings('.selectVal').text(oVal).siblings('.xl-icon').toggleClass('sq-icon');
});

function search() {

}