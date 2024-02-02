import { gsap, ScrollToPlugin, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
let navBtn,
  aboutPageLoader_n,
  contactPageLoader_n,
  aboutloaderPageCloseBtn,
  workloaderPageCloseBtn;

navBtn = document.querySelectorAll(".NavBtn");
aboutPageLoader_n = document.querySelector(".aboutSliderPage");
contactPageLoader_n = document.querySelector(".contactSliderPage");
aboutloaderPageCloseBtn = document.querySelector(".closeBtn-1");
workloaderPageCloseBtn = document.querySelector(".closeBtn-2");
// PagesNavBarHover
navBtn.forEach((pageLink) => {
  pageLink.addEventListener("mouseenter", () => {
    gsap.to(pageLink, {
      color: "gray",
    });
  });
  pageLink.addEventListener("mouseleave", () => {
    gsap.to(pageLink, {
      color: "black",
    });
  });
});
// End

const aPageLoader = (function () {
  navBtn.forEach((getPage) => {
    getPage.addEventListener("click", () => {
      switch (getPage.textContent) {
        case "About Us":
          getPage.href = './about.html'
          break;
        default:
          break;
      }
    });
  });
})();
