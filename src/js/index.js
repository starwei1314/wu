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


//书本轮播组件

var slider = $('.mis-stage').miSlider({
    //  The height of the stage in px. Options: false or positive integer. false = height is calculated using maximum slide heights. Default: false
    stageHeight: 330,
    //  Number of slides visible at one time. Options: false or positive integer. false = Fit as many as possible.  Default: 1
    slidesOnStage: false,
    //  The location of the current slide on the stage. Options: 'left', 'right', 'center'. Defualt: 'left'
    slidePosition: 'center',
    //  The slide to start on. Options: 'beg', 'mid', 'end' or slide number starting at 1 - '1','2','3', etc. Defualt: 'beg'
    slideStart: 'mid',
    //  The relative percentage scaling factor of the current slide - other slides are scaled down. Options: positive number 100 or higher. 100 = No scaling. Defualt: 100
    slideScaling: 150,
    //  The vertical offset of the slide center as a percentage of slide height. Options:  positive or negative number. Neg value = up. Pos value = down. 0 = No offset. Default: 0
    offsetV: -5,
    //  Center slide contents vertically - Boolean. Default: false
    centerV: true,
    //  Opacity of the prev and next button navigation when not transitioning. Options: Number between 0 and 1. 0 (transparent) - 1 (opaque). Default: .5
    navButtonsOpacity: 1,
    navButtonsShow: true,
});