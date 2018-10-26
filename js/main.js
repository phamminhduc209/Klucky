(function($){
    "use strict";

    function Zoom() {
        var winHeight = $(window).height();
        var zoom = 1;
        var bodyMaxHeight = 1331;
        zoom = winHeight/bodyMaxHeight;
        $('#Zoom').css({
            'zoom': zoom,
        });
    }

    // Zoom Web on in browser
    Zoom();
    $(window).resize(function() {
        Zoom();
    });

    // Change viewport
    function ChangeWiewport() {
        if (screen.width < 750) {
            $("#viewport").attr("content", "width=750");
        }else{
            $("#viewport").attr("content", "width=device-width, initial-scale=1");
        }
    }
    ChangeWiewport();
    $(window).resize(function() {
        ChangeWiewport();
    });

    // Slider Rewards
    $('.kl_autoplay').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });
})(jQuery); // End of use strict