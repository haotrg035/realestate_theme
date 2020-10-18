document.addEventListener('DOMContentLoaded', () => {
  $('.product-detail__images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots:true,
    asNavFor: '.product-detail__gallery'
  });
  $('.product-detail__gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-detail__images',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });
})