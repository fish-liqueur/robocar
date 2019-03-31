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

    // Popup
    $('.js-login, .js-reg, .js-password').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        preloader: false,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    $('.popup__ok').click(function() {
        $.magnificPopup.instance.close();
    });

    // Ниже 2 скрипта - чисто для посмотреть. На самом деле они должны вызываться аяксом
    $('#registration_popup form').on('submit', function(e) {
        e.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '#thanx_popup'
            },
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            preloader: false,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
        }, 0);
    });

    $('#password_popup form').on('submit', function(e) {
        e.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '#notice_popup'
            },
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            preloader: false,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
        }, 0);
    });

});
