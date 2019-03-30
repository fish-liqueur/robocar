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
