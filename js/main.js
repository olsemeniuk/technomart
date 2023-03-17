$(function() {

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev slider-arrow" type="button"><span class="visually-hidden">Предыдущий слайд</span></button>',
    nextArrow: '<button class="slick-next slider-arrow" type="button"><span class="visually-hidden">Следующий слайд</span></button>',
    fade: true,
    autoplay: true,
  });

});
