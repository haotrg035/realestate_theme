document.addEventListener('DOMContentLoaded', () => {
  $('.product-detail__images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    asNavFor: '.product-detail__gallery',
  });
  $('.product-detail__gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-detail__images',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 6
        }
      }
    ]
  });
  $('.product-related-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  });
})