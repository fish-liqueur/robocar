$(window).load(function() {
//
// var invSliderSelector = function () {
//
// }

    $('.involvement__slide').on("mouseenter", function() {
        $(this).addClass('involvement__slide-active');
        $(this).removeClass('involvement__slide-inactive');
        $(this).siblings().removeClass('involvement__slide-active');
        $(this).siblings().addClass('involvement__slide-inactive');
    });

    // Slider for partners
    $('.loading__slider').slick({
        autoplaySpeed: 4000,
        autoplay: true,
        cssEase: 'linear',
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        prevArrow: '<div class="loading-slider__prev"></div>',
        nextArrow: '<div class="loading-slider__next"></div>'
    });
});
