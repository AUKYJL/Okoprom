import {bodyLock, bodyUnlock} from "./functions.js";

function addListenersToBtns() {
  const filterBtns = document.querySelectorAll("._filter-btn");
  let currentFilters = ["all"];
  if (filterBtns) {
    document.addEventListener("click", (e) => {
      if (e.target.closest("._filter-btn")) {
        const filterBtn = e.target.closest("._filter-btn");
        const filter = filterBtn.getAttribute("data-filter");

        if (filterBtn.closest(".left-production-catalog__list")) {
          const filterBtnArr = filterBtn
            .closest(".left-production-catalog__list")
            .querySelectorAll("li");
          const btnsFilters = [...filterBtnArr].map((el) =>
            el.getAttribute("data-filter")
          );
          btnsFilters.forEach((fltr) => {
            currentFilters = currentFilters.filter((el) => el !== fltr);
          });
        }

        if (!currentFilters.includes(filter)) {
          currentFilters.push(filter);
        } else {
          currentFilters = currentFilters.filter((el) => el !== filter);
        }
        setCardsVisible(currentFilters);
        console.log(currentFilters);
      }
    });
  }
}
function setCardsVisible(currentFilters) {
  const cards = document.querySelectorAll(".right-production-catalog__card");
  if (currentFilters.every((el) => el === "all")) {
    cards.forEach((card) => {
      card.removeAttribute("hidden");
    });
    return;
  }
  cards.forEach((card) => {
    const cardFilters = card.getAttribute("data-filter").split(" ");
    if (currentFilters.every((filter) => cardFilters.includes(filter))) {
      card.removeAttribute("hidden");
    } else {
      card.setAttribute("hidden", "");
    }
  });
}

function draggableSlideDownMenu() {
  const draggableEl = document.querySelector(
    ".list-left-production-catalog__slide-down"
  );
  const productionCatalog = document.querySelector(".left-production-catalog");
  const darkBG = document.querySelector(".left-production-catalog__dark-bg");
  const listBody = document.querySelector(".list-left-production-catalog");
  let initialHeight, currentY, startY, startHeight;
  let canClose = false;

  startHeight = listBody.getBoundingClientRect().height;
  init();

  function startTouch(event) {
    startY = event.touches[0].clientY;
    currentY = startY;
    initialHeight = listBody.clientHeight;

    event.preventDefault();
  }

  function moveTouch(event) {
    currentY = event.touches[0].clientY;

    let deltaY = currentY - startY;

    let newHeight = initialHeight - deltaY;

    newHeight = Math.max(newHeight, 0);
    if (newHeight / startHeight < 0.7) canClose = true;
    else canClose = false;

    if (newHeight <= startHeight + 0.2 * startHeight) {
      listBody.style.height = newHeight + "px";
    }
  }

  function endTouch() {
    if (canClose) {
      closeFilters(listBody, darkBG, productionCatalog, startHeight);
    }
    listBody.style.height = `${startHeight}px`;
  }

  function init() {
    draggableEl.addEventListener("touchstart", function (event) {
      startTouch(event);
    });
    draggableEl.addEventListener("touchmove", moveTouch);
    draggableEl.addEventListener("touchend", endTouch);
  }
}
export function closeFilters(listBody, darkBG, productionCatalog, startHeight) {
  listBody.classList.remove("_active");
  darkBG.classList.remove("_active");
  productionCatalog.classList.remove("_active");
  bodyUnlock();
  setTimeout(() => {
    listBody.style.height = `${startHeight}px`;
  }, 300);
  return;
}
export default function filtersInit() {
  if (document.querySelector(".catalog")) {
    addListenersToBtns();
    draggableSlideDownMenu();
  }
}
filtersInit();
