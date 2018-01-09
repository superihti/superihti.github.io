$(function() {
    $(".main-header-nav__btn").click(function(e) {
        e.preventDefault();
        $(".main-header-nav").slideToggle(1000)
    });
    $(".main-header-nav__link").click(function(e) {
        e.preventDefault();
        $(".main-header-nav__link").removeClass('main-header-nav__link_activ');
        $(this).addClass('main-header-nav__link_activ');
    })
});