function rem() {
    var fz = document.querySelector('html').offsetWidth / 19.2; //设计图 1920 1rem=100px
    document.querySelector('html').style.fontSize = fz <= 100 ? fz + 'px' : '100px';
    window.onresize = function() {
        rem();
    };
}