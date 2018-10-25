(function($){
    "use strict";

    function Zoom() {
        var winHeight = $(window).height();
        var zoom = 1;
        var transform = 1;
        var bodyMaxHeight = 1331;
        zoom = winHeight/bodyMaxHeight;
        $('#Zoom').css({
            'zoom': zoom,
            'transform': zoom,
        });
    }

    // Zoom Web on in browser
    Zoom();
    $(window).resize(function() {
        Zoom();
    });

    // Slider Rewards
    $('.kl_autoplay').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });
})(jQuery); // End of use strict