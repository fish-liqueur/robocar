$(window).load(function() {

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