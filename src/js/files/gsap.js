import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const headerSearch = document.querySelector("#header-search");

const tlLinks = gsap.timeline({ paused: true });
let tlSearch;
function createTlSearch() {
  const tlSearch = gsap.timeline({
    paused: true,
  });
  tlSearch
    //btns disappear
    .to(".right-body-header__btn, .right-body-header__link._icon-cart", {
      xPercent: 100,
      autoAlpha: 0,
      duration: 0.05,
    })
    //move to right
    .to(".form-right-body-header", {
      x: function (i, el) {
        return MoveFormToRight(el);
      },
    })
    //close btn appears
    .fromTo(
      ".form-right-body-header__close",
      {
        xPercent: 100,
        autoAlpha: 0,
        display: "none",
      },
      {
        xPercent: 0,
        autoAlpha: 1,
        display: "flex",
        duration: 0.1,
      },
      "+=0.1"
    )
    //expand/contract search field
    .to(".form-right-body-header__input", {
      x: 10,
      width: GetSearchFieldWidth,
      padding: "12px 20px",
      duration: 0.2,
      onUpdate: function () {
        if (!tlSearch.reversed()) {
          this.targets()[0].style.width = GetSearchFieldWidth();
        }
      },
    });
  return tlSearch;
}

const menu = document.querySelector(".menu");
const bodyHeaderContent = document.querySelector(".body-header__content");
const bottomHeaderContent = document.querySelector(".bottom-header__content");
const leftBottomHeader = document.querySelector(".left-bottom-header");
const rightBodyHeader = document.querySelector(".right-body-header");
const rightBodyHeaderBtn = document.querySelector(".right-body-header__btn");
const rightBodyHeaderLink = document.querySelector(
  ".form-right-body-header__link._icon-cart"
);

//nav animation
tlLinks.to(".menu__item", {
  onStart: function () {
    bodyHeaderContent.style.justifyContent = "flex-end";
    rightBodyHeader.style.width = "100%";
    bottomHeaderContent.style.justifyContent = "flex-end";
    leftBottomHeader.style.width = "100%";
    //  if (window.innerWidth > 768) {
    //    bodyHeaderContent.style.justifyContent = "flex-end";
    //    //  menu.style.display = "none";
    //    //  rightBodyHeaderBtn.style.display = "none";
    //    //  rightBodyHeaderLink.style.display = "none";
    //    rightBodyHeader.style.width = "100%";
    //  } else if (window.innerWidth <= 768) {
    //    bottomHeaderContent.style.justifyContent = "flex-end";
    //    leftBottomHeader.style.width = "100%";
    //  }
  },
  xPercent: -20,
  autoAlpha: 0,
  stagger: 0.05,
  duration: 0.2,
  //   onComplete: () => {
  //     //  bodyHeaderContent.style.justifyContent = "flex-end";
  //     //   menu.style.display = "none";
  //     //  rightBodyHeaderBtn.style.display = "none";
  //     //  rightBodyHeaderLink.style.display = "none";
  //     //  rightBodyHeader.style.width = "100%";
  //   },
});

function GetSearchFieldWidth() {
  const bottomHeaderContLeft = document
    .querySelector(".bottom-header__content")
    .getBoundingClientRect().left;
  const searchBtnLeft = document
    .querySelector("#header-search")
    .getBoundingClientRect().left;
  return `${searchBtnLeft - bottomHeaderContLeft}px`;
}
function MoveFormToRight(el) {
  const contRight = document
    .querySelector(".bottom-header__content")
    .getBoundingClientRect().right;
  const elRight = el.getBoundingClientRect().right;
  return contRight - elRight;
}

document.addEventListener("click", (e) => {
  if (e.target.closest("#header-search")) {
    if (!headerSearch.classList.contains("active")) {
      headerSearch.classList.add("active");
      tlLinks.play();
      tlSearch = createTlSearch();
      tlSearch.play();
    }
  }
  if (e.target.closest(".form-right-body-header__close")) {
    headerSearch.classList.remove("active");
    tlSearch.reverse();
    tlLinks.reverse().eventCallback("onReverseComplete", () => {
      bodyHeaderContent.style.justifyContent = "space-between";
      rightBodyHeader.style.width = "auto";
      bottomHeaderContent.style.justifyContent = "space-between";
      leftBottomHeader.style.width = "auto";
    });
  }
});

window.addEventListener("resize", (e) => {
  if (headerSearch.classList.contains("active")) {
    document.querySelector(".form-right-body-header__input").style.width =
      GetSearchFieldWidth();
  }
});
// headerSearch.addEventListener("click", (e) => {
//   if (!e.target.classList.contains("active")) {
//     tlLinks.play();
//     tlSearch.play();
//   } else {
//     bodyHeaderContent.style.justifyContent = "space-between";
//     //  menu.style.display = "flex";
//     //  rightBodyHeaderBtn.style.display = "block";
//     //  rightBodyHeaderLink.style.display = "block";
//     rightBodyHeader.style.width = "auto";
//     tlLinks.reverse();
//     tlSearch.reverse();
//   }
//   e.target.classList.toggle("active");
// });
