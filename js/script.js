$(window).load(function() {
//
// var invSliderSelector = function () {
//
// }

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


// Slider for involve block

var involvementSlideNum = 1;

$('.involvement__slide').on("mouseenter", function() {
  $(this).addClass('involvement__slide-active');
  $(this).removeClass('involvement__slide-inactive');
  $(this).siblings().removeClass('involvement__slide-active');
  $(this).siblings().addClass('involvement__slide-inactive');
  involvementSlideNum = $('.involvement__slide').index($(this)) + 1;
  setInvolvementSlideDescription();
});

$('.js-involvement__step-arr-left').click(function() {
  nextInvolvementSlide(false);
  // scroll 1 slide to the left
})

$('.js-involvement__step-arr-right').click(function() {
  nextInvolvementSlide(true);
  // scroll 1 slide to the right
})

var nextInvolvementSlide = function(forward) {
  if (forward === true) {
    if (involvementSlideNum < 4) {
      ++involvementSlideNum;
    }
  } else {
    if (involvementSlideNum > 1) {
      --involvementSlideNum;
    }
  }
  var newSlideClassName = ('.involvement__slide-' + involvementSlideNum);
  $(newSlideClassName).addClass('involvement__slide-active');
  $(newSlideClassName).removeClass('involvement__slide-inactive');
  $(newSlideClassName).siblings().removeClass('involvement__slide-active');
  $(newSlideClassName).siblings().addClass('involvement__slide-inactive');
  setInvolvementSlideDescription();
};

  // setting the text which decribes the current slide
var setInvolvementSlideDescription = function() {
  switch (involvementSlideNum) {
    case 1:
      $('.js-involvement__step-descr-text').text('1. Купите игрушку Robocar Poli в любом магазине и сохраните чек');
      break;
    case 2:
      $('.js-involvement__step-descr-text').text('2. Зарегистрируйтесь и загрузите чек покупки. 100Р — 10 баллов');
      break;
    case 3:
      $('.js-involvement__step-descr-text').html('3. Накопите 100 баллов и создайте собственный календарь. <br>Мы распечатаем его для вас!');
      break;
    case 4:
      $('.js-involvement__step-descr-text').html('4. Накопите 200 баллов и получите возможность выиграть главный приз — <br>уникальный набор подарков из Кореи');
      break;
    default:
      $('.js-involvement__step-descr-text').text('1. Купите игрушку Robocar Poli в любом магазине и сохраните чек');
  }
};

var animateButton = function(e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

});
