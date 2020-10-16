(function () {
  const doc = document.documentElement;
  const w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;
  const header = document.getElementById('site-header');
  const checkScroll = function () {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }
    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    if (curScroll > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 58) {
      //replace 58 with the height of your header in px
      header.classList.add('hide');
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };
  window.addEventListener('scroll', checkScroll);
})();

(function () {
  let fakeSearches = document.querySelectorAll('.fake-search');
  let searchToggler = document.querySelector('.search-bar-toggler');
  if (fakeSearches.length > 0) {
    for (let search of fakeSearches) {
      search.addEventListener('click', (e) => {
        e.preventDefault();
        const event = new Event('click');
        searchToggler.dispatchEvent(event);
      })
    }
  }
})();

(function () {
  let scrollToTopBtns = document.querySelectorAll('.btn-scroll-top');

  if (scrollToTopBtns.length > 0) {
    for (let btn of scrollToTopBtns) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('body').scrollIntoView();
        document.querySelector('.floating-utils')
          .classList.add('hidden')
      })
    }
  }
})();
(function () {
  let subMenuTogglers = document.querySelectorAll('.nav-sub-menu-toggler');

  if (subMenuTogglers.length > 0) {
    let subMenus = document.querySelectorAll('.nav-sub-menu');
    const showSubmenu = (el) => {
      let target = document.querySelector(el.dataset.target) || null;

      if (typeof target !== null) {
        target.classList.add('show');
      }
    };
    const hideSubmenu = (subMenu) => {
      subMenu.classList.remove('show');
    };

    for (toggler of subMenuTogglers) {
      toggler.addEventListener('click', () => showSubmenu(toggler))
    }
    for (subMenu of subMenus) {
      subMenu.querySelector('.nav-sub-menu-back')
        .addEventListener('click', () => hideSubmenu(subMenu))
    }
  }
})();

(function () {
  let siteHeader = document.querySelector('.site-header');
  let siteNav = siteHeader.querySelector('.site-header .site-nav');
  let siteNavBackdrop = siteHeader.querySelector('.site-header .site-nav-backdrop');
  let toggleSiteNavBtns = siteHeader.querySelectorAll('.site-nav-toggler');

  siteNavBackdrop.addEventListener('click', (e) => {
    siteNav.classList.remove('show');
    if (siteNav.querySelector('.nav-sub-menu.show') !== null) {
      setTimeout(() => {
        siteNav.querySelector('.nav-sub-menu.show').classList.remove('show');
      }, 300);
    }
    siteNavBackdrop.classList.remove('show');
    setTimeout(() => {
      siteHeader.classList.remove('showing-site-nav');
    }, 300)
  });
  if (toggleSiteNavBtns.length > 0) {
    for (let toggleSiteNav of toggleSiteNavBtns) {
      toggleSiteNav.addEventListener('click', () => {
        if (siteHeader.classList.contains('showing-search-bar')) {
          siteHeader.classList.remove('showing-search-bar');
          siteHeader.classList.toggle('showing-site-nav');
          document.querySelector('.floating-search').classList.remove('show');
          siteHeader.querySelector('.search-bar-toggler').classList.remove('show');
          setTimeout(() => {
            siteNav.classList.toggle('show');
            siteNavBackdrop.classList.toggle('show');
          }, 400)
        } else {
          siteNav.classList.toggle('show');
          siteNavBackdrop.classList.toggle('show');
          siteHeader.classList.toggle('showing-site-nav');
        }
      });
    }
  }
})();

(function () {
  let floatingUtils = document.querySelector('.floating-utils');
  let floatingUtilsToggler = floatingUtils.querySelector('.floating-utils-toggler');

  if (typeof floatingUtils !== null) {
    floatingUtilsToggler.addEventListener('click', e => {
      e.preventDefault();
      floatingUtils.classList.toggle('hidden')
    })
  }
  setTimeout(() => {
    floatingUtils.classList.add('hidden');
  }, 2500)
})();

