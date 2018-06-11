/*
    Steven Tran, 2018
    navbar.js contains functions to support portfolio navigation
*/
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top)
        $('#nav').addClass('sticky');
    else
        $('#nav').removeClass('sticky');
}

$(function() {
    //Calls to make navbar stick to top
    $(window).scroll(sticky_relocate);
    sticky_relocate();
    //Scrolls to selected nav item
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - $(".navbar").height())
                }, 1000);
                return false;
            }
        }
    });
});