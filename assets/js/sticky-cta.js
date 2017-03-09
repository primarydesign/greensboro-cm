$(window).scroll(function () {
    if( $(window).scrollTop() > $('#stickyheader').offset().top && !($('#stickyheader').hasClass('fixed'))){
    $('#stickyheader').addClass('fixed');
    } else if ($(window).scrollTop() == 0){
    $('#stickyheader').removeClass('fixed');
    }
});