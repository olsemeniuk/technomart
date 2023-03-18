$(function () {

  // slider
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

  // tabs
  const tabButton = document.querySelectorAll('.tabs__button'),
        tabSection = document.querySelectorAll('.tabs__section');

  tabButton.forEach(btn => {
    btn.addEventListener('click', () => {
      for(let i = 0; i < tabButton.length; i++) {
        tabButton[i].classList.remove('tabs__button--active')
        tabButton[i].setAttribute('tabindex', '0')
      }
      btn.classList.add('tabs__button--active')
      btn.setAttribute('tabindex', '-1')

      for(let i = 0; i < tabSection.length; i++) {
        tabSection[i].classList.remove('tabs__section--active')
        if(btn.dataset.btn === tabSection[i].dataset.content) {
          tabSection[i].classList.add('tabs__section--active')
        }
      }
    })
  })

  // contact modal
  const openModal = (modalName, openButton) => {
    openButton.click(function(e) {
      e.preventDefault();
      $('.modal').removeClass('modal--active');
      modalName.addClass('modal--active');
    });
  };

  $('.modal-close').click(function () {
    $('.modal').removeClass('modal--active');
  });

  openModal($('#modal-contact'), $('.open-contact-modal'));
  openModal($('.modal-map'), $('.contacts__map'));
});

