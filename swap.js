import Swiper from "swiper/bundle";

const swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 600,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    stopOnLastSlide: false,
    waitForTransition: false,
  },
});

// OneonOne
var swiperx = new Swiper(".mySwiperx", {
  effect: "cards",
  grabCursor: true,
});