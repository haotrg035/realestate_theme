document.addEventListener("DOMContentLoaded", () => {
  (function () {
    let featuredSlider = document.querySelector(
      ".page-featured-products__inner .inner__slider"
    );

    if (featuredSlider !== null) {
      $(featuredSlider).slick({
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
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

  (function () {
    let projectSliders = document.querySelector(".page-projects .project-list");

    if (projectSliders !== null) {
      $(projectSliders).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 0,
            settings: {
              arrows: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              arrows: true,
            }
          }
        ]
      });
    }
  })();

  (function () {
    let searchtagsSlider = document
      .querySelector(".page-search-tags .search-tag-list");
    if (searchtagsSlider !== null) {
      $(searchtagsSlider).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        rows: 2,
        arrows: false,
      });
    }
  })();

  (function () {
    let staffList = document
      .querySelector(".page-staff .staff-list");
    if (staffList !== null) {
      $(staffList).slick({
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
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
            breakpoint: 761,
            settings: {
              centerMode: false,
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              centerMode: false,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              centerMode: false,
            }
          }
        ]
      });
    }
  })();

  (function () {
    let partnerSlider = document
      .querySelector(".page-partners .partner-list");
    if (partnerSlider !== null) {
      $(partnerSlider).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 7
            }
          },
        ]
      });
    }
  })();

  (function () {
    let postSlider = document
      .querySelector(".page-news .news-list");
    if (postSlider !== null) {
      $(postSlider).slick({
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 0,
            settings: "unslick"
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      })
    }
  })();

  (function () {
    $('[data-fancybox="page-gallery"]').fancybox();
  })();
});
