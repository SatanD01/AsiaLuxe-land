$(function () {
  const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    }
  });

  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
  });

  AOS.init();

  $('.parallax-window').parallax({imageSrc: '../images/par-bg.jpg'});
});