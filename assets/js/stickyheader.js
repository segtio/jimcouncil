$(window).scroll(function(){
    if( $('.header-dark').hasClass("top")){
        if ($(window).scrollTop() >= 135) {
            $('.header-dark').addClass('fixed-header');
        }
        else {
            $('.header-dark').removeClass('fixed-header');
        }
    }else {
        if ($(window).scrollTop() > $(window).height() - 90) {
            $('.header-dark').addClass('fixed-header').removeClass("menu-bottom");
        }
        else {
            $('.header-dark').removeClass('fixed-header').addClass("menu-bottom");
        }
    }
});