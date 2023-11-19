function setPaddingFromTopHeader() {
  const header = document.querySelector(".header");
  const firstBlock = document.querySelector("main").children[0];

  function setPaddingFromTopHeader(el, headerHeight) {
    el.style.paddingTop = `${headerHeight}px`;
  }
  function updatePaddingTop() {
    const headerHeight = header.clientHeight;
    setPaddingFromTopHeader(firstBlock, headerHeight);
  }
  if (firstBlock) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        updatePaddingTop();
      }, 1000);
    });

    window.addEventListener("resize", () => {
      setTimeout(() => {
        updatePaddingTop();
      }, 0);
    });
  }
}
export default function headerInit() {
  setPaddingFromTopHeader();
}
headerInit();