(function () {
  let buttonGroups = document.querySelectorAll('.button-radio-group');
  if (buttonGroups.length > 0) {
    for (let buttonGroup of buttonGroups) {
      for (let btn of buttonGroup.querySelectorAll('.button-radio')) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          let activatingBtn = buttonGroup.querySelector('.button-radio.active');

          activatingBtn.classList.remove('active');
          activatingBtn.querySelector('input[type=radio]').checked = false;
          btn.classList.add('active');
          btn.querySelector('input[type=radio]').checked = true;
        })
      }
    }
  }
})();

(function () {
  let siteHeader = document.querySelector('#site-header');
  let floatingSearchBtn = siteHeader.querySelector('.search-bar-toggler');
  let floatingSearch = document.querySelector('.floating-search');

  if (floatingSearchBtn) {
    floatingSearchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (siteHeader.classList.contains('showing-search-bar')) {
        setTimeout(() => {
          siteHeader.classList.remove('showing-search-bar')
        }, 500)
      } else {
        siteHeader.classList.add('showing-search-bar');
      }
      floatingSearch.classList.toggle('show');
      floatingSearchBtn.classList.toggle('show');
    });
  }
  if (floatingSearch) {
    let filterPrice = floatingSearch.querySelector('.filters__price');
    let filterArea = floatingSearch.querySelector('.filters__area');

    if (filterPrice) {
      let slider = filterPrice.querySelector('#price-range-slider');
      let initConfig = slider.dataset;
      let priceInputs = [
        filterPrice.querySelector('input[name="search_price_start"]'),
        filterPrice.querySelector('input[name="search_price_end"]')
      ];
      let priceLabels = [
        filterPrice.querySelector('p.range__start'),
        filterPrice.querySelector('p.range__end')
      ];

      noUiSlider.create(slider, {
        start: [
          parseInt(initConfig.currentStart) || 1000000,
          parseInt(initConfig.currentEnd) || 100000000
        ],
        step: parseInt(initConfig.step) || 1000000,
        connect: true,
        // tooltips: true,
        format: wNumb({
          decimals: 3,
          thousand: '.',
          suffix: ' ₫'
        }),
        range: {
          'min': parseInt(initConfig.min) || 0,
          'max': parseInt(initConfig.max) || 100000000
        }
      });

      slider.noUiSlider.on('update', function (values, handle) {
        let newValue = parseInt(values[handle].replaceAll(/[^\d]/gi, ''));

        if (handle === 1) {
          if (newValue >= parseInt(initConfig.max)) {
            priceLabels[handle].innerText = values[handle] + ' +';
          } else {
            priceLabels[handle].innerText = values[handle];
          }
        } else {
          priceLabels[handle].innerText = values[handle];
        }
        priceInputs[handle].value = values[handle].replaceAll(/[^\d]/gi, '');

      });
    }

    if (filterArea) {
      let slider = filterArea.querySelector('#area-range-slider');
      let initConfig = slider.dataset;
      let areaInputs = [
        filterArea.querySelector('input[name="search_area_start"]'),
        filterArea.querySelector('input[name="search_area_end"]')
      ];
      let areaLabels = [
        filterArea.querySelector('p.range__start'),
        filterArea.querySelector('p.range__end')
      ];

      noUiSlider.create(slider, {
        start: [
          parseInt(initConfig.currentStart) || 1000000,
          parseInt(initConfig.currentEnd) || 100000000
        ],
        step: parseInt(initConfig.step) || 1000000,
        connect: true,
        // tooltips: true,
        format: wNumb({
          decimals: 3,
          thousand: '.',
          suffix: 'm²'
        }),
        range: {
          'min': parseInt(initConfig.min) || 0,
          'max': parseInt(initConfig.max) || 100000000
        }
      });

      slider.noUiSlider.on('update', function (values, handle) {
        let newValue = parseInt(values[handle].replaceAll(/[^\d]/gi, ''));

        if (handle === 1) {
          if (newValue >= parseInt(initConfig.max)) {
            areaLabels[handle].innerText = values[handle] + ' +';
          } else {
            areaLabels[handle].innerText = values[handle];
          }
        } else {
          areaLabels[handle].innerText = values[handle];
        }
        areaInputs[handle].value = values[handle].replaceAll(/[^\d]/gi, '');
      });
    }
  }
})();

