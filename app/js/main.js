const swiper = new Swiper(".portfolio__swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next--portfolio",
    prevEl: ".swiper-button-prev--portfolio",
  },
});

// color
const color__swiper = new Swiper(".color__swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 50,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next--color",
    prevEl: ".swiper-button-prev--color",
  },

  breakpoints: {
    950: {
      spaceBetween: 50,
    },
    700: { slidesPerView: 3, spaceBetween: 20 },

    0: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
  },
});

// accordeon

document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion(".faq_accordion__list", {
    duration: 700,
    elementClass: "accordion__item",
    triggerClass: "accordion__top",
    panelClass: "accordion__bottom",
    showMultiple: false,

    collapse: true,
  });
});

// бургер меню
const burgerNav = document.getElementById("burger__nav");
const burgerBtn = document.getElementById("burger");
const burgerLabel = document.getElementById("burger_btn");

function openBurgerMenu() {
  burgerNav.classList.add("active");
  burgerLabel.classList.add("active");
  document.body.classList.add("stop-scroll");
}

function closeBurgerMenu() {
  burgerNav.classList.remove("active");
  burgerLabel.classList.remove("active");
  document.body.classList.remove("stop-scroll");
}

burgerBtn.addEventListener("click", () => {
  if (burgerLabel.classList.contains("active")) {
    closeBurgerMenu();
  } else {
    openBurgerMenu();
  }
});

// WOW
new WOW().init();

// Tippy

document.querySelectorAll(".service .tooltip__icon").forEach((el) => {
  console.log("#" + el.id);
  tippy("#" + el.id, {
    content: document.querySelector(".service .toltip_text"),
  });
});

// if we need paralax

// const heroImg = document.querySelector(".hero__img");
// document.querySelector(".section.hero").onmousemove = (e) => {
//   let x = e.clientX / window.innerWidth;
//   let y = e.clientY / window.innerHeight;
//   heroImg.style.transform = "translate(-" + x * 10 + "px, -" + y * 10 + "px)";
//   console.log("translate(" + x * 50 + "px, " + y * 50 + "px);");
// };

// portfolio picker mockup
const mockup__swiper = new Swiper(".mockup__swiper", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 50,
  speed: 500,
});

const desktopBtn = document.querySelector(".desktop-btn");
if (desktopBtn) {
  desktopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    mockup__swiper.slideToLoop(0, 500);
  });
}

const mobileBtn = document.querySelector(".mobile-btn");
if (mobileBtn) {
  document.querySelector(".mobile-btn").addEventListener("click", function (e) {
    e.preventDefault();
    mockup__swiper.slideTo(1, 500);
  });
}

const desktopPicker = document.querySelector(".desktop-btn");
const mobilePicker = document.querySelector(".mobile-btn");

mockup__swiper.on("slideChange", function () {
  var activeSlideIndex = mockup__swiper.activeIndex;
  if (activeSlideIndex == 0) {
    desktopPicker.classList.add("active");
    mobilePicker.classList.remove("active");
  }
  if (activeSlideIndex == 1) {
    mobilePicker.classList.add("active");
    desktopPicker.classList.remove("active");
  }
});
// selectors - style
var styleItems = document.querySelectorAll(".style_item");
console.log(styleItems);

styleItems.forEach((el) => {
  console.log(styleItems);
  el.addEventListener("click", () => {
    styleItems.forEach((e) => {
      e.classList.remove("selected");
    });

    el.classList.add("selected");
  });
});

// selectors - color
var colorItems = document.querySelectorAll(".swiper-slide--color");

colorItems.forEach((el) => {
  el.addEventListener("click", () => {
    colorItems.forEach((e) => {
      e.classList.remove("selected");
    });

    el.classList.add("selected");
  });
});

// selectors - admin
var adminItems = document.querySelectorAll(".admin_item");

adminItems.forEach((el) => {
  el.addEventListener("click", () => {
    adminItems.forEach((e) => {
      e.classList.remove("selected");
    });

    el.classList.add("selected");
  });
});
