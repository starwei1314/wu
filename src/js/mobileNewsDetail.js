document.querySelector('.btn').onclick = function() {
    $(".tabSide").slideToggle(500)
    $(".tabSide .navContent").hide()
    $(".tabSide .subNav").removeClass('currentDt')

}