import {bodyLock, bodyUnlock} from "../../files/functions.js";
import {closeFilters} from "../../files/filters.js";

const catalogFirstBlock = document.querySelector(".advantages-catalog");
const advantagesCards = document.querySelectorAll(".advantages__cards");
const productsCount = document.querySelector(
  ".top-production-catalog__product-count"
);

if (productsCount) {
  countProducts();
}
if (advantagesCards) {
  advantagesCards.forEach((e) => {
    const activeCardsCount = e.getAttribute("data-active-cards-count");
    const cards = e.children;
    for (let i = 0; i < activeCardsCount; i++) {
      cards[i].classList.add("_active");
    }
  });
}
function countProducts() {
  const products = document.querySelectorAll(".card-right-production-catalog");
  productsCount.querySelector("span").innerHTML = [...products].reduce(
    (acc, el) => {
      if (!el.hasAttribute("hidden")) acc += 1;
      return acc;
    },
    0
  );
}
function NewBtnText(filterBtn, ...els) {
  const originalText = filterBtn.getAttribute("data-original-text");
  const tagName = els[0].tagName.toLowerCase();
  let elsText;
  if (tagName === "input") {
    if (els.some((el) => el.value === "")) {
      return originalText;
    }
    elsText = els.map((el) => el.value);
    if (+elsText[0] > +elsText[1]) {
      els[0].value = elsText[1];
      els[1].value = elsText[0];
      elsText = els.map((el) => el.value);
    }
  } else {
    elsText = els
      .map((el) => {
        const checkbox = el
          .closest(".radio-form-body-production-filters")
          .querySelector("input");
        return checkbox.checked ? el.innerHTML : null;
      })
      .filter((el) => el !== null);
  }

  console.log(elsText);
  return (
    `${originalText}: ${elsText[0]}` + (elsText[1] ? ` - ${elsText[1]}` : "")
  );
}

function execCloseFilters() {
  const productionCatalog = document.querySelector(".left-production-catalog");
  const darkBG = document.querySelector(".left-production-catalog__dark-bg");
  const listBody = document.querySelector(".list-left-production-catalog");
  const startHeight = listBody.getBoundingClientRect().height;
  closeFilters(listBody, darkBG, productionCatalog, startHeight);
}

document.addEventListener("click", (e) => {
  if (e.target.closest(".filters-right-production-catalog__item")) {
    e.target.classList.toggle("_active");
  }
  if (e.target.closest(".filters-right-production-catalog-choose")) {
    const itemsChoose = document.querySelectorAll(
      ".filters-right-production-catalog-choose"
    );
    let isActive = false;
    if (e.target.closest(".filters-right-production-catalog-choose__title")) {
      if (
        e.target
          .closest(".filters-right-production-catalog-choose__title")
          .classList.contains("_active")
      ) {
        isActive = true;
      }
      for (const item of itemsChoose) {
        item
          .querySelector(".filters-right-production-catalog-choose__title")
          .classList.remove("_active");
        item
          .querySelector(".body-production-filters")
          .classList.remove("_active");
      }
    }

    if (!e.target.closest(".body-production-filters")) {
      if (!isActive) {
        const itemChoose = e.target.closest(
          ".filters-right-production-catalog-choose"
        );
        itemChoose
          .querySelector(".filters-right-production-catalog-choose__title")
          .classList.toggle("_active");
        itemChoose
          .querySelector(".body-production-filters")
          .classList.toggle("_active");
      }
    }
    countProducts();
  } else {
    const itemsChoose = document.querySelectorAll(
      ".filters-right-production-catalog-choose"
    );
    for (const item of itemsChoose) {
      item
        .querySelector(".filters-right-production-catalog-choose__title")
        .classList.remove("_active");
      item
        .querySelector(".body-production-filters")
        .classList.remove("_active");
    }
    countProducts();
  }
  if (e.target.closest(".list-left-production-catalog__item")) {
    const curEl = e.target.closest(".list-left-production-catalog__item");
    const itemsList = curEl.parentElement;
    const prodCatalog = document.querySelector(".list-left-production-catalog");

    const filterBtn = document.querySelector(
      ".body-production-catalog__filter-btn"
    );
    filterBtn.innerHTML = curEl.innerHTML;
    if (prodCatalog.classList.contains("_active")) {
      execCloseFilters();
    }

    for (const el of itemsList.children) {
      el.classList.remove("_active");
    }
    if (curEl.getAttribute("data-filter") !== "all") {
      document
        .querySelector(".filters-right-production-catalog")
        .classList.add("_active");
    } else {
      document
        .querySelector(".filters-right-production-catalog")
        .classList.remove("_active");
      filterBtn.innerHTML = "Фильтры";
    }
    curEl.classList.add("_active");
    countProducts();
  }
  if (e.target.closest(".body-production-filters__btn")) {
    const item = e.target.closest(".filters-right-production-catalog-choose");
    const filterBtn = item.querySelector(
      ".filters-right-production-catalog-choose__title"
    );
    const els = item.querySelectorAll("[data-filter-text]");
    filterBtn.innerHTML = NewBtnText(filterBtn, ...els);
  }
  if (e.target.closest(".body-production-catalog__filter-btn")) {
    document.querySelector(".left-production-catalog").classList.add("_active");
    document
      .querySelector(".list-left-production-catalog")
      .classList.add("_active");
    document
      .querySelector(".left-production-catalog__dark-bg")
      .classList.add("_active");
    bodyLock();
  }
  if (e.target.closest(".left-production-catalog__dark-bg")) {
    execCloseFilters();
  }
});
