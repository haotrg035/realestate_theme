(function () {
  let featuredListElement = document.querySelector('.featured-product-list');

  if (featuredListElement !== null) {
    $(featuredListElement).slick({
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      centerMode: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            centerMode: false,
            autoplay: true,
            arrows: true
          }
        },
        {
          breakpoint: 1219,
          settings: {
            slidesToShow: 4,
            centerMode: false,
            autoplay: true,
            arrows: true
          }
        }
      ]
    });
  }
})();