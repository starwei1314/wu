var menuLi = $('.logo>ul>li');
var currentLi = ''; //事件触发是否为当前元素
menuLi.mouseenter(function(e) {
    $(this).addClass('activing').siblings().removeClass('activing')
    $(this).children('.content-item').show()
    $('.flex-box').waterfall() //初始化瀑布流
    ecurrentLi = e.currentTarget
        //获取导航栏点击事件，二级菜单无子集则跳转页面，有子集不允许跳转
    var items = $('.content-item:visible .item')

    for (var j = 0; j < items.length; j++) {
        //有子选项则A标签跳转为空
        if ($(items[j]).children('ul').children().length != 0) {
            $(items[j]).children('h3').children('a').attr('href', "javascript:void(0)")
            $(items[j]).children('h3').addClass('disable')
            $(items[j]).children('h3').children('a').addClass('disable')
        }
    }
    items.on('click', 'h3', function() {

    })
})
menuLi.mouseleave(function() {
    $(this).removeClass('activing')
    $(this).children('.content-item').hide()
})
document.querySelector('.login').onclick = function() {
    window.location.href = '';
}




// 瀑布流插件
$.fn.waterfall = function(options) {
    var df = {
        item: '.item',
        margin: 30,
        addfooter: false
    };
    options = $.extend(df, options);
    return this.each(function() {
        var $box = $(this),
            pos = [],
            _box_width = $box.width(),
            $items = $box.find(options.item),
            _owidth = $items.eq(0).outerWidth() + options.margin,
            _oheight = $items.eq(0).outerHeight() + options.margin,
            _num = Math.floor(_box_width / _owidth);
        (function() {
            var i = 0;
            for (; i < _num; i++) {
                pos.push([i * _owidth, 0]);
            }
        })();
        $items.each(function() {
            var _this = $(this),
                _temp = 0,
                _height = _this.outerHeight() + options.margin;
            _this.hover(function() {
                _this.addClass('hover');
            }, function() {
                _this.removeClass('hover');
            });
            for (var j = 0; j < _num; j++) {
                if (pos[j][1] < pos[_temp][1]) {
                    //暂存top值最小那列的index
                    _temp = j;
                }
            }
            this.style.cssText = 'left:' + pos[_temp][0] + 'px; top:' + pos[_temp][1] + 'px;';
            //插入后，更新下该列的top值
            pos[_temp][1] = pos[_temp][1] + _height;
        });
        // 计算top值最大的赋给外围div
        (function() {
            var i = 0,
                tops = [];
            for (; i < _num; i++) {
                tops.push(pos[i][1]);
            }
            tops.sort(function(a, b) {
                return a - b;
            });
            $box.height(tops[_num - 1]);
            //增加尾部填充div
            if (options.addfooter) {
                addfooter(tops[_num - 1]);
            }
        })();

        function addfooter(max) {
            var addfooter = document.createElement('div');
            addfooter.className = 'item additem';
            for (var i = 0; i < _num; i++) {
                if (max != pos[i][1]) {
                    var clone = addfooter.cloneNode(),
                        _height = max - pos[i][1] - options.margin;
                    clone.style.cssText = 'left:' + pos[i][0] + 'px; top:' + pos[i][1] + 'px; height:' + _height + 'px;';
                    $box[0].appendChild(clone);
                }
            }
        }
    });
}