$(document).ready(function () {

    $('.cocoen').cocoen();

    $('.js-slider-slick').slick({
        dots: false,
        autoplay: false,
        infinite: true,
        draggable: false,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<img class="arr-prev" src="assets/img/ic-arr-prev.png">',
        nextArrow: '<img class="arr-next" src="assets/img/ic-arr-next.png">'
    });

    $('.js-slider-multiple').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<img class="arr-left" src="assets/img/ic-prize-left.png">',
        nextArrow: '<img class="arr-right" src="assets/img/ic-prize-right.png">',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    $('ul.roundabout').roundabout({
        btnNext: ".next",
        btnPrev: ".prev"
    });

    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        padding: 0
    });
});