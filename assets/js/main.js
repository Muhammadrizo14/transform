/*-----------------------------------------------------------------

Template Name: Infotek - IT Solution & Technology HTML Template<
Author:  Gramentheme
Author URI: https://themeforest.net/user/gramentheme/portfolio
Developer: Shamiul Islam Shikhon
Version: 1.0.0
Description: Infotek - IT Solution & Technology HTML Template<

-------------------------------------------------------------------
Js TABLE OF CONTENTS
-------------------------------------------------------------------

01. header
02. animated text with swiper slider
03. magnificPopup
04. counter up 
05. wow animation
06. nice select
07. swiper slider
08. team hover effect
09. search popup
10. mouse cursor
11. preloader

------------------------------------------------------------------*/

(function ($) {
  "use strict";

  $(document).ready(function () {
    //>> Mobile Menu Js Start <<//
    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "991",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    //>> Sidebar Toggle Js Start <<//
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });
    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });

    $(".sidebar__closer").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });

    //>> Body Overlay Js Start <<//
    $(".body-overlay").on("click", function () {
      $(".offcanvas__area").removeClass("offcanvas-opened");
      $(".df-search-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
    });

    //>> Sticky Header Js Start <<//

    $(window).scroll(function () {
      if ($(this).scrollTop() > 250) {
        $("#header-sticky").addClass("sticky");
      } else {
        $("#header-sticky").removeClass("sticky");
      }
    });

    //>> Hero-1 Slider Start <<//
    const sliderActive2 = ".hero-slider";
    const sliderInit2 = new Swiper(sliderActive2, {
      loop: true,
      slidesPerView: 1,
      effect: "fade",
      speed: 3000,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
    });

    function animated_swiper(selector, init) {
      const animated = function animated() {
        $(selector + " [data-animation]").each(function () {
          let anim = $(this).data("animation");
          let delay = $(this).data("delay");
          let duration = $(this).data("duration");
          $(this)
            .removeClass("anim" + anim)
            .addClass(anim + " animated")
            .css({
              webkitAnimationDelay: delay,
              animationDelay: delay,
              webkitAnimationDuration: duration,
              animationDuration: duration,
            })
            .one("animationend", function () {
              $(this).removeClass(anim + " animated");
            });
        });
      };
      animated();
      init.on("slideChange", function () {
        $(sliderActive2 + " [data-animation]").removeClass("animated");
      });
      init.on("slideChange", animated);
    }

    animated_swiper(sliderActive2, sliderInit2);
    //>> Banner Animation <<//

    //>> Video Popup Start <<//
    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".video-popup").magnificPopup({
      type: "iframe",
      callbacks: {},
    });

    //>> Counterup Start <<//
    $(".count").counterUp({
      delay: 15,
      time: 4000,
    });

    //>> Wow Animation Start <<//
    new WOW().init();

    //>> Nice Select Start <<//
    $("select").niceSelect();

    //>> Brand Slider Start <<//
    const brandSlider = new Swiper(".brand-slider", {
      spaceBetween: 30,
      speed: 1300,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

      breakpoints: {
        1199: {
          slidesPerView: 5,
        },
        991: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 3,
        },
        575: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });

    const brandSlider2 = new Swiper(".brand-slider-2", {
      spaceBetween: 30,
      speed: 1300,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

      breakpoints: {
        1199: {
          slidesPerView: 5,
        },
        991: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 3,
        },
        575: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });

    //>> Service Slider Start <<//
    const serviceSlider = new Swiper(".service-slider", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },

      breakpoints: {
        1199: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });

    const serviceSlider2 = new Swiper(".service-slider-2", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot-2",
        clickable: true,
      },

      breakpoints: {
        1199: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });

    //>> Project Slider Start <<//
    const projectSlider = new Swiper(".project-slider", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot-3",
        clickable: true,
      },
      breakpoints: {
        1199: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        650: {
          slidesPerView: 2,
        },

        575: {
          slidesPerView: 1,
        },

        0: {
          slidesPerView: 1,
        },
      },
    });

    const projectSlider2 = new Swiper(".project-slider-2", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot-2",
        clickable: true,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
      breakpoints: {
        1199: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },

        575: {
          slidesPerView: 1,
        },

        0: {
          slidesPerView: 1,
        },
      },
    });

    const projectSlider3 = new Swiper(".project-slider-3", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot-2",
        clickable: true,
      },
      breakpoints: {
        1199: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        650: {
          slidesPerView: 2,
        },

        575: {
          slidesPerView: 1,
        },

        0: {
          slidesPerView: 1,
        },
      },
    });

    //>> Testimonial Slider Start <<//
    const testimonialSlider = new Swiper(".testimonial-slider", {
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot-2",
        clickable: true,
      },
    });

    const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
      speed: 1500,
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
      breakpoints: {
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 1,
        },

        575: {
          slidesPerView: 1,
        },

        0: {
          slidesPerView: 1,
        },
      },
    });

    const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
      speed: 1500,
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
      breakpoints: {
        1199: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 1,
        },

        575: {
          slidesPerView: 1,
        },

        0: {
          slidesPerView: 1,
        },
      },
    });

    //>> News Slider Start <<//
    const newsSlider = new Swiper(".news-slider", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
      breakpoints: {
        1199: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },

        575: {
          slidesPerView: 1,
        },

        0: {
          slidesPerView: 1,
        },
      },
    });

    //>> Team Slider Start <<//
    const teamSlider = new Swiper(".team-slider", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot-2",
        clickable: true,
      },

      breakpoints: {
        1199: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });

    //>> Team Hover Image Show Slider Start <<//
    const teamItems = document.querySelectorAll(".team-items");

    function followImageCursor(event, teamItems) {
      const contentBox = teamItems.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      teamItems.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
    }

    teamItems.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, item), 1000);
      });
    });

    //>> Search Popup Start <<//
    const $searchWrap = $(".search-wrap");
    const $navSearch = $(".nav-search");
    const $searchClose = $("#search-close");

    $(".search-trigger").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate({opacity: "toggle"}, 500);
      $navSearch.add($searchClose).addClass("open");
    });

    $(".search-close").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate({opacity: "toggle"}, 500);
      $navSearch.add($searchClose).removeClass("open");
    });

    function closeSearch() {
      $searchWrap.fadeOut(200);
      $navSearch.add($searchClose).removeClass("open");
    }

    $(document.body).on("click", function (e) {
      closeSearch();
    });

    $(".search-trigger, .main-search-input").on("click", function (e) {
      e.stopPropagation();
    });

    //>> Mouse Cursor Start <<//
    function mousecursor() {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "a, .cursor-pointer", function () {
            ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
            (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }

    $(function () {
      mousecursor();
    });
  }); // End Document Ready Function

  function loader() {
    $(window).on("load", function () {
      // Animate loader off screen
      $(".preloader").addClass("loaded");
      $(".preloader").delay(600).fadeOut();
    });
  }

  loader();
})(jQuery); // End jQuery

