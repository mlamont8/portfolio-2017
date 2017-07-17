$(function() {
    //caches a jQuery object containing the header element
    var header = $("#header_nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            header.removeClass('.nonActive').addClass("active");
        } else {
            header.removeClass("active").addClass('nonActive');
        }
    });
});



    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.pImg').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

$(document).ready(function(){
    $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
});