(function () {
  let stackedSelects = document.querySelectorAll('.stacked-select');

  if (stackedSelects.length > 0) {
    const showSelect = (select, backdrop) => {
      select.classList.toggle('show');
      setTimeout(() => {
        backdrop.classList.toggle('show');
      }, 300)
    };

    for (let select of stackedSelects) {
      let backdrop = select.parentElement.querySelector('.stacked-select-backdrop');
      let listItem = select.querySelectorAll('.stacked-select__item');

      const changeItem = (targetItem, isSelected = true) => {
        targetItem.querySelector('input[type=radio]').checked = isSelected;
        if (isSelected) {
          targetItem.classList.add('selected');
        } else {
          targetItem.classList.remove('selected');
        }
      };

      if (listItem.length > 0) {
        for (let item of listItem) {
          item.addEventListener('click', () => {
            changeItem(select.querySelector('.selected'), false);
            changeItem(item, true);
            showSelect(select, backdrop);
          });
        }
      }

      backdrop.addEventListener('click', () => {
        showSelect(select, backdrop);
      });
    }
  }
})();

(function () {
  let inputQuantities = document.querySelectorAll('.quantity-input');

  if (inputQuantities.length > 0) {
    for (let element of inputQuantities) {
      let numberInput = element.querySelector('input[type=number]');
      for (let button of element.querySelectorAll('.quantity-input__btn')) {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          let currentValue = parseInt(numberInput.value);
          if (button.classList.contains('btn--plus')) {
            numberInput.value = currentValue + 1;
          } else {
            if (currentValue > 1) {
              numberInput.value = currentValue - 1;
            }
          }
          console.log(numberInput.value);
        });
      }
    }
  }
})();

(function () {
  let customModals = document.querySelectorAll('.custom-modal');

  if (customModals.length > 0) {
    customModals.forEach((modal, index) => {
      modal.querySelector('.custom-modal__backdrop').addEventListener('click', () => {
        modal.classList.remove('show');
      });
    });
  }
})();
(function () {
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.querySelector('body').classList.remove('loading');
    }, 500);
  });
  setTimeout(function () {
    document.querySelector('.page-loading-content').classList.add('hidden');
    setTimeout(function () {
      document.querySelector('.page-loading-content').classList.add('disabled');
    }, 500);
  }, 800);
})();

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    let previewBtns = document.querySelectorAll('.product-card__btn-preview');

    if (previewBtns.length > 0) {
      let modalPreview = document.getElementById('modal-previewing-product');
      let imageGallery = modalPreview.querySelector('.product-gallery');
      let modalPreviewDesc = modalPreview.querySelector('.product-info__desc');

      $(imageGallery).slick({
        prevArrow: '<button class="nav-prev"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
        nextArrow: '<button class="nav-next"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule = "evenodd" d = "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" / ></svg></button>',
      });
      modalPreviewDesc.querySelector('.desc__expand').addEventListener('click', (e) => {
        e.preventDefault();
        modalPreviewDesc.classList.add('expand');
      })

      modalPreview.querySelector('.custom-modal__close-btn').addEventListener('click', () => {
        modalPreview.classList.remove('show');
      })

      previewBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
          modalPreview.classList.add('show');
        })
      });
    }
  });
})();

(function () {
  let footerSearchTagSliders = document
    .querySelectorAll(".page-footer__item--searchtag .searchtag-list");
  if (footerSearchTagSliders.length > 0) {
    footerSearchTagSliders.forEach((slider, index) => {
      $(slider).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        rows: 2,
        arrows: false,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              centerMode: false
            }
          },
        ]
      });
    })
  }
})();

(function () {
  $('[data-toggle="tooltip"]').tooltip()
})();