const popup = document.querySelector(".popup");

const showPopup = () => {
  popup.style.display = "flex";
};

const hidePopup = () => {
  popup.style.display = "none";
};

document.getElementById("send-data").addEventListener("click", (e) => {
  e.preventDefault();
  const botToken = "7372431777:AAGGdMNShkmu97K4RSCY3Afixo3L7rw2JBo";
  const userId = "163880733";
  const message = `Имя пользователя: ${
    document.querySelector(".user-name").value
  }, номер: ${document.querySelector(".user-phone").value}`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: userId,
      text: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        window.location.href = 'feedback.html';

        document.querySelector(".user-name").value = "";
        document.querySelector(".user-phone").value = "";
      } else {
        alert("Failed to send message.");
      }
    })
    .catch((error) => console.error("Error:", error));
});

const numberInput = document.getElementById("calculator");

// Use the input event instead of keydown
numberInput.addEventListener("input", function (e) {
  // Validate the input to allow only numbers
  validateInput(e);

  // Format the number
  formatNumber(this);

  // Recalculate the values
  calculate();
});

function validateInput(e) {
  const keyCode = e.keyCode || e.which;
  if (
    [46, 8, 9, 27, 13, 37, 38, 39, 40].indexOf(keyCode) !== -1 ||
    (e.ctrlKey === true && [65, 67, 86, 88].indexOf(keyCode) !== -1) ||
    (keyCode >= 35 && keyCode <= 40)
  ) {
    return; // Allow specific keys
  }
  if (
    (e.shiftKey || keyCode < 48 || keyCode > 57) &&
    (keyCode < 96 || keyCode > 105)
  ) {
    e.preventDefault();
  }
}

const currencyRates = {
  usd: 0, // Example exchange rate RUB to USD
  cny: 0, // Example exchange rate RUB to CNY
};

async function fetchCurrencyRates() {
  const apiKey = '0fd592091dd93ed09d5bb220'; // Replace with your API key
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/RUB`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.result === "success") {
      currencyRates.usd = data.conversion_rates.USD;
      currencyRates.cny = data.conversion_rates.CNY;
    } else {
      console.error('Error fetching data:', data['error-type']);
    }
  } catch (error) {
    console.error('Request failed:', error);
  }
}

fetchCurrencyRates();

function formatNumber(input) {
  let value = input.value.replace(/\s+/g, "").replace(/[^0-9]/g, "");
  input.value = new Intl.NumberFormat("ru-RU").format(value);
}

function parseNumber(value) {
  return parseFloat(value.replace(/\s+/g, "").replace(/,/g, "."));
}

function calculate() {
  const amountInput = numberInput.value;
  const amount = parseNumber(amountInput);
  const commissionPercentage = getCommissionPercentage(amount);
  const commission = amount * (commissionPercentage / 100);
  const amountAfterCommission = amount - commission;

  const usdAmount = Math.round(amountAfterCommission * currencyRates.usd);
  const cnyAmount = Math.round(amountAfterCommission * (currencyRates.cny + 0.2));

  document.getElementById("commission").value = `${commissionPercentage.toFixed(2)}%`;
  document.getElementById("usd").value = `${new Intl.NumberFormat("ru-RU").format(usdAmount)} долларов`;
  document.getElementById("cny").value = `${new Intl.NumberFormat("ru-RU").format(cnyAmount)} юаней`;
}

function getCommissionPercentage(amount) {
  if (amount <= 500000) {
    return 5;
  } else if (amount <= 1000000) {
    return 4;
  } else if (amount <= 5000000) {
    return 3.5;
  } else if (amount <= 35000000) {
    return 3;
  } else if (amount <= 100000000) {
    return 2.7;
  } else if (amount <= 500000000) {
    return 2;
  } else {
    return 1.5;
  }
}


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    1000: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});