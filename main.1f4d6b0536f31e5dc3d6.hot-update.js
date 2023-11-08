"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./node_modules/string-replace-loader/index.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/style.scss":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/string-replace-loader/index.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/style.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto:700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
@font-face {
  font-family: icons;
  font-display: swap;
  src: url("../fonts/icons.woff2") format("woff2"), url("../fonts/icons.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
[class*=_icon-]:before {
  font-family: "icons";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class*=_icon-]:before {
  display: block;
}

._icon-settings:before {
  content: "\\e900";
}

._icon-case:before {
  content: "\\e901";
}

._icon-delivery:before {
  content: "\\e902";
}

._icon-rent:before {
  content: "\\e903";
}

._icon-youtube:before {
  content: "\\e904";
}

._icon-instagram:before {
  content: "\\e905";
}

._icon-guarantee:before {
  content: "\\e906";
}

._icon-sale:before {
  content: "\\e907";
}

._icon-arrow-down:before {
  content: "\\e908";
}

._icon-burger:before {
  content: "\\e909";
}

._icon-filter:before {
  content: "\\e90a";
}

._icon-close:before {
  content: "\\e90b";
}

._icon-all:before {
  content: "\\e90d";
}

._icon-search:before {
  content: "\\e90e";
}

._icon-cart:before {
  content: "\\e90f";
}

._icon-service:before {
  content: "\\e912";
}

* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  min-width: 320px;
}

body {
  color: #161616;
  line-height: 1;
  font-family: "Golos Text", sans-serif;
  font-size: 1rem;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input,
button,
textarea {
  font-family: "Golos Text", sans-serif;
  font-size: inherit;
}

button {
  cursor: pointer;
  color: inherit;
  background-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

.lock body {
  overflow: hidden;
  touch-action: none;
  overscroll-behavior: none;
}
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
@supports (overflow: clip) {
  .wrapper {
    overflow: clip;
  }
}
.wrapper > main {
  flex: 1 1 auto;
}
.wrapper > * {
  min-width: 0;
}

iframe#webpack-dev-server-client-overlay {
  display: none !important;
}

/*
(i) Стилі будуть застосовуватись до
всіх класів, що містять *__container
Наприклад header__container, main__container і т.п.
Сніппет (HTML): cnt
*/
[class*=__container] {
  max-width: 76.875rem;
  margin: 0 auto;
  padding: 0 0.9375rem;
}

.button {
  display: inline-flex;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: #202226;
  color: var(--text-white, #fff);
  font-weight: 400;
  line-height: 1.25;
  transition: all 0.3s ease 0s;
  white-space: nowrap;
}
@media (any-hover: hover) {
  .button:hover {
    background-color: #2b2d32;
  }
}
.button._fw {
  width: 100%;
}
.button_gray {
  color: #161616;
  background-color: #f4f5f8;
}
@media (any-hover: hover) {
  .button_gray:hover {
    background-color: #e9e9e9;
  }
}
.button_white {
  color: #161616;
  background-color: #fff;
}
@media (any-hover: hover) {
  .button_white:hover {
    background-color: #f4f5f8;
  }
}

input[type=text],
input[type=email],
input[type=tel],
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.input {
  border-radius: 0 !important;
  width: 100%;
  display: block;
  padding: 16px 0px;
  background-color: transparent;
  border-bottom: 2px solid #fff;
  outline: none;
  color: #fff;
  font-weight: 400;
  line-height: 1.25;
}
.input[type=search] {
  padding: 0px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: var(--background-gray, #f4f5f8);
}

.input[placeholder]:not([data-placeholder-nohiden])::placeholder {
  transition: opacity 0.3s;
  color: var(--text-gray-dark-bg, #9f9f9f);
}
.input[placeholder]:not([data-placeholder-nohiden]):focus::placeholder {
  opacity: 0;
}

textarea.input {
  resize: none;
  padding: 0px 0px;
}

[class*=-ibg] {
  position: relative;
}
[class*=-ibg] img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}

[class*=-ibg_contain] img {
  object-fit: contain;
}

.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}
.top-header {
  background: var(--background-gray, #f4f5f8);
  padding: 1.125rem 0;
  transition: all 0.3s ease 0.2s;
}
@media (min-width: 76.875em) {
  .top-header {
    margin-bottom: 1.75rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 0.3125rem , -0.1929945055rem  +  2.5274725275vw , 1.75rem )) {
    .top-header {
      margin-bottom: clamp( 0.3125rem , -0.1929945055rem  +  2.5274725275vw , 1.75rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.3125rem , -0.1929945055rem  +  2.5274725275vw , 1.75rem )) {
    .top-header {
      margin-bottom: calc(0.3125rem + 1.4375 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .top-header {
    margin-bottom: 0.3125rem;
  }
}
.menu-open .top-header {
  transition: all 0.3s ease 0s;
  transform: translate(0px, -100%);
}
.top-header__right {
  display: flex;
  color: var(--text-gray-light-bg, #757575);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1428571429;
}
@media (min-width: 80em) {
  .top-header__right {
    gap: 5rem;
  }
}
@media (min-width: 64em) and (max-width: 80em) {
  @supports (gap: clamp( 2rem , -10rem  +  18.75vw , 5rem )) {
    .top-header__right {
      gap: clamp( 2rem , -10rem  +  18.75vw , 5rem );
    }
  }
  @supports not (gap: clamp( 2rem , -10rem  +  18.75vw , 5rem )) {
    .top-header__right {
      gap: calc(2rem + 3 * (100vw - 64rem) / 16);
    }
  }
}
@media (max-width: 64em) {
  .top-header__right {
    gap: 2rem;
  }
}
@media (max-width: 47.99875em) {
  .top-header__right {
    flex: 1 1 auto;
    justify-content: space-between;
  }
}
@media (max-width: 47.99875em) and (min-width: 48em) {
  .top-header__right {
    margin-left: 5.875rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 20em) and (max-width: 48em) {
  @supports (margin-left: clamp( 1.5625rem , -1.5178571429rem  +  15.4017857143vw , 5.875rem )) {
    .top-header__right {
      margin-left: clamp( 1.5625rem , -1.5178571429rem  +  15.4017857143vw , 5.875rem );
    }
  }
  @supports not (margin-left: clamp( 1.5625rem , -1.5178571429rem  +  15.4017857143vw , 5.875rem )) {
    .top-header__right {
      margin-left: calc(1.5625rem + 4.3125 * (100vw - 20rem) / 28);
    }
  }
}
@media (max-width: 47.99875em) and (max-width: 20em) {
  .top-header__right {
    margin-left: 1.5625rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 48em) {
  .top-header__right {
    margin-right: 4.3125rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 20em) and (max-width: 48em) {
  @supports (margin-right: clamp( 0.0000000625rem , -3.0803570357rem  +  15.4017854911vw , 4.3125rem )) {
    .top-header__right {
      margin-right: clamp( 0.0000000625rem , -3.0803570357rem  +  15.4017854911vw , 4.3125rem );
    }
  }
  @supports not (margin-right: clamp( 0.0000000625rem , -3.0803570357rem  +  15.4017854911vw , 4.3125rem )) {
    .top-header__right {
      margin-right: calc(0.0000000625rem + 4.3124999375 * (100vw - 20rem) / 28);
    }
  }
}
@media (max-width: 47.99875em) and (max-width: 20em) {
  .top-header__right {
    margin-right: 0.0000000625rem;
  }
}
@media (max-width: 38.125em) {
  .top-header__right {
    margin-right: auto;
    margin-left: auto;
    justify-content: flex-end;
    padding-left: 0.3125rem;
  }
}
.top-header__links {
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 0.3125rem;
}
@media (max-width: 47.99875em) {
  .top-header__links {
    flex-direction: column;
  }
}
@media (max-width: 38.125em) {
  .top-header__links {
    display: none;
  }
}
.top-header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom-header {
  transition: all 0.3s ease 0.2s;
}
.menu-open .bottom-header {
  transition: all 0.3s ease 0s;
  transform: translate(0px, -175%);
}
.bottom-header__content {
  display: flex;
  justify-content: space-between;
}
.bottom-header__left {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.contacts-top-header {
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 0.3125rem;
}
@media (max-width: 47.99875em) {
  .contacts-top-header {
    flex-direction: column;
  }
}
.contacts-top-header__link {
  transition: all 0.3s ease 0s;
}
.contacts-top-header__link:hover {
  color: #161616;
}

.right-top-header__link {
  transition: all 0.3s ease 0s;
}
.right-top-header__link:hover {
  color: #161616;
}

@media (max-width: 64em) {
  .body-header {
    margin-bottom: 0.5rem;
  }
}
.body-header__content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.top-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-menu__logo {
  display: none;
}
@media (max-width: 38.125em) {
  .top-menu__logo {
    margin-bottom: 2.75rem;
    display: block;
  }
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 38.125em) {
  .menu__body {
    padding: 1.5rem 1rem;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    background-color: #f4f5f8;
    transition: all 0.3s ease 0s;
    z-index: 1;
  }
  .menu-open .menu__body {
    transition: all 0.3s ease 0.2s;
    left: 0;
  }
}
.menu__list {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
@media (max-width: 38.125em) {
  .menu__list {
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    overflow: auto;
    max-height: 60%;
  }
}
@media (max-width: 38.125em) {
  .menu__item {
    display: block;
    position: relative;
    padding-bottom: 16px;
    width: 100%;
  }
  .menu__item::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #e9e9e9;
  }
}
@media (max-width: 38.125em) {
  .menu__link {
    padding: 0;
  }
}

.right-body-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
}
.right-body-header__link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
}
@media (max-width: 38.125em) {
  .right-body-header__btn {
    position: absolute;
    width: calc(100% - 15px);
    display: block;
    text-align: center;
    bottom: 24px;
    left: 50%;
    transform: translate(-50%, 0px);
  }
}
.form-right-body-header {
  display: flex;
}
.form-right-body-header__input {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  padding: 0;
  border: none !important;
  position: relative;
  outline: none;
}
.form-right-body-header__input::-webkit-search-cancel-button {
  -webkit-appearance: none;
  pointer-events: none;
}
.form-right-body-header__link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  position: relative;
  z-index: 1;
}
.form-right-body-header__close {
  display: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  position: relative;
  z-index: 1;
  margin-left: 8px;
}

.icon-menu {
  display: none;
}
@media (max-width: 38.125em) {
  .icon-menu {
    display: block;
    position: relative;
    padding: 13px 7px;
    width: 2.75rem;
    height: 2.75rem;
    transition: all 0.3s ease 0s;
  }
}
@media (max-width: 38.125em) and (any-hover: none) {
  .icon-menu {
    cursor: default;
  }
}
@media (max-width: 38.125em) {
  .icon-menu span, .icon-menu::before, .icon-menu::after {
    content: "";
    transition: all 0.3s ease 0s;
    right: 50%;
    position: absolute;
    width: 45.4545454545%;
    height: 0.1875rem;
    background-color: #161616;
    transform: translate(50%, 0px);
  }
  .icon-menu::before {
    top: 27.2727272727%;
  }
  .icon-menu::after {
    bottom: 27.2727272727%;
  }
  .icon-menu span {
    top: calc(50% - 0.09375rem);
  }
  .menu-open .icon-menu {
    position: absolute;
    right: 16px;
    z-index: 3;
  }
  .menu-open .icon-menu span {
    width: 0;
  }
  .menu-open .icon-menu::before {
    top: calc(50% - 0.09375rem);
    transform: translate(50%, 50%) rotate(-45deg);
  }
  .menu-open .icon-menu::after {
    bottom: calc(50% - 0.09375rem);
    transform: translate(50%, 50%) rotate(45deg);
  }
}

@media (min-width: 76.875em) {
  .form-footer {
    padding-top: 7.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (padding-top: clamp( 3.75rem , 2.4313186813rem  +  6.5934065934vw , 7.5rem )) {
    .form-footer {
      padding-top: clamp( 3.75rem , 2.4313186813rem  +  6.5934065934vw , 7.5rem );
    }
  }
  @supports not (padding-top: clamp( 3.75rem , 2.4313186813rem  +  6.5934065934vw , 7.5rem )) {
    .form-footer {
      padding-top: calc(3.75rem + 3.75 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .form-footer {
    padding-top: 3.75rem;
  }
}
@media (min-width: 76.875em) {
  .form-footer {
    padding-bottom: 7.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (padding-bottom: clamp( 3.75rem , 2.4313186813rem  +  6.5934065934vw , 7.5rem )) {
    .form-footer {
      padding-bottom: clamp( 3.75rem , 2.4313186813rem  +  6.5934065934vw , 7.5rem );
    }
  }
  @supports not (padding-bottom: clamp( 3.75rem , 2.4313186813rem  +  6.5934065934vw , 7.5rem )) {
    .form-footer {
      padding-bottom: calc(3.75rem + 3.75 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .form-footer {
    padding-bottom: 3.75rem;
  }
}
.form-footer__content {
  border-radius: 20px;
  background: var(--background-black, #202226);
  display: flex;
  justify-content: space-between;
}
@media (min-width: 64em) {
  .form-footer__content {
    padding-top: 3.75rem;
  }
}
@media (min-width: 20em) and (max-width: 64em) {
  @supports (padding-top: clamp( 0.75rem , -0.6136363636rem  +  6.8181818182vw , 3.75rem )) {
    .form-footer__content {
      padding-top: clamp( 0.75rem , -0.6136363636rem  +  6.8181818182vw , 3.75rem );
    }
  }
  @supports not (padding-top: clamp( 0.75rem , -0.6136363636rem  +  6.8181818182vw , 3.75rem )) {
    .form-footer__content {
      padding-top: calc(0.75rem + 3 * (100vw - 20rem) / 44);
    }
  }
}
@media (max-width: 20em) {
  .form-footer__content {
    padding-top: 0.75rem;
  }
}
@media (min-width: 64em) {
  .form-footer__content {
    padding-bottom: 3.75rem;
  }
}
@media (min-width: 20em) and (max-width: 64em) {
  @supports (padding-bottom: clamp( 0.75rem , -0.6136363636rem  +  6.8181818182vw , 3.75rem )) {
    .form-footer__content {
      padding-bottom: clamp( 0.75rem , -0.6136363636rem  +  6.8181818182vw , 3.75rem );
    }
  }
  @supports not (padding-bottom: clamp( 0.75rem , -0.6136363636rem  +  6.8181818182vw , 3.75rem )) {
    .form-footer__content {
      padding-bottom: calc(0.75rem + 3 * (100vw - 20rem) / 44);
    }
  }
}
@media (max-width: 20em) {
  .form-footer__content {
    padding-bottom: 0.75rem;
  }
}
@media (min-width: 64em) {
  .form-footer__content {
    padding-left: 2.5rem;
  }
}
@media (min-width: 20em) and (max-width: 64em) {
  @supports (padding-left: clamp( 0.75rem , -0.0454545455rem  +  3.9772727273vw , 2.5rem )) {
    .form-footer__content {
      padding-left: clamp( 0.75rem , -0.0454545455rem  +  3.9772727273vw , 2.5rem );
    }
  }
  @supports not (padding-left: clamp( 0.75rem , -0.0454545455rem  +  3.9772727273vw , 2.5rem )) {
    .form-footer__content {
      padding-left: calc(0.75rem + 1.75 * (100vw - 20rem) / 44);
    }
  }
}
@media (max-width: 20em) {
  .form-footer__content {
    padding-left: 0.75rem;
  }
}
@media (min-width: 64em) {
  .form-footer__content {
    padding-right: 2.5rem;
  }
}
@media (min-width: 20em) and (max-width: 64em) {
  @supports (padding-right: clamp( 0.75rem , -0.0454545455rem  +  3.9772727273vw , 2.5rem )) {
    .form-footer__content {
      padding-right: clamp( 0.75rem , -0.0454545455rem  +  3.9772727273vw , 2.5rem );
    }
  }
  @supports not (padding-right: clamp( 0.75rem , -0.0454545455rem  +  3.9772727273vw , 2.5rem )) {
    .form-footer__content {
      padding-right: calc(0.75rem + 1.75 * (100vw - 20rem) / 44);
    }
  }
}
@media (max-width: 20em) {
  .form-footer__content {
    padding-right: 0.75rem;
  }
}
@media (min-width: 76.875em) {
  .form-footer__content {
    gap: 7.25rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (gap: clamp( 1rem , -1.1978021978rem  +  10.989010989vw , 7.25rem )) {
    .form-footer__content {
      gap: clamp( 1rem , -1.1978021978rem  +  10.989010989vw , 7.25rem );
    }
  }
  @supports not (gap: clamp( 1rem , -1.1978021978rem  +  10.989010989vw , 7.25rem )) {
    .form-footer__content {
      gap: calc(1rem + 6.25 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .form-footer__content {
    gap: 1rem;
  }
}
@media (max-width: 47.99875em) {
  .form-footer__content {
    flex-direction: column;
  }
}
.left-form-footer {
  flex: 0 1 451px;
}
@media (max-width: 47.99875em) {
  .left-form-footer {
    flex: 1 1 auto;
  }
}
.left-form-footer__title {
  color: var(--text-white, #fff);
  font-weight: 400;
  line-height: 1.2;
}
@media (min-width: 76.875em) {
  .left-form-footer__title {
    font-size: 2.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (font-size: clamp( 1.5rem , 1.1483516484rem  +  1.7582417582vw , 2.5rem )) {
    .left-form-footer__title {
      font-size: clamp( 1.5rem , 1.1483516484rem  +  1.7582417582vw , 2.5rem );
    }
  }
  @supports not (font-size: clamp( 1.5rem , 1.1483516484rem  +  1.7582417582vw , 2.5rem )) {
    .left-form-footer__title {
      font-size: calc(1.5rem + 1 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-form-footer__title {
    font-size: 1.5rem;
  }
}
@media (min-width: 76.875em) {
  .left-form-footer__title {
    margin-bottom: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 0.75rem , 0.5741758242rem  +  0.8791208791vw , 1.25rem )) {
    .left-form-footer__title {
      margin-bottom: clamp( 0.75rem , 0.5741758242rem  +  0.8791208791vw , 1.25rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.75rem , 0.5741758242rem  +  0.8791208791vw , 1.25rem )) {
    .left-form-footer__title {
      margin-bottom: calc(0.75rem + 0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-form-footer__title {
    margin-bottom: 0.75rem;
  }
}
.left-form-footer__desc {
  color: var(--text-gray-dark-bg, #9f9f9f);
  font-weight: 400;
  line-height: 1.25;
}
@media (min-width: 76.875em) {
  .left-form-footer__desc {
    font-size: 1rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem )) {
    .left-form-footer__desc {
      font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem );
    }
  }
  @supports not (font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem )) {
    .left-form-footer__desc {
      font-size: calc(0.875rem + 0.125 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-form-footer__desc {
    font-size: 0.875rem;
  }
}

.right-form-footer {
  flex: 0 1 552px;
}
@media (max-width: 47.99875em) {
  .right-form-footer {
    flex: 1 1 auto;
  }
}
@media (min-width: 76.875em) {
  .right-form-footer__input:not(:last-child) {
    margin-bottom: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 0.5rem , 0.2362637363rem  +  1.3186813187vw , 1.25rem )) {
    .right-form-footer__input:not(:last-child) {
      margin-bottom: clamp( 0.5rem , 0.2362637363rem  +  1.3186813187vw , 1.25rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.5rem , 0.2362637363rem  +  1.3186813187vw , 1.25rem )) {
    .right-form-footer__input:not(:last-child) {
      margin-bottom: calc(0.5rem + 0.75 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .right-form-footer__input:not(:last-child) {
    margin-bottom: 0.5rem;
  }
}
@media (min-width: 76.875em) {
  .right-form-footer__btn {
    margin-top: 2.75rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-top: clamp( 2rem , 1.7362637363rem  +  1.3186813187vw , 2.75rem )) {
    .right-form-footer__btn {
      margin-top: clamp( 2rem , 1.7362637363rem  +  1.3186813187vw , 2.75rem );
    }
  }
  @supports not (margin-top: clamp( 2rem , 1.7362637363rem  +  1.3186813187vw , 2.75rem )) {
    .right-form-footer__btn {
      margin-top: calc(2rem + 0.75 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .right-form-footer__btn {
    margin-top: 2rem;
  }
}

.bottom-footer {
  background: var(--background-gray, #f4f5f8);
}
@media (min-width: 76.875em) {
  .bottom-footer {
    padding-top: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (padding-top: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem )) {
    .bottom-footer {
      padding-top: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem );
    }
  }
  @supports not (padding-top: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem )) {
    .bottom-footer {
      padding-top: calc(1rem + 0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .bottom-footer {
    padding-top: 1rem;
  }
}
@media (min-width: 76.875em) {
  .bottom-footer {
    padding-bottom: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (padding-bottom: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem )) {
    .bottom-footer {
      padding-bottom: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem );
    }
  }
  @supports not (padding-bottom: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem )) {
    .bottom-footer {
      padding-bottom: calc(1rem + 0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .bottom-footer {
    padding-bottom: 1rem;
  }
}
.top-bottom-footer {
  border-bottom: 1px solid #e9e9e9;
}
@media (min-width: 76.875em) {
  .top-bottom-footer {
    padding-bottom: 1.75rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (padding-bottom: clamp( 1.25rem , 1.0741758242rem  +  0.8791208791vw , 1.75rem )) {
    .top-bottom-footer {
      padding-bottom: clamp( 1.25rem , 1.0741758242rem  +  0.8791208791vw , 1.75rem );
    }
  }
  @supports not (padding-bottom: clamp( 1.25rem , 1.0741758242rem  +  0.8791208791vw , 1.75rem )) {
    .top-bottom-footer {
      padding-bottom: calc(1.25rem + 0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .top-bottom-footer {
    padding-bottom: 1.25rem;
  }
}
@media (min-width: 76.875em) {
  .top-bottom-footer {
    margin-bottom: 2.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 2.5rem , 3.5137362637rem  +  -1.3186813187vw , 3.25rem )) {
    .top-bottom-footer {
      margin-bottom: clamp( 2.5rem , 3.5137362637rem  +  -1.3186813187vw , 3.25rem );
    }
  }
  @supports not (margin-bottom: clamp( 2.5rem , 3.5137362637rem  +  -1.3186813187vw , 3.25rem )) {
    .top-bottom-footer {
      margin-bottom: calc(3.25rem + -0.75 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .top-bottom-footer {
    margin-bottom: 3.25rem;
  }
}
.mid-bottom-footer {
  display: flex;
}
@media (min-width: 75em) {
  .mid-bottom-footer {
    gap: 14.5625rem;
  }
}
@media (min-width: 59em) and (max-width: 75em) {
  @supports (gap: clamp( 1rem , -49.01171875rem  +  84.765625vw , 14.5625rem )) {
    .mid-bottom-footer {
      gap: clamp( 1rem , -49.01171875rem  +  84.765625vw , 14.5625rem );
    }
  }
  @supports not (gap: clamp( 1rem , -49.01171875rem  +  84.765625vw , 14.5625rem )) {
    .mid-bottom-footer {
      gap: calc(1rem + 13.5625 * (100vw - 59rem) / 16);
    }
  }
}
@media (max-width: 59em) {
  .mid-bottom-footer {
    gap: 1rem;
  }
}
@media (max-width: 47.99875em) {
  .mid-bottom-footer {
    flex-direction: column;
  }
}
.left-mid-footer {
  flex: 0 1 389px;
}
@media (max-width: 47.99875em) {
  .left-mid-footer {
    flex: 1 1 auto;
  }
}
@media (max-width: 47.99875em) and (min-width: 76.875em) {
  .left-mid-footer {
    margin-bottom: 3.875rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 3.625rem , 3.5370879121rem  +  0.4395604396vw , 3.875rem )) {
    .left-mid-footer {
      margin-bottom: clamp( 3.625rem , 3.5370879121rem  +  0.4395604396vw , 3.875rem );
    }
  }
  @supports not (margin-bottom: clamp( 3.625rem , 3.5370879121rem  +  0.4395604396vw , 3.875rem )) {
    .left-mid-footer {
      margin-bottom: calc(3.625rem + 0.25 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 47.99875em) and (max-width: 20em) {
  .left-mid-footer {
    margin-bottom: 3.625rem;
  }
}
.left-mid-footer__text {
  color: var(--text-black, #161616);
  font-feature-settings: "liga" off;
  font-weight: 500;
  line-height: 1.1666666667;
  letter-spacing: 0.24px;
}
@media (min-width: 76.875em) {
  .left-mid-footer__text {
    font-size: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (font-size: clamp( 1.125rem , 0.9931318681rem  +  0.6593406593vw , 1.5rem )) {
    .left-mid-footer__text {
      font-size: clamp( 1.125rem , 0.9931318681rem  +  0.6593406593vw , 1.5rem );
    }
  }
  @supports not (font-size: clamp( 1.125rem , 0.9931318681rem  +  0.6593406593vw , 1.5rem )) {
    .left-mid-footer__text {
      font-size: calc(1.125rem + 0.375 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-mid-footer__text {
    font-size: 1.125rem;
  }
}
.left-mid-footer__street {
  display: block;
}
@media (min-width: 76.875em) {
  .left-mid-footer__street {
    margin-bottom: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 1.5rem , 2.1758241758rem  +  -0.8791208791vw , 2rem )) {
    .left-mid-footer__street {
      margin-bottom: clamp( 1.5rem , 2.1758241758rem  +  -0.8791208791vw , 2rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.5rem , 2.1758241758rem  +  -0.8791208791vw , 2rem )) {
    .left-mid-footer__street {
      margin-bottom: calc(2rem + -0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-mid-footer__street {
    margin-bottom: 2rem;
  }
}
.left-mid-footer__phone {
  display: block;
}
@media (min-width: 76.875em) {
  .left-mid-footer__phone {
    margin-bottom: 0.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 0.5rem , 1.1758241758rem  +  -0.8791208791vw , 1rem )) {
    .left-mid-footer__phone {
      margin-bottom: clamp( 0.5rem , 1.1758241758rem  +  -0.8791208791vw , 1rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.5rem , 1.1758241758rem  +  -0.8791208791vw , 1rem )) {
    .left-mid-footer__phone {
      margin-bottom: calc(1rem + -0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-mid-footer__phone {
    margin-bottom: 1rem;
  }
}
.left-mid-footer__email {
  display: block;
}
@media (min-width: 76.875em) {
  .left-mid-footer__email {
    margin-bottom: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 1.5rem , 2.1758241758rem  +  -0.8791208791vw , 2rem )) {
    .left-mid-footer__email {
      margin-bottom: clamp( 1.5rem , 2.1758241758rem  +  -0.8791208791vw , 2rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.5rem , 2.1758241758rem  +  -0.8791208791vw , 2rem )) {
    .left-mid-footer__email {
      margin-bottom: calc(2rem + -0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-mid-footer__email {
    margin-bottom: 2rem;
  }
}
.left-mid-footer__btns {
  display: flex;
  gap: 8px;
}
@media (min-width: 76.875em) {
  .left-mid-footer__btns {
    margin-bottom: 3.875rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 2.375rem , 1.8475274725rem  +  2.6373626374vw , 3.875rem )) {
    .left-mid-footer__btns {
      margin-bottom: clamp( 2.375rem , 1.8475274725rem  +  2.6373626374vw , 3.875rem );
    }
  }
  @supports not (margin-bottom: clamp( 2.375rem , 1.8475274725rem  +  2.6373626374vw , 3.875rem )) {
    .left-mid-footer__btns {
      margin-bottom: calc(2.375rem + 1.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-mid-footer__btns {
    margin-bottom: 2.375rem;
  }
}
.socials-left-mid-footer {
  display: flex;
  align-items: center;
  gap: 8px;
}
.socials-left-mid-footer__item {
  min-width: 44px;
  min-height: 44px;
  max-width: 44px;
  max-height: 44px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--border-or-devider-light-bg, #e9e9e9);
  display: flex;
  justify-content: center;
  align-items: center;
}
.socials-left-mid-footer__desc {
  margin-left: 16px;
  color: var(--text-gray-light-bg, #757575);
  line-height: 1.25;
}

.right-mid-bottom-footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 40px;
}
@media (max-width: 64em) {
  .right-mid-bottom-footer {
    grid-template-columns: 1fr;
  }
}
.item-right-footer {
  flex: 0 1 288px;
  color: var(--text-black, #161616);
}
.item-right-footer__title {
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.6px;
}
@media (min-width: 76.875em) {
  .item-right-footer__title {
    font-size: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (font-size: clamp( 1rem , 0.9120879121rem  +  0.4395604396vw , 1.25rem )) {
    .item-right-footer__title {
      font-size: clamp( 1rem , 0.9120879121rem  +  0.4395604396vw , 1.25rem );
    }
  }
  @supports not (font-size: clamp( 1rem , 0.9120879121rem  +  0.4395604396vw , 1.25rem )) {
    .item-right-footer__title {
      font-size: calc(1rem + 0.25 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .item-right-footer__title {
    font-size: 1rem;
  }
}
@media (min-width: 76.875em) {
  .item-right-footer__title {
    margin-bottom: 2rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 1.5rem , 1.3241758242rem  +  0.8791208791vw , 2rem )) {
    .item-right-footer__title {
      margin-bottom: clamp( 1.5rem , 1.3241758242rem  +  0.8791208791vw , 2rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.5rem , 1.3241758242rem  +  0.8791208791vw , 2rem )) {
    .item-right-footer__title {
      margin-bottom: calc(1.5rem + 0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .item-right-footer__title {
    margin-bottom: 1.5rem;
  }
}
.item-right-footer__list {
  font-weight: 400;
  line-height: 1.25;
}
@media (min-width: 76.875em) {
  .item-right-footer__list {
    font-size: 1rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem )) {
    .item-right-footer__list {
      font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem );
    }
  }
  @supports not (font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem )) {
    .item-right-footer__list {
      font-size: calc(0.875rem + 0.125 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .item-right-footer__list {
    font-size: 0.875rem;
  }
}

@media (min-width: 76.875em) {
  .list-item-right-footer__item:not(:last-child) {
    margin-bottom: 0.75rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 0.75rem , 1.4258241758rem  +  -0.8791208791vw , 1.25rem )) {
    .list-item-right-footer__item:not(:last-child) {
      margin-bottom: clamp( 0.75rem , 1.4258241758rem  +  -0.8791208791vw , 1.25rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.75rem , 1.4258241758rem  +  -0.8791208791vw , 1.25rem )) {
    .list-item-right-footer__item:not(:last-child) {
      margin-bottom: calc(1.25rem + -0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .list-item-right-footer__item:not(:last-child) {
    margin-bottom: 1.25rem;
  }
}
.bottom-bottom-footer {
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  justify-content: space-between;
  border-top: 1px solid #e9e9e9;
  color: var(--text-gray-light-bg, #757575);
  font-weight: 400;
  line-height: 1.25;
}
@media (min-width: 76.875em) {
  .bottom-bottom-footer {
    padding-top: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (padding-top: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem )) {
    .bottom-bottom-footer {
      padding-top: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem );
    }
  }
  @supports not (padding-top: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem )) {
    .bottom-bottom-footer {
      padding-top: calc(1rem + 0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .bottom-bottom-footer {
    padding-top: 1rem;
  }
}
@media (min-width: 76.875em) {
  .bottom-bottom-footer {
    margin-top: 2.625rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-top: clamp( 2.625rem , 3.4697802198rem  +  -1.0989010989vw , 3.25rem )) {
    .bottom-bottom-footer {
      margin-top: clamp( 2.625rem , 3.4697802198rem  +  -1.0989010989vw , 3.25rem );
    }
  }
  @supports not (margin-top: clamp( 2.625rem , 3.4697802198rem  +  -1.0989010989vw , 3.25rem )) {
    .bottom-bottom-footer {
      margin-top: calc(3.25rem + -0.625 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .bottom-bottom-footer {
    margin-top: 3.25rem;
  }
}
.advantages__cards {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
}

.card-advantages {
  flex: 0 1 33.333%;
  padding: 0 0.5rem;
}
.card-advantages__body {
  min-width: 60px;
  min-height: 60px;
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/fonts/fonts.scss","webpack://./src/scss/fonts/icons.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base/forms/button.scss","webpack://./src/scss/base/forms/input.scss","webpack://./src/scss/base.scss","webpack://./src/scss/header.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/footer.scss","webpack://./src/scss/advantages.scss"],"names":[],"mappings":"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AAA;IACA,kBAAA;IACA,qBAAA;IACA,iBAAA;IACA,yBAAA;IACA,8BAAA;EP2RJ;EOzRE;IACE,mBAAA;EP2RJ;EOzRE;IACE,sBAAA;EP2RJ;EOzRE;IACE,2BAAA;EP2RJ;EOzRE;IACE,kBAAA;IACA,WAAA;IACA,UAAA;EP2RJ;EO1RI;IACE,QAAA;EP4RN;EOvRI;IACE,2BAAA;IACA,6CAAA;EPyRN;EOvRI;IACE,8BAAA;IACA,4CAAA;EPyRN;AACF;;AQxlBE;EClEF;IDmEG,mBAAA;ER4lBD;AACF;AQzlBC;EAEC;ICzEF;MD0EG,2EAhBc;IR2mBb;EACF;EQzlBA;IC7EF;MD8EG,4DAAA;IR4lBC;EACF;AACF;AQ1lBE;EClFF;IDmFG,oBAAA;ER6lBD;AACF;AQ/mBE;EClEF;IDmEG,sBAAA;ERknBD;AACF;AQ/mBC;EAEC;ICzEF;MD0EG,8EAhBc;IRioBb;EACF;EQ/mBA;IC7EF;MD8EG,+DAAA;IRknBC;EACF;AACF;AQhnBE;EClFF;IDmFG,uBAAA;ERmnBD;AACF;AS7rBE;EACE,mBAAA;EACA,4CAAA;EAKA,aAAA;EACA,8BAAA;AT2rBJ;AQ3oBE;ECxDA;IDyDC,oBAAA;ER8oBD;AACF;AQ3oBC;EAEC;IC/DA;MDgEC,6EAhBc;IR6pBb;EACF;EQ3oBA;ICnEA;MDoEC,qDAAA;IR8oBC;EACF;AACF;AQ5oBE;ECxEA;IDyEC,oBAAA;ER+oBD;AACF;AQjqBE;ECxDA;IDyDC,uBAAA;ERoqBD;AACF;AQjqBC;EAEC;IC/DA;MDgEC,gFAhBc;IRmrBb;EACF;EQjqBA;ICnEA;MDoEC,wDAAA;IRoqBC;EACF;AACF;AQlqBE;ECxEA;IDyEC,uBAAA;ERqqBD;AACF;AQvrBE;ECxDA;IDyDC,oBAAA;ER0rBD;AACF;AQvrBC;EAEC;IC/DA;MDgEC,6EAhBc;IRysBb;EACF;EQvrBA;ICnEA;MDoEC,yDAAA;IR0rBC;EACF;AACF;AQxrBE;ECxEA;IDyEC,qBAAA;ER2rBD;AACF;AQ7sBE;ECxDA;IDyDC,qBAAA;ERgtBD;AACF;AQ7sBC;EAEC;IC/DA;MDgEC,8EAhBc;IR+tBb;EACF;EQ7sBA;ICnEA;MDoEC,0DAAA;IRgtBC;EACF;AACF;AQ9sBE;ECxEA;IDyEC,sBAAA;ERitBD;AACF;AQnuBE;ECxDA;IDyDC,YAAA;ERsuBD;AACF;AQnuBC;EAEC;IC/DA;MDgEC,kEAhBc;IRqvBb;EACF;EQnuBA;ICnEA;MDoEC,iDAAA;IRsuBC;EACF;AACF;AQpuBE;ECxEA;IDyEC,SAAA;ERuuBD;AACF;ASvyBI;EAVF;IAWI,sBAAA;ET0yBJ;AACF;AS7xBA;EACE,eAAA;AT+xBF;AS9xBE;EAFF;IAGI,cAAA;ETiyBF;AACF;AS9xBE;EACE,8BAAA;EAEA,gBAAA;EACA,gBAAA;AT+xBJ;AQ3wBE;ECxBA;IDyBC,iBAAA;ER8wBD;AACF;AQ3wBC;EAEC;IC/BA;MDgCC,wEAhBc;IR6xBb;EACF;EQ3wBA;ICnCA;MDoCC,sDAAA;IR8wBC;EACF;AACF;AQ5wBE;ECxCA;IDyCC,iBAAA;ER+wBD;AACF;AQjyBE;ECxBA;IDyBC,sBAAA;ERoyBD;AACF;AQjyBC;EAEC;IC/BA;MDgCC,8EAhBc;IRmzBb;EACF;EQjyBA;ICnCA;MDoCC,6DAAA;IRoyBC;EACF;AACF;AQlyBE;ECxCA;IDyCC,sBAAA;ERqyBD;AACF;ASr0BE;EACE,wCAAA;EAEA,gBAAA;EACA,iBAAA;ATs0BJ;AQ5zBE;ECdA;IDeC,eAAA;ER+zBD;AACF;AQ5zBC;EAEC;ICrBA;MDsBC,uEAhBc;IR80Bb;EACF;EQ5zBA;ICzBA;MD0BC,4DAAA;IR+zBC;EACF;AACF;AQ7zBE;EC9BA;ID+BC,mBAAA;ERg0BD;AACF;;ASx1BA;EACE,eAAA;AT21BF;AS11BE;EAFF;IAGI,cAAA;ET61BF;AACF;AQ31BE;ECOE;IDND,sBAAA;ER81BD;AACF;AQ31BC;EAEC;ICAE;MDCD,6EAhBc;IR62Bb;EACF;EQ31BA;ICJE;MDKD,6DAAA;IR81BC;EACF;AACF;AQ51BE;ECTE;IDUD,qBAAA;ER+1BD;AACF;AQj3BE;ECYA;IDXC,mBAAA;ERo3BD;AACF;AQj3BC;EAEC;ICKA;MDJC,wEAhBc;IRm4Bb;EACF;EQj3BA;ICCA;MDAC,wDAAA;IRo3BC;EACF;AACF;AQl3BE;ECJA;IDKC,gBAAA;ERq3BD;AACF;;ASt3BA;EACE,2CAAA;ATy3BF;AQ34BE;ECiBF;IDhBG,mBAAA;ER84BD;AACF;AQ34BC;EAEC;ICUF;MDTG,wEAhBc;IR65Bb;EACF;EQ34BA;ICMF;MDLG,wDAAA;IR84BC;EACF;AACF;AQ54BE;ECCF;IDAG,iBAAA;ER+4BD;AACF;AQj6BE;ECiBF;IDhBG,sBAAA;ERo6BD;AACF;AQj6BC;EAEC;ICUF;MDTG,2EAhBc;IRm7Bb;EACF;EQj6BA;ICMF;MDLG,2DAAA;IRo6BC;EACF;AACF;AQl6BE;ECCF;IDAG,oBAAA;ERq6BD;AACF;ASp4BA;EAEE,gCAAA;ATq4BF;AQ17BE;ECmDF;IDlDG,uBAAA;ER67BD;AACF;AQ17BC;EAEC;IC4CF;MD3CG,+EAhBc;IR48Bb;EACF;EQ17BA;ICwCF;MDvCG,8DAAA;IR67BC;EACF;AACF;AQ37BE;ECmCF;IDlCG,uBAAA;ER87BD;AACF;AQh9BE;ECmDF;IDlDG,qBAAA;ERm9BD;AACF;AQh9BC;EAEC;IC4CF;MD3CG,8EAbe;IR+9Bd;EACF;EQh9BA;ICwCF;MDvCG,+DAAA;IRm9BC;EACF;AACF;AQj9BE;ECmCF;IDlCG,sBAAA;ERo9BD;AACF;AS16BA;EACE,aAAA;AT46BF;AQz+BE;EC4DF;ID3DG,eAAA;ER4+BD;AACF;AQz+BC;EAEC;ICqDF;MDpDG,iEAhBc;IR2/Bb;EACF;EQz+BA;ICiDF;MDhDG,gDAAA;IR4+BC;EACF;AACF;AQ1+BE;EC4CF;ID3CG,SAAA;ER6+BD;AACF;ASh8BE;EAHF;IAII,sBAAA;ETm8BF;AACF;ASj6BA;EACE,eAAA;ATm6BF;ASj6BE;EAHF;IAII,cAAA;ETo6BF;AACF;AQ5gCE;ECmGF;IDlGG,uBAAA;ER+gCD;AACF;AQ5gCC;EAEC;IC4FF;MD3FG,gFAhBc;IR8hCb;EACF;EQ5gCA;ICwFF;MDvFG,+DAAA;IR+gCC;EACF;AACF;AQ7gCE;ECmFF;IDlFG,uBAAA;ERghCD;AACF;ASt7BE;EACE,iCAAA;EACA,iCAAA;EACA,gBAAA;EAEA,yBAAA;EACA,sBAAA;ATu7BJ;AQziCE;EC4GA;ID3GC,iBAAA;ER4iCD;AACF;AQziCC;EAEC;ICqGA;MDpGC,0EAhBc;IR2jCb;EACF;EQziCA;ICiGA;MDhGC,4DAAA;IR4iCC;EACF;AACF;AQ1iCE;EC4FA;ID3FC,mBAAA;ER6iCD;AACF;ASx8BE;EACE,cAAA;AT08BJ;AQlkCE;ECuHA;IDtHC,qBAAA;ERqkCD;AACF;AQlkCC;EAEC;ICgHA;MD/GC,2EAbe;IRilCd;EACF;EQlkCA;IC4GA;MD3GC,2DAAA;IRqkCC;EACF;AACF;AQnkCE;ECuGA;IDtGC,mBAAA;ERskCD;AACF;AS19BE;EACE,cAAA;AT49BJ;AQ3lCE;EC8HA;ID7HC,qBAAA;ER8lCD;AACF;AQ3lCC;EAEC;ICuHA;MDtHC,2EAbe;IR0mCd;EACF;EQ3lCA;ICmHA;MDlHC,2DAAA;IR8lCC;EACF;AACF;AQ5lCE;EC8GA;ID7GC,mBAAA;ER+lCD;AACF;AS5+BE;EACE,cAAA;AT8+BJ;AQpnCE;ECqIA;IDpIC,qBAAA;ERunCD;AACF;AQpnCC;EAEC;IC8HA;MD7HC,2EAbe;IRmoCd;EACF;EQpnCA;IC0HA;MDzHC,2DAAA;IRunCC;EACF;AACF;AQrnCE;ECqHA;IDpHC,mBAAA;ERwnCD;AACF;AS9/BE;EACE,aAAA;EACA,QAAA;ATggCJ;AQ9oCE;EC4IA;ID3IC,uBAAA;ERipCD;AACF;AQ9oCC;EAEC;ICqIA;MDpIC,gFAhBc;IRgqCb;EACF;EQ9oCA;ICiIA;MDhIC,8DAAA;IRipCC;EACF;AACF;AQ/oCE;EC4HA;ID3HC,uBAAA;ERkpCD;AACF;ASxgCA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AT0gCF;ASvgCE;EACE,eAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,4DAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ATygCJ;ASpgCE;EACE,iBAAA;EACA,yCAAA;EACA,iBAAA;ATsgCJ;;ASr7BA;EACE,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,aAAA;ATw7BF;ASv7BE;EALF;IAMI,0BAAA;ET07BF;AACF;ASp7BA;EACE,eAAA;EAEA,iCAAA;ATq7BF;ASp7BE;EAEE,gBAAA;EACA,gBAAA;EACA,sBAAA;ATq7BJ;AQ/sCE;ECsRA;IDrRC,kBAAA;ERktCD;AACF;AQ/sCC;EAEC;IC+QA;MD9QC,uEAhBc;IRiuCb;EACF;EQ/sCA;IC2QA;MD1QC,uDAAA;IRktCC;EACF;AACF;AQhtCE;ECsQA;IDrQC,eAAA;ERmtCD;AACF;AQruCE;ECsRA;IDrRC,mBAAA;ERwuCD;AACF;AQruCC;EAEC;IC+QA;MD9QC,0EAhBc;IRuvCb;EACF;EQruCA;IC2QA;MD1QC,4DAAA;IRwuCC;EACF;AACF;AQtuCE;ECsQA;IDrQC,qBAAA;ERyuCD;AACF;AS39BE;EAEE,gBAAA;EACA,iBAAA;AT49BJ;AQ/vCE;ECgSA;ID/RC,eAAA;ERkwCD;AACF;AQ/vCC;EAEC;ICyRA;MDxRC,uEAhBc;IRixCb;EACF;EQ/vCA;ICqRA;MDpRC,4DAAA;IRkwCC;EACF;AACF;AQhwCE;ECgRA;ID/QC,mBAAA;ERmwCD;AACF;;AQrxCE;EC0SE;IDzSD,sBAAA;ERyxCD;AACF;AQtxCC;EAEC;ICmSE;MDlSD,+EAbe;IRqyCd;EACF;EQtxCA;IC+RE;MD9RD,8DAAA;IRyxCC;EACF;AACF;AQvxCE;EC0RE;IDzRD,sBAAA;ER0xCD;AACF;ASv/BA;EACE,aAAA;EACA,eAAA;EACA,YAAA;EACA,8BAAA;EAEA,6BAAA;EAIA,yCAAA;EACA,gBAAA;EACA,iBAAA;ATq/BF;AQtzCE;ECqTF;IDpTG,mBAAA;ERyzCD;AACF;AQtzCC;EAEC;IC8SF;MD7SG,wEAhBc;IRw0Cb;EACF;EQtzCA;IC0SF;MDzSG,wDAAA;IRyzCC;EACF;AACF;AQvzCE;ECqSF;IDpSG,iBAAA;ER0zCD;AACF;AQ50CE;ECqTF;IDpTG,oBAAA;ER+0CD;AACF;AQ50CC;EAEC;IC8SF;MD7SG,6EAbe;IR21Cd;EACF;EQ50CA;IC0SF;MDzSG,6DAAA;IR+0CC;EACF;AACF;AQ70CE;ECqSF;IDpSG,mBAAA;ERg1CD;AACF;AUn6CE;EACE,aAAA;EACA,eAAA;EACA,iBAAA;AVq6CJ;;AUl6CA;EACE,iBAAA;EACA,iBAAA;AVq6CF;AUl6CE;EACE,eAAA;EACA,gBAAA;AVo6CJ","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n@import url(https://fonts.googleapis.com/css?family=Roboto:700&display=swap);\r\n@import url(\"https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500&display=swap\");\r\n// Підключити, якщо є локальні файли шрифтів\r\n@import \"fonts/fonts\";\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Golos Text\", sans-serif;\r\n$fontSize: rem(16); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n//text\r\n$mainColor: #161616; // Колір шрифту за замовчуванням\r\n$darkGray: #757575;\r\n$lightGray: #9f9f9f;\r\n\r\n//bg\r\n$lightBlack: #202226;\r\n$darkWhite: #f4f5f8;\r\n\r\n//tags\r\n$red: #d21924;\r\n$blue: #2949b5;\r\n$green: #308d77;\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1280;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1200;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em(\r\n  $containerWidth\r\n); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\nbody {\r\n  // Скролл заблоковано\r\n  .lock & {\r\n    overflow: hidden;\r\n    touch-action: none;\r\n    overscroll-behavior: none;\r\n  }\r\n\r\n  // Сайт завантажений\r\n  .loaded & {\r\n  }\r\n}\r\n\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n\r\n  @supports (overflow: clip) {\r\n    overflow: clip;\r\n  }\r\n\r\n  // Притискаємо footer\r\n  > main {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  // Фікс для слайдерів\r\n  > * {\r\n    min-width: 0;\r\n  }\r\n}\r\n\r\n//Для того чтобы не ломался слайдер при ресайзе\r\niframe#webpack-dev-server-client-overlay {\r\n  display: none !important;\r\n}\r\n\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n  // Чуйна\r\n  [class*=\"__container\"] {\r\n    @if ($maxWidthContainer>0) {\r\n      max-width: rem($containerWidth);\r\n      margin: 0 auto;\r\n    }\r\n\r\n    @if ($containerPadding>0) {\r\n      @if ($maxWidthContainer>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      } @else {\r\n        @include adaptiveValue(\r\n          \"padding-left\",\r\n          math.div($containerPadding, 2),\r\n          15\r\n        );\r\n        @include adaptiveValue(\r\n          \"padding-right\",\r\n          math.div($containerPadding, 2),\r\n          15\r\n        );\r\n      }\r\n    }\r\n  }\r\n} @else {\r\n  // Брейк-поїнтами\r\n  [class*=\"__container\"] {\r\n    margin: 0 auto;\r\n\r\n    @if ($maxWidthContainer>0) {\r\n      max-width: rem($containerWidth);\r\n    } @else {\r\n      @if ($containerPadding>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      }\r\n    }\r\n\r\n    @media (max-width: $pc) {\r\n      max-width: rem(970);\r\n    }\r\n\r\n    @media (max-width: $tablet) {\r\n      max-width: rem(750);\r\n    }\r\n\r\n    @media (max-width: $mobile) {\r\n      max-width: none;\r\n\r\n      @if ($containerPadding>0 and $maxWidthContainer>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n@import \"advantages\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n","@font-face {\n\tfont-family: icons;\n\tfont-display: swap;\n\tsrc: url(\"../fonts/icons.woff2\") format(\"woff2\"), url(\"../fonts/icons.woff\") format(\"woff\");\n\tfont-weight: 400;\n\tfont-style: normal;\n}\r\n","%ic {\r\n  font-family: \"icons\";\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n[class*=\"_icon-\"] {\r\n  &:before {\r\n    @extend %ic;\r\n    display: block;\r\n  }\r\n}\r\n\r\n._icon-settings:before {\r\n  content: \"\\e900\";\r\n}\r\n._icon-case:before {\r\n  content: \"\\e901\";\r\n}\r\n._icon-delivery:before {\r\n  content: \"\\e902\";\r\n}\r\n._icon-rent:before {\r\n  content: \"\\e903\";\r\n}\r\n._icon-youtube:before {\r\n  content: \"\\e904\";\r\n}\r\n._icon-instagram:before {\r\n  content: \"\\e905\";\r\n}\r\n._icon-guarantee:before {\r\n  content: \"\\e906\";\r\n}\r\n._icon-sale:before {\r\n  content: \"\\e907\";\r\n}\r\n._icon-arrow-down:before {\r\n  content: \"\\e908\";\r\n}\r\n._icon-burger:before {\r\n  content: \"\\e909\";\r\n}\r\n._icon-filter:before {\r\n  content: \"\\e90a\";\r\n}\r\n._icon-close:before {\r\n  content: \"\\e90b\";\r\n}\r\n._icon-all:before {\r\n  content: \"\\e90d\";\r\n}\r\n._icon-search:before {\r\n  content: \"\\e90e\";\r\n}\r\n._icon-cart:before {\r\n  content: \"\\e90f\";\r\n}\r\n._icon-service:before {\r\n  content: \"\\e912\";\r\n}\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","//<BUTTONS (a.btn+tab)>\r\n// Сніппет (HTML): btn\r\n\r\n.button {\r\n  display: inline-flex;\r\n  padding: 12px 20px;\r\n  border-radius: 8px;\r\n  background-color: $lightBlack;\r\n  color: var(--text-white, #fff);\r\n  font-weight: 400;\r\n  line-height: math.div(20, 16);\r\n  transition: all 0.3s ease 0s;\r\n  white-space: nowrap;\r\n  @media (any-hover: hover) {\r\n    &:hover {\r\n      background-color: #2b2d32;\r\n    }\r\n  }\r\n  &._fw {\r\n    width: 100%;\r\n  }\r\n  &_gray {\r\n    color: #161616;\r\n    background-color: $darkWhite;\r\n    @media (any-hover: hover) {\r\n      &:hover {\r\n        background-color: #e9e9e9;\r\n      }\r\n    }\r\n  }\r\n  &_white {\r\n    color: #161616;\r\n    background-color: #fff;\r\n    @media (any-hover: hover) {\r\n      &:hover {\r\n        background-color: #f4f5f8;\r\n      }\r\n    }\r\n  }\r\n}\r\n","//<INPUT>\r\n// Сніппет (HTML): inp\r\ninput[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"tel\"],\r\ntextarea {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\n\r\n.input {\r\n  border-radius: 0 !important;\r\n  width: 100%;\r\n  display: block;\r\n  padding: 16px 0px;\r\n  background-color: transparent;\r\n  border-bottom: 2px solid #fff;\r\n  outline: none;\r\n  color: #fff;\r\n  font-weight: 400;\r\n  line-height: math.div(20, 16);\r\n\r\n  &._form-focus {\r\n  }\r\n  &._form-error {\r\n  }\r\n}\r\n.input[type=\"search\"] {\r\n  padding: 0px;\r\n  border: 1px solid #eee;\r\n  border-radius: 8px;\r\n  background: var(--background-gray, #f4f5f8);\r\n}\r\n.input[placeholder]:not([data-placeholder-nohiden]) {\r\n  &::placeholder {\r\n    transition: opacity 0.3s;\r\n    color: var(--text-gray-dark-bg, #9f9f9f);\r\n  }\r\n  &:focus::placeholder {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\ntextarea.input {\r\n  resize: none;\r\n  padding: 0px 0px;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  // .header__top\r\n\r\n  &__top {\r\n  }\r\n\r\n  // .header__body\r\n\r\n  &__body {\r\n  }\r\n}\r\n.top-header {\r\n  background: var(--background-gray, #f4f5f8);\r\n  padding: rem(18) 0;\r\n  @include adaptiveValue(\"margin-bottom\", 28, 5);\r\n  transition: all 0.3s ease 0.2s;\r\n  .menu-open & {\r\n    transition: all 0.3s ease 0s;\r\n    transform: translate(0px, -100%);\r\n  }\r\n  // .top-header__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  &__right {\r\n    display: flex;\r\n    color: var(--text-gray-light-bg, #757575);\r\n    font-size: rem(14);\r\n    font-weight: 400;\r\n    line-height: math.div(16, 14);\r\n    @include adaptiveValue(\"gap\", 80, 32, 0, 1280, 1024);\r\n    @media (max-width: $mobile) {\r\n      @include adaptiveValue(\"margin-left\", 94, 25, 0, 768, 320);\r\n      @include adaptiveValue(\"margin-right\", 69, 0, 0, 768, 320);\r\n      flex: 1 1 auto;\r\n      justify-content: space-between;\r\n    }\r\n    @media (max-width: em(610)) {\r\n      margin-right: auto;\r\n      margin-left: auto;\r\n      justify-content: flex-end;\r\n      padding-left: rem(5);\r\n    }\r\n  }\r\n  &__links {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    column-gap: rem(32);\r\n    row-gap: rem(5);\r\n    @media (max-width: $mobile) {\r\n      flex-direction: column;\r\n    }\r\n    @media (max-width: em(610)) {\r\n      display: none;\r\n    }\r\n  }\r\n  // .top-header__content\r\n\r\n  &__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  // .top-header__logo\r\n\r\n  &__logo {\r\n  }\r\n\r\n  // .top-header__contacts\r\n\r\n  &__contacts {\r\n  }\r\n\r\n  // .top-header__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.header {\r\n  // .header__bottom\r\n\r\n  &__bottom {\r\n  }\r\n}\r\n.bottom-header {\r\n  transition: all 0.3s ease 0.2s;\r\n  .menu-open & {\r\n    transition: all 0.3s ease 0s;\r\n    transform: translate(0px, -175%);\r\n  }\r\n  // .bottom-header__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .bottom-header__content\r\n\r\n  &__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  &__left {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: rem(8);\r\n  }\r\n}\r\n\r\n.contacts-top-header {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  column-gap: rem(32);\r\n  row-gap: rem(5);\r\n  @media (max-width: $mobile) {\r\n    flex-direction: column;\r\n  }\r\n\r\n  // .contacts-top-header__link\r\n\r\n  &__link {\r\n    transition: all 0.3s ease 0s;\r\n    &:hover {\r\n      color: $mainColor;\r\n    }\r\n  }\r\n}\r\n.right-top-header {\r\n  // .right-top-header__link\r\n\r\n  &__link {\r\n    transition: all 0.3s ease 0s;\r\n    &:hover {\r\n      color: $mainColor;\r\n    }\r\n  }\r\n\r\n  // .right-top-header__Link\r\n}\r\n.body-header {\r\n  @media (max-width: em(1024)) {\r\n    margin-bottom: rem(8);\r\n  }\r\n  // .body-header__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .body-header__content\r\n\r\n  &__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  // .body-header__menu\r\n\r\n  &__menu {\r\n  }\r\n\r\n  // .body-header__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.top-menu {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  &__logo {\r\n    display: none;\r\n    @media (max-width: em(610)) {\r\n      margin-bottom: rem(44);\r\n      display: block;\r\n    }\r\n  }\r\n}\r\n.menu {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  // .menu__icon\r\n\r\n  // .menu__body\r\n\r\n  &__body {\r\n    @media (max-width: em(610)) {\r\n      padding: rem(24) rem(16);\r\n      position: fixed;\r\n      width: 100%;\r\n      height: 100%;\r\n      top: 0;\r\n      left: -100%;\r\n      background-color: $darkWhite;\r\n      transition: all 0.3s ease 0s;\r\n      z-index: 1;\r\n\r\n      .menu-open & {\r\n        transition: all 0.3s ease 0.2s;\r\n        left: 0;\r\n      }\r\n    }\r\n  }\r\n\r\n  // .menu__list\r\n\r\n  &__list {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: rem(8);\r\n    flex-wrap: wrap;\r\n\r\n    @media (max-width: em(610)) {\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      flex-wrap: nowrap;\r\n      overflow: auto;\r\n      max-height: 60%;\r\n    }\r\n  }\r\n\r\n  // .menu__item\r\n\r\n  &__item {\r\n    @media (max-width: em(610)) {\r\n      display: block;\r\n      position: relative;\r\n      padding-bottom: 16px;\r\n      width: 100%;\r\n      &::before {\r\n        content: \"\";\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 1px;\r\n        bottom: 0;\r\n        left: 0;\r\n        background-color: #e9e9e9;\r\n      }\r\n    }\r\n  }\r\n\r\n  // .menu__link\r\n\r\n  &__link {\r\n    @media (max-width: em(610)) {\r\n      padding: 0;\r\n    }\r\n  }\r\n}\r\n\r\n.right-body-header {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  gap: rem(8);\r\n  // .right-body-header__link\r\n\r\n  &__link {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 44px;\r\n    height: 44px;\r\n  }\r\n\r\n  &__form {\r\n  }\r\n  // .right-body-header__btn\r\n\r\n  &__btn {\r\n    @media (max-width: em(610)) {\r\n      position: absolute;\r\n      width: calc(100% - 15px);\r\n      display: block;\r\n      text-align: center;\r\n      bottom: 24px;\r\n      left: 50%;\r\n      transform: translate(-50%, 0px);\r\n    }\r\n  }\r\n  &__input {\r\n    //  width: 44px;\r\n    //  height: 44px;\r\n    //  &::-webkit-search-cancel-button {\r\n    //    -webkit-appearance: none;\r\n    //    height: 1em;\r\n    //    width: 1em;\r\n    //    border-radius: 50em;\r\n    //    background-image: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)\r\n    //      no-repeat 50% 50%;\r\n    //    background-size: contain;\r\n    //    opacity: 0;\r\n    //    pointer-events: none;\r\n    //  }\r\n  }\r\n}\r\n.form-right-body-header {\r\n  display: flex;\r\n  &__input {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 0;\r\n    padding: 0;\r\n    border: none !important;\r\n    position: relative;\r\n    outline: none;\r\n    &::-webkit-search-cancel-button {\r\n      -webkit-appearance: none;\r\n      pointer-events: none;\r\n    }\r\n  }\r\n  &__link {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 44px;\r\n    height: 44px;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n  &__close {\r\n    display: none;\r\n    cursor: pointer;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 44px;\r\n    height: 44px;\r\n    position: relative;\r\n    z-index: 1;\r\n    margin-left: 8px;\r\n  }\r\n}\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n  display: none;\r\n\r\n  @media (max-width: em(610)) {\r\n    display: block;\r\n    position: relative;\r\n    padding: 13px 7px;\r\n    width: rem(44);\r\n    height: rem(44);\r\n    transition: all 0.3s ease 0s;\r\n    @media (any-hover: none) {\r\n      cursor: default;\r\n    }\r\n    span,\r\n    &::before,\r\n    &::after {\r\n      content: \"\";\r\n      transition: all 0.3s ease 0s;\r\n      right: 50%;\r\n      position: absolute;\r\n      width: percent(20, 44);\r\n      height: rem(3);\r\n      background-color: #161616;\r\n      transform: translate(50%, 0px);\r\n    }\r\n    &::before {\r\n      top: percent(12, 44);\r\n    }\r\n    &::after {\r\n      bottom: percent(12, 44);\r\n    }\r\n    span {\r\n      top: calc(50% - rem(1.5));\r\n    }\r\n    .menu-open & {\r\n      position: absolute;\r\n      right: 16px;\r\n      z-index: 3;\r\n      span {\r\n        width: 0;\r\n      }\r\n      &::before,\r\n      &::after {\r\n      }\r\n      &::before {\r\n        top: calc(50% - rem(1.5));\r\n        transform: translate(50%, 50%) rotate(-45deg);\r\n      }\r\n      &::after {\r\n        bottom: calc(50% - rem(1.5));\r\n        transform: translate(50%, 50%) rotate(45deg);\r\n      }\r\n    }\r\n  }\r\n}\r\n","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: rem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: rem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.footer {\r\n  // .footer__form\r\n\r\n  &__form {\r\n  }\r\n\r\n  // .footer__bottom\r\n\r\n  &__bottom {\r\n  }\r\n}\r\n.form-footer {\r\n  @include adaptiveValue(\"padding-top\", 120, 60);\r\n  @include adaptiveValue(\"padding-bottom\", 120, 60);\r\n  // .form-footer__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .form-footer__content\r\n\r\n  &__content {\r\n    border-radius: 20px;\r\n    background: var(--background-black, #202226);\r\n    @include adaptiveValue(\"padding-top\", 60, 12, 0, 1024, 320);\r\n    @include adaptiveValue(\"padding-bottom\", 60, 12, 0, 1024, 320);\r\n    @include adaptiveValue(\"padding-left\", 40, 12, 0, 1024, 320);\r\n    @include adaptiveValue(\"padding-right\", 40, 12, 0, 1024, 320);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    @include adaptiveValue(\"gap\", 116, 16);\r\n    @media (max-width: $mobile) {\r\n      flex-direction: column;\r\n    }\r\n  }\r\n\r\n  // .form-footer__left\r\n\r\n  &__left {\r\n  }\r\n\r\n  // .form-footer__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.left-form-footer {\r\n  flex: 0 1 451px;\r\n  @media (max-width: $mobile) {\r\n    flex: 1 1 auto;\r\n  }\r\n  // .left-form-footer__title\r\n\r\n  &__title {\r\n    color: var(--text-white, #fff);\r\n    @include adaptiveValue(\"font-size\", 40, 24);\r\n    font-weight: 400;\r\n    line-height: math.div(48, 40);\r\n    @include adaptiveValue(\"margin-bottom\", 20, 12);\r\n  }\r\n\r\n  // .left-form-footer__desc\r\n\r\n  &__desc {\r\n    color: var(--text-gray-dark-bg, #9f9f9f);\r\n    @include adaptiveValue(\"font-size\", 16, 14);\r\n    font-weight: 400;\r\n    line-height: math.div(20, 16);\r\n  }\r\n}\r\n\r\n.right-form-footer {\r\n  flex: 0 1 552px;\r\n  @media (max-width: $mobile) {\r\n    flex: 1 1 auto;\r\n  }\r\n  // .right-form-footer__form\r\n\r\n  &__form {\r\n  }\r\n\r\n  // .right-form-footer__input\r\n\r\n  &__input {\r\n    &:not(:last-child) {\r\n      @include adaptiveValue(\"margin-bottom\", 20, 8);\r\n    }\r\n  }\r\n\r\n  &__btn {\r\n    @include adaptiveValue(\"margin-top\", 44, 32);\r\n  }\r\n}\r\n\r\n.bottom-footer {\r\n  background: var(--background-gray, #f4f5f8);\r\n  @include adaptiveValue(\"padding-top\", 24, 16);\r\n  @include adaptiveValue(\"padding-bottom\", 24, 16);\r\n  // .bottom-footer__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .bottom-footer__content\r\n\r\n  &__content {\r\n  }\r\n\r\n  // .bottom-footer__top\r\n\r\n  &__top {\r\n  }\r\n\r\n  // .bottom-footer__mid\r\n\r\n  &__mid {\r\n  }\r\n\r\n  // .bottom-footer__socials\r\n\r\n  &__socials {\r\n  }\r\n\r\n  // .bottom-footer__bottom\r\n\r\n  &__bottom {\r\n  }\r\n}\r\n.top-bottom-footer {\r\n  @include adaptiveValue(\"padding-bottom\", 28, 20);\r\n  border-bottom: 1px solid #e9e9e9;\r\n  @include adaptiveValue(\"margin-bottom\", 40, 52);\r\n  // .top-bottom-footer__logo\r\n\r\n  &__logo {\r\n  }\r\n}\r\n.mid-bottom-footer {\r\n  display: flex;\r\n  @include adaptiveValue(\"gap\", 233, 16, 0, 1200, 944);\r\n  @media (max-width: $mobile) {\r\n    flex-direction: column;\r\n  }\r\n\r\n  //   display: grid;\r\n  //   grid-template: 1fr / minmax(288px, 389px) 1fr 288px 288px;\r\n  @media (max-width: em(1024)) {\r\n    //  grid-template: 1fr 1fr / minmax(288px, 389px) 16px 288px;\r\n    //  row-gap: 40px;\r\n  }\r\n  @media (max-width: $mobile) {\r\n    //  grid-template: 1fr 1fr / 1fr 1fr;\r\n    //  column-gap: 16px;\r\n    //  row-gap: 62px;\r\n  }\r\n  @media (max-width: $mobileSmall) {\r\n    //  display: flex;\r\n    //  flex-direction: column;\r\n    //  row-gap: 52px;\r\n  }\r\n\r\n  // .mid-bottom-footer__left\r\n\r\n  &__left {\r\n  }\r\n\r\n  // .mid-bottom-footer__mid\r\n\r\n  &__mid {\r\n  }\r\n\r\n  // .mid-bottom-footer__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.left-mid-footer {\r\n  flex: 0 1 389px;\r\n  //   grid-row: span 2;\r\n  @media (max-width: $mobile) {\r\n    flex: 1 1 auto;\r\n    @include adaptiveValue(\"margin-bottom\", 62, 58);\r\n  }\r\n  // .left-mid-footer__text\r\n\r\n  &__text {\r\n    color: var(--text-black, #161616);\r\n    font-feature-settings: \"liga\" off;\r\n    font-weight: 500;\r\n    @include adaptiveValue(\"font-size\", 24, 18);\r\n    line-height: math.div(28, 24);\r\n    letter-spacing: 0.24px;\r\n  }\r\n\r\n  // .left-mid-footer__street\r\n\r\n  &__street {\r\n    display: block;\r\n    @include adaptiveValue(\"margin-bottom\", 24, 32);\r\n  }\r\n\r\n  // .left-mid-footer__phone\r\n\r\n  &__phone {\r\n    display: block;\r\n    @include adaptiveValue(\"margin-bottom\", 8, 16);\r\n  }\r\n\r\n  // .left-mid-footer__email\r\n\r\n  &__email {\r\n    display: block;\r\n    @include adaptiveValue(\"margin-bottom\", 24, 32);\r\n  }\r\n\r\n  // .left-mid-footer__btns\r\n\r\n  &__btns {\r\n    display: flex;\r\n    gap: 8px;\r\n    @include adaptiveValue(\"margin-bottom\", 62, 38);\r\n  }\r\n\r\n  // .left-mid-footer__btn\r\n\r\n  &__btn {\r\n  }\r\n\r\n  // .left-mid-footer__socials\r\n\r\n  &__socials {\r\n  }\r\n}\r\n.socials-left-mid-footer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  // .socials-left-mid-footer__item\r\n\r\n  &__item {\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    max-width: 44px;\r\n    max-height: 44px;\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n    border: 1px solid var(--border-or-devider-light-bg, #e9e9e9);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  // .socials-left-mid-footer__desc\r\n\r\n  &__desc {\r\n    margin-left: 16px;\r\n    color: var(--text-gray-light-bg, #757575);\r\n    line-height: math.div(20, 16);\r\n  }\r\n}\r\n// .mid-mid-bottom-footer {\r\n//   grid-column: 3;\r\n//   @media (max-width: $mobile) {\r\n//     grid-column: 1;\r\n//     grid-row: 2;\r\n//   }\r\n//   // .mid-mid-bottom-footer__title\r\n\r\n//   &__title {\r\n//     color: var(--text-black, #161616);\r\n//     @include adaptiveValue(\"font-size\", 20, 16);\r\n//     font-weight: 500;\r\n//     line-height: math.div(24, 20);\r\n//     letter-spacing: -0.6px;\r\n//     @include adaptiveValue(\"margin-bottom\", 32, 24);\r\n//   }\r\n\r\n//   // .mid-mid-bottom-footer__list\r\n\r\n//   &__list {\r\n//   }\r\n// }\r\n// .list-mid-bottom-footer {\r\n//   // .list-mid-bottom-footer__item\r\n\r\n//   &__item {\r\n//     &:not(:last-child) {\r\n//       @include adaptiveValue(\"margin-bottom\", 12, 20);\r\n//     }\r\n//   }\r\n\r\n//   // .list-mid-bottom-footer__link\r\n\r\n//   &__link {\r\n//     @include adaptiveValue(\"font-size\", 16, 14);\r\n//   }\r\n// }\r\n// .right-mid-bottom-footer {\r\n//   grid-column: 4;\r\n//   @media (max-width: em(1024)) {\r\n//     grid-column: 3;\r\n//     grid-row: 2;\r\n//   }\r\n//   @media (max-width: $mobile) {\r\n//     grid-column: 2;\r\n//     grid-row: 2;\r\n//   }\r\n//   // .right-mid-bottom-footer__title\r\n\r\n//   &__title {\r\n//     color: var(--text-black, #161616);\r\n//     @include adaptiveValue(\"font-size\", 20, 16);\r\n//     font-weight: 500;\r\n//     line-height: math.div(24, 20);\r\n//     letter-spacing: -0.6px;\r\n//     @include adaptiveValue(\"margin-bottom\", 32, 24);\r\n//   }\r\n\r\n//   // .right-mid-bottom-footer__list\r\n\r\n//   &__list {\r\n//   }\r\n// }\r\n// .list-right-bottom-footer {\r\n//   // .list-right-bottom-footer__item\r\n\r\n//   &__item {\r\n//     &:not(:last-child) {\r\n//       @include adaptiveValue(\"margin-bottom\", 12, 20);\r\n//     }\r\n//   }\r\n\r\n//   // .list-right-bottom-footer__link\r\n\r\n//   &__link {\r\n//     @include adaptiveValue(\"font-size\", 16, 14);\r\n//   }\r\n// }\r\n.right-mid-bottom-footer {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  column-gap: 16px;\r\n  row-gap: 40px;\r\n  @media (max-width: em(1024)) {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  // .right-mid-bottom-footer__item\r\n\r\n  &__item {\r\n  }\r\n}\r\n.item-right-footer {\r\n  flex: 0 1 288px;\r\n  // .item-right-footer__title\r\n  color: var(--text-black, #161616);\r\n  &__title {\r\n    @include adaptiveValue(\"font-size\", 20, 16);\r\n    font-weight: 500;\r\n    line-height: math.div(24, 20);\r\n    letter-spacing: -0.6px;\r\n    @include adaptiveValue(\"margin-bottom\", 32, 24);\r\n  }\r\n\r\n  // .item-right-footer__list\r\n\r\n  &__list {\r\n    @include adaptiveValue(\"font-size\", 16, 14);\r\n    font-weight: 400;\r\n    line-height: math.div(20, 16);\r\n  }\r\n}\r\n.list-item-right-footer {\r\n  // .list-item-right-footer__item\r\n\r\n  &__item {\r\n    &:not(:last-child) {\r\n      @include adaptiveValue(\"margin-bottom\", 12, 20);\r\n    }\r\n  }\r\n\r\n  // .list-item-right-footer__link\r\n\r\n  &__link {\r\n  }\r\n}\r\n\r\n.bottom-bottom-footer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  row-gap: 8px;\r\n  justify-content: space-between;\r\n  @include adaptiveValue(\"padding-top\", 24, 16);\r\n  border-top: 1px solid #e9e9e9;\r\n  @include adaptiveValue(\"margin-top\", 42, 52);\r\n  // .bottom-bottom-footer__copyright\r\n\r\n  color: var(--text-gray-light-bg, #757575);\r\n  font-weight: 400;\r\n  line-height: math.div(20, 16);\r\n  &__copyright {\r\n  }\r\n\r\n  // .bottom-bottom-footer__policy\r\n\r\n  &__policy {\r\n  }\r\n}\r\n\r\n//====================================================================================================\r\n",".advantages {\r\n  // .advantages__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .advantages__content\r\n\r\n  &__content {\r\n  }\r\n\r\n  // .advantages__cards\r\n\r\n  &__cards {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: 0 rem(-8);\r\n  }\r\n}\r\n.card-advantages {\r\n  flex: 0 1 33.333%;\r\n  padding: 0 rem(8);\r\n  // .card-advantages__body\r\n\r\n  &__body {\r\n    min-width: 60px;\r\n    min-height: 60px;\r\n  }\r\n\r\n  // .card-advantages__img-ibg\r\n\r\n  &__img-ibg {\r\n  }\r\n\r\n  // .card-advantages__content\r\n\r\n  &__content {\r\n  }\r\n\r\n  // .card-advantages__title\r\n\r\n  &__title {\r\n  }\r\n\r\n  // .card-advantages__desc\r\n\r\n  &__desc {\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e4324b98391a8fba5bd3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xZjRkNmIwNTM2ZjMxZTVkYzNkNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix1SEFBdUg7QUFDdkgsbUhBQW1ILGtCQUFrQjtBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvZUFBb2UsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxRQUFRLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxRQUFRLFlBQVksWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sU0FBUyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sT0FBTyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sTUFBTSxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFP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TyxLQUFLLHNCQUFzQix3QkFBd0Isd0JBQXdCLGtEQUFrRCx3QkFBd0IseUJBQXlCLE9BQU8sNERBQTRELE9BQU8sNERBQTRELE9BQU8sd0RBQXdELE9BQU8sc0RBQXNELE9BQU8sS0FBSyx1QkFBdUI7QUFDcjFoRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUNyOEN2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Hb2xvcytUZXh0OndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogaWNvbnM7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoXCIuLi9mb250cy9pY29ucy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vZm9udHMvaWNvbnMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5bY2xhc3MqPV9pY29uLV06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiaWNvbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzKj1faWNvbi1dOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uX2ljb24tc2V0dGluZ3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwMFwiO1xufVxuXG4uX2ljb24tY2FzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTAxXCI7XG59XG5cbi5faWNvbi1kZWxpdmVyeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTAyXCI7XG59XG5cbi5faWNvbi1yZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MDNcIjtcbn1cblxuLl9pY29uLXlvdXR1YmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwNFwiO1xufVxuXG4uX2ljb24taW5zdGFncmFtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MDVcIjtcbn1cblxuLl9pY29uLWd1YXJhbnRlZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTA2XCI7XG59XG5cbi5faWNvbi1zYWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MDdcIjtcbn1cblxuLl9pY29uLWFycm93LWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwOFwiO1xufVxuXG4uX2ljb24tYnVyZ2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MDlcIjtcbn1cblxuLl9pY29uLWZpbHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTBhXCI7XG59XG5cbi5faWNvbi1jbG9zZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTBiXCI7XG59XG5cbi5faWNvbi1hbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwZFwiO1xufVxuXG4uX2ljb24tc2VhcmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MGVcIjtcbn1cblxuLl9pY29uLWNhcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwZlwiO1xufVxuXG4uX2ljb24tc2VydmljZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTEyXCI7XG59XG5cbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMxNjE2MTY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogXCJHb2xvcyBUZXh0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvbG9zIFRleHRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLmxvY2sgYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcbn1cbi53cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBzdXBwb3J0cyAob3ZlcmZsb3c6IGNsaXApIHtcbiAgLndyYXBwZXIge1xuICAgIG92ZXJmbG93OiBjbGlwO1xuICB9XG59XG4ud3JhcHBlciA+IG1haW4ge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi53cmFwcGVyID4gKiB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuaWZyYW1lI3dlYnBhY2stZGV2LXNlcnZlci1jbGllbnQtb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLypcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxu0LLRgdGW0YUg0LrQu9Cw0YHRltCyLCDRidC+INC80ZbRgdGC0Y/RgtGMICpfX2NvbnRhaW5lclxu0J3QsNC/0YDQuNC60LvQsNC0IGhlYWRlcl9fY29udGFpbmVyLCBtYWluX19jb250YWluZXIg0ZYg0YIu0L8uXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxuKi9cbltjbGFzcyo9X19jb250YWluZXJdIHtcbiAgbWF4LXdpZHRoOiA3Ni44NzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDAuOTM3NXJlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjIyNjtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUsICNmZmYpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xuICAuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyZDMyO1xuICB9XG59XG4uYnV0dG9uLl9mdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbl9ncmF5IHtcbiAgY29sb3I6ICMxNjE2MTY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLmJ1dHRvbl9ncmF5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICB9XG59XG4uYnV0dG9uX3doaXRlIHtcbiAgY29sb3I6ICMxNjE2MTY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLmJ1dHRvbl93aGl0ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmODtcbiAgfVxufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPXRlbF0sXG50ZXh0YXJlYSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG4uaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTZweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuLmlucHV0W3R5cGU9c2VhcmNoXSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWdyYXksICNmNGY1ZjgpO1xufVxuXG4uaW5wdXRbcGxhY2Vob2xkZXJdOm5vdChbZGF0YS1wbGFjZWhvbGRlci1ub2hpZGVuXSk6OnBsYWNlaG9sZGVyIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWRhcmstYmcsICM5ZjlmOWYpO1xufVxuLmlucHV0W3BsYWNlaG9sZGVyXTpub3QoW2RhdGEtcGxhY2Vob2xkZXItbm9oaWRlbl0pOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbnRleHRhcmVhLmlucHV0IHtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nOiAwcHggMHB4O1xufVxuXG5bY2xhc3MqPS1pYmddIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuW2NsYXNzKj0taWJnXSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbltjbGFzcyo9LWliZ19jb250YWluXSBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLnRvcC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWdyYXksICNmNGY1ZjgpO1xuICBwYWRkaW5nOiAxLjEyNXJlbSAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDAuMnM7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLnRvcC1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC4zMTI1cmVtICwgLTAuMTkyOTk0NTA1NXJlbSAgKyAgMi41Mjc0NzI1Mjc1dncgLCAxLjc1cmVtICkpIHtcbiAgICAudG9wLWhlYWRlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC4zMTI1cmVtICwgLTAuMTkyOTk0NTA1NXJlbSAgKyAgMi41Mjc0NzI1Mjc1dncgLCAxLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjMxMjVyZW0gLCAtMC4xOTI5OTQ1MDU1cmVtICArICAyLjUyNzQ3MjUyNzV2dyAsIDEuNzVyZW0gKSkge1xuICAgIC50b3AtaGVhZGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC4zMTI1cmVtICsgMS40Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50b3AtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjMxMjVyZW07XG4gIH1cbn1cbi5tZW51LW9wZW4gLnRvcC1oZWFkZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0xMDAlKTtcbn1cbi50b3AtaGVhZGVyX19yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWdyYXktbGlnaHQtYmcsICM3NTc1NzUpO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4xNDI4NTcxNDI5O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDgwZW0pIHtcbiAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICBnYXA6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSBhbmQgKG1heC13aWR0aDogODBlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDJyZW0gLCAtMTByZW0gICsgIDE4Ljc1dncgLCA1cmVtICkpIHtcbiAgICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgICAgZ2FwOiBjbGFtcCggMnJlbSAsIC0xMHJlbSAgKyAgMTguNzV2dyAsIDVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMnJlbSAsIC0xMHJlbSAgKyAgMTguNzV2dyAsIDVyZW0gKSkge1xuICAgIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgICBnYXA6IGNhbGMoMnJlbSArIDMgKiAoMTAwdncgLSA2NHJlbSkgLyAxNik7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjRlbSkge1xuICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgIGdhcDogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogNDhlbSkge1xuICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgIG1hcmdpbi1sZWZ0OiA1Ljg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNDhlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS41NjI1cmVtICwgLTEuNTE3ODU3MTQyOXJlbSAgKyAgMTUuNDAxNzg1NzE0M3Z3ICwgNS44NzVyZW0gKSkge1xuICAgIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgICBtYXJnaW4tbGVmdDogY2xhbXAoIDEuNTYyNXJlbSAsIC0xLjUxNzg1NzE0MjlyZW0gICsgIDE1LjQwMTc4NTcxNDN2dyAsIDUuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS41NjI1cmVtICwgLTEuNTE3ODU3MTQyOXJlbSAgKyAgMTUuNDAxNzg1NzE0M3Z3ICwgNS44NzVyZW0gKSkge1xuICAgIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYygxLjU2MjVyZW0gKyA0LjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyAyOCk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICBtYXJnaW4tbGVmdDogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQuMzEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNDhlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0zLjA4MDM1NzAzNTdyZW0gICsgIDE1LjQwMTc4NTQ5MTF2dyAsIDQuMzEyNXJlbSApKSB7XG4gICAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0zLjA4MDM1NzAzNTdyZW0gICsgIDE1LjQwMTc4NTQ5MTF2dyAsIDQuMzEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMy4wODAzNTcwMzU3cmVtICArICAxNS40MDE3ODU0OTExdncgLCA0LjMxMjVyZW0gKSkge1xuICAgIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgNC4zMTI0OTk5Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gMjgpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctbGVmdDogMC4zMTI1cmVtO1xuICB9XG59XG4udG9wLWhlYWRlcl9fbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGNvbHVtbi1nYXA6IDJyZW07XG4gIHJvdy1nYXA6IDAuMzEyNXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC50b3AtaGVhZGVyX19saW5rcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSB7XG4gIC50b3AtaGVhZGVyX19saW5rcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnRvcC1oZWFkZXJfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm90dG9tLWhlYWRlciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMC4ycztcbn1cbi5tZW51LW9wZW4gLmJvdHRvbS1oZWFkZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0xNzUlKTtcbn1cbi5ib3R0b20taGVhZGVyX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJvdHRvbS1oZWFkZXJfX2xlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMC41cmVtO1xufVxuXG4uY29udGFjdHMtdG9wLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgY29sdW1uLWdhcDogMnJlbTtcbiAgcm93LWdhcDogMC4zMTI1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmNvbnRhY3RzLXRvcC1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5jb250YWN0cy10b3AtaGVhZGVyX19saW5rIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cbi5jb250YWN0cy10b3AtaGVhZGVyX19saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMxNjE2MTY7XG59XG5cbi5yaWdodC10b3AtaGVhZGVyX19saW5rIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cbi5yaWdodC10b3AtaGVhZGVyX19saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMxNjE2MTY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NGVtKSB7XG4gIC5ib2R5LWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG59XG4uYm9keS1oZWFkZXJfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnRvcC1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvcC1tZW51X19sb2dvIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAudG9wLW1lbnVfX2xvZ28ge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNzVyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcGFkZGluZzogMS41cmVtIDFyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmODtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgLm1lbnUtb3BlbiAubWVudV9fYm9keSB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwLjJzO1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbi5tZW51X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA2MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAubWVudV9faXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tZW51X19pdGVtOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4ucmlnaHQtYm9keS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cbi5yaWdodC1ib2R5LWhlYWRlcl9fbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSB7XG4gIC5yaWdodC1ib2R5LWhlYWRlcl9fYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3R0b206IDI0cHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDBweCk7XG4gIH1cbn1cbi5mb3JtLXJpZ2h0LWJvZHktaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mb3JtLXJpZ2h0LWJvZHktaGVhZGVyX19pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5mb3JtLXJpZ2h0LWJvZHktaGVhZGVyX19pbnB1dDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uZm9ybS1yaWdodC1ib2R5LWhlYWRlcl9fbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uZm9ybS1yaWdodC1ib2R5LWhlYWRlcl9fY2xvc2Uge1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5pY29uLW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxM3B4IDdweDtcbiAgICB3aWR0aDogMi43NXJlbTtcbiAgICBoZWlnaHQ6IDIuNzVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSBhbmQgKGFueS1ob3Zlcjogbm9uZSkge1xuICAuaWNvbi1tZW51IHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAuaWNvbi1tZW51IHNwYW4sIC5pY29uLW1lbnU6OmJlZm9yZSwgLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICByaWdodDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDUuNDU0NTQ1NDU0NSU7XG4gICAgaGVpZ2h0OiAwLjE4NzVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDBweCk7XG4gIH1cbiAgLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IDI3LjI3MjcyNzI3MjclO1xuICB9XG4gIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBib3R0b206IDI3LjI3MjcyNzI3MjclO1xuICB9XG4gIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDkzNzVyZW0pO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIHotaW5kZXg6IDM7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51IHNwYW4ge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMC4wOTM3NXJlbSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGJvdHRvbTogY2FsYyg1MCUgLSAwLjA5Mzc1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmZvcm0tZm9vdGVyIHtcbiAgICBwYWRkaW5nLXRvcDogNy41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAzLjc1cmVtICwgMi40MzEzMTg2ODEzcmVtICArICA2LjU5MzQwNjU5MzR2dyAsIDcuNXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMy43NXJlbSAsIDIuNDMxMzE4NjgxM3JlbSAgKyAgNi41OTM0MDY1OTM0dncgLCA3LjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAzLjc1cmVtICwgMi40MzEzMTg2ODEzcmVtICArICA2LjU5MzQwNjU5MzR2dyAsIDcuNXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDMuNzVyZW0gKyAzLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb3JtLWZvb3RlciB7XG4gICAgcGFkZGluZy10b3A6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuZm9ybS1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA3LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAyLjQzMTMxODY4MTNyZW0gICsgIDYuNTkzNDA2NTkzNHZ3ICwgNy41cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMi40MzEzMTg2ODEzcmVtICArICA2LjU5MzQwNjU5MzR2dyAsIDcuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAyLjQzMTMxODY4MTNyZW0gICsgIDYuNTkzNDA2NTkzNHZ3ICwgNy41cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMy43NXJlbSArIDMuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvcm0tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy43NXJlbTtcbiAgfVxufVxuLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ibGFjaywgIzIwMjIyNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNjRlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMC43NXJlbSAsIC0wLjYxMzYzNjM2MzZyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMC43NXJlbSAsIC0wLjYxMzYzNjM2MzZyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDAuNzVyZW0gLCAtMC42MTM2MzYzNjM2cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygwLjc1cmVtICsgMyAqICgxMDB2dyAtIDIwcmVtKSAvIDQ0KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgcGFkZGluZy1ib3R0b206IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNjRlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC43NXJlbSAsIC0wLjYxMzYzNjM2MzZyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC43NXJlbSAsIC0wLjYxMzYzNjM2MzZyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNzVyZW0gLCAtMC42MTM2MzYzNjM2cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygwLjc1cmVtICsgMyAqICgxMDB2dyAtIDIwcmVtKSAvIDQ0KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNjRlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDAuNzVyZW0gLCAtMC4wNDU0NTQ1NDU1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDIuNXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDAuNzVyZW0gLCAtMC4wNDU0NTQ1NDU1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAwLjc1cmVtICwgLTAuMDQ1NDU0NTQ1NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCAyLjVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMC43NXJlbSArIDEuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA0NCk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0ZW0pIHtcbiAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNjRlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAwLjc1cmVtICwgLTAuMDQ1NDU0NTQ1NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCAyLjVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMC43NXJlbSAsIC0wLjA0NTQ1NDU0NTVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAwLjc1cmVtICwgLTAuMDQ1NDU0NTQ1NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCAyLjVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDAuNzVyZW0gKyAxLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNDQpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICBnYXA6IDcuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAxcmVtICwgLTEuMTk3ODAyMTk3OHJlbSAgKyAgMTAuOTg5MDEwOTg5dncgLCA3LjI1cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgICAgZ2FwOiBjbGFtcCggMXJlbSAsIC0xLjE5NzgwMjE5NzhyZW0gICsgIDEwLjk4OTAxMDk4OXZ3ICwgNy4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChnYXA6IGNsYW1wKCAxcmVtICwgLTEuMTk3ODAyMTk3OHJlbSAgKyAgMTAuOTg5MDEwOTg5dncgLCA3LjI1cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgICAgZ2FwOiBjYWxjKDFyZW0gKyA2LjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5sZWZ0LWZvcm0tZm9vdGVyIHtcbiAgZmxleDogMCAxIDQ1MXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmxlZnQtZm9ybS1mb290ZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG59XG4ubGVmdC1mb3JtLWZvb3Rlcl9fdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSwgI2ZmZik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxlZnQtZm9ybS1mb290ZXJfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMTQ4MzUxNjQ4NHJlbSAgKyAgMS43NTgyNDE3NTgydncgLCAyLjVyZW0gKSkge1xuICAgIC5sZWZ0LWZvcm0tZm9vdGVyX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjE0ODM1MTY0ODRyZW0gICsgIDEuNzU4MjQxNzU4MnZ3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMTQ4MzUxNjQ4NHJlbSAgKyAgMS43NTgyNDE3NTgydncgLCAyLjVyZW0gKSkge1xuICAgIC5sZWZ0LWZvcm0tZm9vdGVyX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS41cmVtICsgMSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1mb3JtLWZvb3Rlcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxlZnQtZm9ybS1mb290ZXJfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNzVyZW0gLCAwLjU3NDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmxlZnQtZm9ybS1mb290ZXJfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjc1cmVtICwgMC41NzQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNzVyZW0gLCAwLjU3NDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmxlZnQtZm9ybS1mb290ZXJfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC43NXJlbSArIDAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1mb3JtLWZvb3Rlcl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIH1cbn1cbi5sZWZ0LWZvcm0tZm9vdGVyX19kZXNjIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZ3JheS1kYXJrLWJnLCAjOWY5ZjlmKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxlZnQtZm9ybS1mb290ZXJfX2Rlc2Mge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODc1cmVtICwgMC44MzEwNDM5NTZyZW0gICsgIDAuMjE5NzgwMjE5OHZ3ICwgMXJlbSApKSB7XG4gICAgLmxlZnQtZm9ybS1mb290ZXJfX2Rlc2Mge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC44NzVyZW0gLCAwLjgzMTA0Mzk1NnJlbSAgKyAgMC4yMTk3ODAyMTk4dncgLCAxcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODc1cmVtICwgMC44MzEwNDM5NTZyZW0gICsgIDAuMjE5NzgwMjE5OHZ3ICwgMXJlbSApKSB7XG4gICAgLmxlZnQtZm9ybS1mb290ZXJfX2Rlc2Mge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuODc1cmVtICsgMC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtZm9ybS1mb290ZXJfX2Rlc2Mge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIH1cbn1cblxuLnJpZ2h0LWZvcm0tZm9vdGVyIHtcbiAgZmxleDogMCAxIDU1MnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLnJpZ2h0LWZvcm0tZm9vdGVyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5yaWdodC1mb3JtLWZvb3Rlcl9faW5wdXQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjVyZW0gLCAwLjIzNjI2MzczNjNyZW0gICsgIDEuMzE4NjgxMzE4N3Z3ICwgMS4yNXJlbSApKSB7XG4gICAgLnJpZ2h0LWZvcm0tZm9vdGVyX19pbnB1dDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjVyZW0gLCAwLjIzNjI2MzczNjNyZW0gICsgIDEuMzE4NjgxMzE4N3Z3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC41cmVtICwgMC4yMzYyNjM3MzYzcmVtICArICAxLjMxODY4MTMxODd2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5yaWdodC1mb3JtLWZvb3Rlcl9faW5wdXQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuNXJlbSArIDAuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnJpZ2h0LWZvcm0tZm9vdGVyX19pbnB1dDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAucmlnaHQtZm9ybS1mb290ZXJfX2J0biB7XG4gICAgbWFyZ2luLXRvcDogMi43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi10b3A6IGNsYW1wKCAycmVtICwgMS43MzYyNjM3MzYzcmVtICArICAxLjMxODY4MTMxODd2dyAsIDIuNzVyZW0gKSkge1xuICAgIC5yaWdodC1mb3JtLWZvb3Rlcl9fYnRuIHtcbiAgICAgIG1hcmdpbi10b3A6IGNsYW1wKCAycmVtICwgMS43MzYyNjM3MzYzcmVtICArICAxLjMxODY4MTMxODd2dyAsIDIuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXRvcDogY2xhbXAoIDJyZW0gLCAxLjczNjI2MzczNjNyZW0gICsgIDEuMzE4NjgxMzE4N3Z3ICwgMi43NXJlbSApKSB7XG4gICAgLnJpZ2h0LWZvcm0tZm9vdGVyX19idG4ge1xuICAgICAgbWFyZ2luLXRvcDogY2FsYygycmVtICsgMC43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAucmlnaHQtZm9ybS1mb290ZXJfX2J0biB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuXG4uYm90dG9tLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtZ3JheSwgI2Y0ZjVmOCk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICkpIHtcbiAgICAuYm90dG9tLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMXJlbSAsIDAuODI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjVyZW0gKSkge1xuICAgIC5ib3R0b20tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDFyZW0gKyAwLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICkpIHtcbiAgICAuYm90dG9tLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMXJlbSAsIDAuODI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjVyZW0gKSkge1xuICAgIC5ib3R0b20tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDFyZW0gKyAwLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG59XG4udG9wLWJvdHRvbS1mb290ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAudG9wLWJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMS4wNzQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuNzVyZW0gKSkge1xuICAgIC50b3AtYm90dG9tLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAxLjA3NDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAxLjA3NDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS43NXJlbSApKSB7XG4gICAgLnRvcC1ib3R0b20tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEuMjVyZW0gKyAwLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnRvcC1ib3R0b20tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC50b3AtYm90dG9tLWZvb3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDMuNTEzNzM2MjYzN3JlbSAgKyAgLTEuMzE4NjgxMzE4N3Z3ICwgMy4yNXJlbSApKSB7XG4gICAgLnRvcC1ib3R0b20tZm9vdGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAzLjUxMzczNjI2MzdyZW0gICsgIC0xLjMxODY4MTMxODd2dyAsIDMuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDMuNTEzNzM2MjYzN3JlbSAgKyAgLTEuMzE4NjgxMzE4N3Z3ICwgMy4yNXJlbSApKSB7XG4gICAgLnRvcC1ib3R0b20tZm9vdGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMy4yNXJlbSArIC0wLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50b3AtYm90dG9tLWZvb3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy4yNXJlbTtcbiAgfVxufVxuLm1pZC1ib3R0b20tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5taWQtYm90dG9tLWZvb3RlciB7XG4gICAgZ2FwOiAxNC41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTllbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAxcmVtICwgLTQ5LjAxMTcxODc1cmVtICArICA4NC43NjU2MjV2dyAsIDE0LjU2MjVyZW0gKSkge1xuICAgIC5taWQtYm90dG9tLWZvb3RlciB7XG4gICAgICBnYXA6IGNsYW1wKCAxcmVtICwgLTQ5LjAxMTcxODc1cmVtICArICA4NC43NjU2MjV2dyAsIDE0LjU2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMXJlbSAsIC00OS4wMTE3MTg3NXJlbSAgKyAgODQuNzY1NjI1dncgLCAxNC41NjI1cmVtICkpIHtcbiAgICAubWlkLWJvdHRvbS1mb290ZXIge1xuICAgICAgZ2FwOiBjYWxjKDFyZW0gKyAxMy41NjI1ICogKDEwMHZ3IC0gNTlyZW0pIC8gMTYpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcbiAgLm1pZC1ib3R0b20tZm9vdGVyIHtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5taWQtYm90dG9tLWZvb3RlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmxlZnQtbWlkLWZvb3RlciB7XG4gIGZsZXg6IDAgMSAzODlweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDMuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjYyNXJlbSAsIDMuNTM3MDg3OTEyMXJlbSAgKyAgMC40Mzk1NjA0Mzk2dncgLCAzLjg3NXJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3RlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMy42MjVyZW0gLCAzLjUzNzA4NzkxMjFyZW0gICsgIDAuNDM5NTYwNDM5NnZ3ICwgMy44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDMuNjI1cmVtICwgMy41MzcwODc5MTIxcmVtICArICAwLjQzOTU2MDQzOTZ2dyAsIDMuODc1cmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMy42MjVyZW0gKyAwLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1taWQtZm9vdGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjYyNXJlbTtcbiAgfVxufVxuLmxlZnQtbWlkLWZvb3Rlcl9fdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrLCAjMTYxNjE2KTtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImxpZ2FcIiBvZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE2NjY2NjY2Njc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3Rlcl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDAuOTkzMTMxODY4MXJlbSAgKyAgMC42NTkzNDA2NTkzdncgLCAxLjVyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXJfX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS4xMjVyZW0gLCAwLjk5MzEzMTg2ODFyZW0gICsgIDAuNjU5MzQwNjU5M3Z3ICwgMS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMC45OTMxMzE4NjgxcmVtICArICAwLjY1OTM0MDY1OTN2dyAsIDEuNXJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3Rlcl9fdGV4dCB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS4xMjVyZW0gKyAwLjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1taWQtZm9vdGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB9XG59XG4ubGVmdC1taWQtZm9vdGVyX19zdHJlZXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAubGVmdC1taWQtZm9vdGVyX19zdHJlZXQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjVyZW0gLCAyLjE3NTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDJyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXJfX3N0cmVldCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41cmVtICwgMi4xNzU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAycmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjVyZW0gLCAyLjE3NTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDJyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXJfX3N0cmVldCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDJyZW0gKyAtMC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXJfX3N0cmVldCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuLmxlZnQtbWlkLWZvb3Rlcl9fcGhvbmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAubGVmdC1taWQtZm9vdGVyX19waG9uZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNXJlbSAsIDEuMTc1ODI0MTc1OHJlbSAgKyAgLTAuODc5MTIwODc5MXZ3ICwgMXJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3Rlcl9fcGhvbmUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNXJlbSAsIDEuMTc1ODI0MTc1OHJlbSAgKyAgLTAuODc5MTIwODc5MXZ3ICwgMXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC41cmVtICwgMS4xNzU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAxcmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyX19waG9uZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDFyZW0gKyAtMC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXJfX3Bob25lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG59XG4ubGVmdC1taWQtZm9vdGVyX19lbWFpbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXJfX2VtYWlsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41cmVtICwgMi4xNzU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAycmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyX19lbWFpbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41cmVtICwgMi4xNzU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAycmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjVyZW0gLCAyLjE3NTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDJyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXJfX2VtYWlsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMnJlbSArIC0wLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3Rlcl9fZW1haWwge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn1cbi5sZWZ0LW1pZC1mb290ZXJfX2J0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAubGVmdC1taWQtZm9vdGVyX19idG5zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjM3NXJlbSAsIDEuODQ3NTI3NDcyNXJlbSAgKyAgMi42MzczNjI2Mzc0dncgLCAzLjg3NXJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3Rlcl9fYnRucyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMi4zNzVyZW0gLCAxLjg0NzUyNzQ3MjVyZW0gICsgIDIuNjM3MzYyNjM3NHZ3ICwgMy44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuMzc1cmVtICwgMS44NDc1Mjc0NzI1cmVtICArICAyLjYzNzM2MjYzNzR2dyAsIDMuODc1cmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyX19idG5zIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMi4zNzVyZW0gKyAxLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3Rlcl9fYnRucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi4zNzVyZW07XG4gIH1cbn1cbi5zb2NpYWxzLWxlZnQtbWlkLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuLnNvY2lhbHMtbGVmdC1taWQtZm9vdGVyX19pdGVtIHtcbiAgbWluLXdpZHRoOiA0NHB4O1xuICBtaW4taGVpZ2h0OiA0NHB4O1xuICBtYXgtd2lkdGg6IDQ0cHg7XG4gIG1heC1oZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLW9yLWRldmlkZXItbGlnaHQtYmcsICNlOWU5ZTkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zb2NpYWxzLWxlZnQtbWlkLWZvb3Rlcl9fZGVzYyB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWxpZ2h0LWJnLCAjNzU3NTc1KTtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5cbi5yaWdodC1taWQtYm90dG9tLWZvb3RlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgY29sdW1uLWdhcDogMTZweDtcbiAgcm93LWdhcDogNDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NGVtKSB7XG4gIC5yaWdodC1taWQtYm90dG9tLWZvb3RlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbi5pdGVtLXJpZ2h0LWZvb3RlciB7XG4gIGZsZXg6IDAgMSAyODhweDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2ssICMxNjE2MTYpO1xufVxuLml0ZW0tcmlnaHQtZm9vdGVyX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLml0ZW0tcmlnaHQtZm9vdGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuOTEyMDg3OTEyMXJlbSAgKyAgMC40Mzk1NjA0Mzk2dncgLCAxLjI1cmVtICkpIHtcbiAgICAuaXRlbS1yaWdodC1mb290ZXJfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjkxMjA4NzkxMjFyZW0gICsgIDAuNDM5NTYwNDM5NnZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC45MTIwODc5MTIxcmVtICArICAwLjQzOTU2MDQzOTZ2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAwLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41cmVtICwgMS4zMjQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDJyZW0gKSkge1xuICAgIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNXJlbSAsIDEuMzI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAycmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjVyZW0gLCAxLjMyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMnJlbSApKSB7XG4gICAgLml0ZW0tcmlnaHQtZm9vdGVyX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuNXJlbSArIDAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaXRlbS1yaWdodC1mb290ZXJfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIH1cbn1cbi5pdGVtLXJpZ2h0LWZvb3Rlcl9fbGlzdCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fbGlzdCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC44NzVyZW0gLCAwLjgzMTA0Mzk1NnJlbSAgKyAgMC4yMTk3ODAyMTk4dncgLCAxcmVtICkpIHtcbiAgICAuaXRlbS1yaWdodC1mb290ZXJfX2xpc3Qge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC44NzVyZW0gLCAwLjgzMTA0Mzk1NnJlbSAgKyAgMC4yMTk3ODAyMTk4dncgLCAxcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODc1cmVtICwgMC44MzEwNDM5NTZyZW0gICsgIDAuMjE5NzgwMjE5OHZ3ICwgMXJlbSApKSB7XG4gICAgLml0ZW0tcmlnaHQtZm9vdGVyX19saXN0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjg3NXJlbSArIDAuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fbGlzdCB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxpc3QtaXRlbS1yaWdodC1mb290ZXJfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjc1cmVtICwgMS40MjU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAxLjI1cmVtICkpIHtcbiAgICAubGlzdC1pdGVtLXJpZ2h0LWZvb3Rlcl9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjc1cmVtICwgMS40MjU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjc1cmVtICwgMS40MjU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAxLjI1cmVtICkpIHtcbiAgICAubGlzdC1pdGVtLXJpZ2h0LWZvb3Rlcl9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS4yNXJlbSArIC0wLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxpc3QtaXRlbS1yaWdodC1mb290ZXJfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxufVxuLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICByb3ctZ2FwOiA4cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWdyYXktbGlnaHQtYmcsICM3NTc1NzUpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuYm90dG9tLWJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICkpIHtcbiAgICAuYm90dG9tLWJvdHRvbS1mb290ZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAxcmVtICwgMC44MjQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICkpIHtcbiAgICAuYm90dG9tLWJvdHRvbS1mb290ZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMXJlbSArIDAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYm90dG9tLWJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAyLjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi10b3A6IGNsYW1wKCAyLjYyNXJlbSAsIDMuNDY5NzgwMjE5OHJlbSAgKyAgLTEuMDk4OTAxMDk4OXZ3ICwgMy4yNXJlbSApKSB7XG4gICAgLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IGNsYW1wKCAyLjYyNXJlbSAsIDMuNDY5NzgwMjE5OHJlbSAgKyAgLTEuMDk4OTAxMDk4OXZ3ICwgMy4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tdG9wOiBjbGFtcCggMi42MjVyZW0gLCAzLjQ2OTc4MDIxOThyZW0gICsgIC0xLjA5ODkwMTA5ODl2dyAsIDMuMjVyZW0gKSkge1xuICAgIC5ib3R0b20tYm90dG9tLWZvb3RlciB7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKDMuMjVyZW0gKyAtMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAzLjI1cmVtO1xuICB9XG59XG4uYWR2YW50YWdlc19fY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMCAtMC41cmVtO1xufVxuXG4uY2FyZC1hZHZhbnRhZ2VzIHtcbiAgZmxleDogMCAxIDMzLjMzMyU7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuLmNhcmQtYWR2YW50YWdlc19fYm9keSB7XG4gIG1pbi13aWR0aDogNjBweDtcbiAgbWluLWhlaWdodDogNjBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2ZvbnRzL2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2ZvbnRzL2ljb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbnVsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL2Zvcm1zL2J1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL2Zvcm1zL2lucHV0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9hZHZhbnRhZ2VzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJGQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRElEO0FFVEE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUZXRjs7QUVSRTtFQUVFLGNBQUE7QUZVSjs7QUVOQTtFQUNFLGdCQUFBO0FGU0Y7O0FFUEE7RUFDRSxnQkFBQTtBRlVGOztBRVJBO0VBQ0UsZ0JBQUE7QUZXRjs7QUVUQTtFQUNFLGdCQUFBO0FGWUY7O0FFVkE7RUFDRSxnQkFBQTtBRmFGOztBRVhBO0VBQ0UsZ0JBQUE7QUZjRjs7QUVaQTtFQUNFLGdCQUFBO0FGZUY7O0FFYkE7RUFDRSxnQkFBQTtBRmdCRjs7QUVkQTtFQUNFLGdCQUFBO0FGaUJGOztBRWZBO0VBQ0UsZ0JBQUE7QUZrQkY7O0FFaEJBO0VBQ0UsZ0JBQUE7QUZtQkY7O0FFakJBO0VBQ0UsZ0JBQUE7QUZvQkY7O0FFbEJBO0VB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O0VPMVJJO0lBQ0UsUUFBQTtFUDRSTjtFT3ZSSTtJQUNFLDJCQUFBO0lBQ0EsNkNBQUE7RVB5Uk47RU92Ukk7SUFDRSw4QkFBQTtJQUNBLDRDQUFBO0VQeVJOO0FBQ0Y7O0FReGxCRTtFQ2xFRjtJRG1FRyxtQkFBQTtFUjRsQkQ7QUFDRjtBUXpsQkM7RUFFQztJQ3pFRjtNRDBFRywyRUFoQmM7SVIybUJiO0VBQ0Y7RVF6bEJBO0lDN0VGO01EOEVHLDREQUFBO0lSNGxCQztFQUNGO0FBQ0Y7QVExbEJFO0VDbEZGO0lEbUZHLG9CQUFBO0VSNmxCRDtBQUNGO0FRL21CRTtFQ2xFRjtJRG1FRyxzQkFBQTtFUmtuQkQ7QUFDRjtBUS9tQkM7RUFFQztJQ3pFRjtNRDBFRyw4RUFoQmM7SVJpb0JiO0VBQ0Y7RVEvbUJBO0lDN0VGO01EOEVHLCtEQUFBO0lSa25CQztFQUNGO0FBQ0Y7QVFobkJFO0VDbEZGO0lEbUZHLHVCQUFBO0VSbW5CRDtBQUNGO0FTN3JCRTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7RUFLQSxhQUFBO0VBQ0EsOEJBQUE7QVQyckJKO0FRM29CRTtFQ3hEQTtJRHlEQyxvQkFBQTtFUjhvQkQ7QUFDRjtBUTNvQkM7RUFFQztJQy9EQTtNRGdFQyw2RUFoQmM7SVI2cEJiO0VBQ0Y7RVEzb0JBO0lDbkVBO01Eb0VDLHFEQUFBO0lSOG9CQztFQUNGO0FBQ0Y7QVE1b0JFO0VDeEVBO0lEeUVDLG9CQUFBO0VSK29CRDtBQUNGO0FRanFCRTtFQ3hEQTtJRHlEQyx1QkFBQTtFUm9xQkQ7QUFDRjtBUWpxQkM7RUFFQztJQy9EQTtNRGdFQyxnRkFoQmM7SVJtckJiO0VBQ0Y7RVFqcUJBO0lDbkVBO01Eb0VDLHdEQUFBO0lSb3FCQztFQUNGO0FBQ0Y7QVFscUJFO0VDeEVBO0lEeUVDLHVCQUFBO0VScXFCRDtBQUNGO0FRdnJCRTtFQ3hEQTtJRHlEQyxvQkFBQTtFUjByQkQ7QUFDRjtBUXZyQkM7RUFFQztJQy9EQTtNRGdFQyw2RUFoQmM7SVJ5c0JiO0VBQ0Y7RVF2ckJBO0lDbkVBO01Eb0VDLHlEQUFBO0lSMHJCQztFQUNGO0FBQ0Y7QVF4ckJFO0VDeEVBO0lEeUVDLHFCQUFBO0VSMnJCRDtBQUNGO0FRN3NCRTtFQ3hEQTtJRHlEQyxxQkFBQTtFUmd0QkQ7QUFDRjtBUTdzQkM7RUFFQztJQy9EQTtNRGdFQyw4RUFoQmM7SVIrdEJiO0VBQ0Y7RVE3c0JBO0lDbkVBO01Eb0VDLDBEQUFBO0lSZ3RCQztFQUNGO0FBQ0Y7QVE5c0JFO0VDeEVBO0lEeUVDLHNCQUFBO0VSaXRCRDtBQUNGO0FRbnVCRTtFQ3hEQTtJRHlEQyxZQUFBO0VSc3VCRDtBQUNGO0FRbnVCQztFQUVDO0lDL0RBO01EZ0VDLGtFQWhCYztJUnF2QmI7RUFDRjtFUW51QkE7SUNuRUE7TURvRUMsaURBQUE7SVJzdUJDO0VBQ0Y7QUFDRjtBUXB1QkU7RUN4RUE7SUR5RUMsU0FBQTtFUnV1QkQ7QUFDRjtBU3Z5Qkk7RUFWRjtJQVdJLHNCQUFBO0VUMHlCSjtBQUNGO0FTN3hCQTtFQUNFLGVBQUE7QVQreEJGO0FTOXhCRTtFQUZGO0lBR0ksY0FBQTtFVGl5QkY7QUFDRjtBUzl4QkU7RUFDRSw4QkFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7QVQreEJKO0FRM3dCRTtFQ3hCQTtJRHlCQyxpQkFBQTtFUjh3QkQ7QUFDRjtBUTN3QkM7RUFFQztJQy9CQTtNRGdDQyx3RUFoQmM7SVI2eEJiO0VBQ0Y7RVEzd0JBO0lDbkNBO01Eb0NDLHNEQUFBO0lSOHdCQztFQUNGO0FBQ0Y7QVE1d0JFO0VDeENBO0lEeUNDLGlCQUFBO0VSK3dCRDtBQUNGO0FRanlCRTtFQ3hCQTtJRHlCQyxzQkFBQTtFUm95QkQ7QUFDRjtBUWp5QkM7RUFFQztJQy9CQTtNRGdDQyw4RUFoQmM7SVJtekJiO0VBQ0Y7RVFqeUJBO0lDbkNBO01Eb0NDLDZEQUFBO0lSb3lCQztFQUNGO0FBQ0Y7QVFseUJFO0VDeENBO0lEeUNDLHNCQUFBO0VScXlCRDtBQUNGO0FTcjBCRTtFQUNFLHdDQUFBO0VBRUEsZ0JBQUE7RUFDQSxpQkFBQTtBVHMwQko7QVE1ekJFO0VDZEE7SURlQyxlQUFBO0VSK3pCRDtBQUNGO0FRNXpCQztFQUVDO0lDckJBO01Ec0JDLHVFQWhCYztJUjgwQmI7RUFDRjtFUTV6QkE7SUN6QkE7TUQwQkMsNERBQUE7SVIrekJDO0VBQ0Y7QUFDRjtBUTd6QkU7RUM5QkE7SUQrQkMsbUJBQUE7RVJnMEJEO0FBQ0Y7O0FTeDFCQTtFQUNFLGVBQUE7QVQyMUJGO0FTMTFCRTtFQUZGO0lBR0ksY0FBQTtFVDYxQkY7QUFDRjtBUTMxQkU7RUNPRTtJRE5ELHNCQUFBO0VSODFCRDtBQUNGO0FRMzFCQztFQUVDO0lDQUU7TURDRCw2RUFoQmM7SVI2MkJiO0VBQ0Y7RVEzMUJBO0lDSkU7TURLRCw2REFBQTtJUjgxQkM7RUFDRjtBQUNGO0FRNTFCRTtFQ1RFO0lEVUQscUJBQUE7RVIrMUJEO0FBQ0Y7QVFqM0JFO0VDWUE7SURYQyxtQkFBQTtFUm8zQkQ7QUFDRjtBUWozQkM7RUFFQztJQ0tBO01ESkMsd0VBaEJjO0lSbTRCYjtFQUNGO0VRajNCQTtJQ0NBO01EQUMsd0RBQUE7SVJvM0JDO0VBQ0Y7QUFDRjtBUWwzQkU7RUNKQTtJREtDLGdCQUFBO0VScTNCRDtBQUNGOztBU3QzQkE7RUFDRSwyQ0FBQTtBVHkzQkY7QVEzNEJFO0VDaUJGO0lEaEJHLG1CQUFBO0VSODRCRDtBQUNGO0FRMzRCQztFQUVDO0lDVUY7TURURyx3RUFoQmM7SVI2NUJiO0VBQ0Y7RVEzNEJBO0lDTUY7TURMRyx3REFBQTtJUjg0QkM7RUFDRjtBQUNGO0FRNTRCRTtFQ0NGO0lEQUcsaUJBQUE7RVIrNEJEO0FBQ0Y7QVFqNkJFO0VDaUJGO0lEaEJHLHNCQUFBO0VSbzZCRDtBQUNGO0FRajZCQztFQUVDO0lDVUY7TURURywyRUFoQmM7SVJtN0JiO0VBQ0Y7RVFqNkJBO0lDTUY7TURMRywyREFBQTtJUm82QkM7RUFDRjtBQUNGO0FRbDZCRTtFQ0NGO0lEQUcsb0JBQUE7RVJxNkJEO0FBQ0Y7QVNwNEJBO0VBRUUsZ0NBQUE7QVRxNEJGO0FRMTdCRTtFQ21ERjtJRGxERyx1QkFBQTtFUjY3QkQ7QUFDRjtBUTE3QkM7RUFFQztJQzRDRjtNRDNDRywrRUFoQmM7SVI0OEJiO0VBQ0Y7RVExN0JBO0lDd0NGO01EdkNHLDhEQUFBO0lSNjdCQztFQUNGO0FBQ0Y7QVEzN0JFO0VDbUNGO0lEbENHLHVCQUFBO0VSODdCRDtBQUNGO0FRaDlCRTtFQ21ERjtJRGxERyxxQkFBQTtFUm05QkQ7QUFDRjtBUWg5QkM7RUFFQztJQzRDRjtNRDNDRyw4RUFiZTtJUis5QmQ7RUFDRjtFUWg5QkE7SUN3Q0Y7TUR2Q0csK0RBQUE7SVJtOUJDO0VBQ0Y7QUFDRjtBUWo5QkU7RUNtQ0Y7SURsQ0csc0JBQUE7RVJvOUJEO0FBQ0Y7QVMxNkJBO0VBQ0UsYUFBQTtBVDQ2QkY7QVF6K0JFO0VDNERGO0lEM0RHLGVBQUE7RVI0K0JEO0FBQ0Y7QVF6K0JDO0VBRUM7SUNxREY7TURwREcsaUVBaEJjO0lSMi9CYjtFQUNGO0VReitCQTtJQ2lERjtNRGhERyxnREFBQTtJUjQrQkM7RUFDRjtBQUNGO0FRMStCRTtFQzRDRjtJRDNDRyxTQUFBO0VSNitCRDtBQUNGO0FTaDhCRTtFQUhGO0lBSUksc0JBQUE7RVRtOEJGO0FBQ0Y7QVNqNkJBO0VBQ0UsZUFBQTtBVG02QkY7QVNqNkJFO0VBSEY7SUFJSSxjQUFBO0VUbzZCRjtBQUNGO0FRNWdDRTtFQ21HRjtJRGxHRyx1QkFBQTtFUitnQ0Q7QUFDRjtBUTVnQ0M7RUFFQztJQzRGRjtNRDNGRyxnRkFoQmM7SVI4aENiO0VBQ0Y7RVE1Z0NBO0lDd0ZGO01EdkZHLCtEQUFBO0lSK2dDQztFQUNGO0FBQ0Y7QVE3Z0NFO0VDbUZGO0lEbEZHLHVCQUFBO0VSZ2hDRDtBQUNGO0FTdDdCRTtFQUNFLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUVBLHlCQUFBO0VBQ0Esc0JBQUE7QVR1N0JKO0FRemlDRTtFQzRHQTtJRDNHQyxpQkFBQTtFUjRpQ0Q7QUFDRjtBUXppQ0M7RUFFQztJQ3FHQTtNRHBHQywwRUFoQmM7SVIyakNiO0VBQ0Y7RVF6aUNBO0lDaUdBO01EaEdDLDREQUFBO0lSNGlDQztFQUNGO0FBQ0Y7QVExaUNFO0VDNEZBO0lEM0ZDLG1CQUFBO0VSNmlDRDtBQUNGO0FTeDhCRTtFQUNFLGNBQUE7QVQwOEJKO0FRbGtDRTtFQ3VIQTtJRHRIQyxxQkFBQTtFUnFrQ0Q7QUFDRjtBUWxrQ0M7RUFFQztJQ2dIQTtNRC9HQywyRUFiZTtJUmlsQ2Q7RUFDRjtFUWxrQ0E7SUM0R0E7TUQzR0MsMkRBQUE7SVJxa0NDO0VBQ0Y7QUFDRjtBUW5rQ0U7RUN1R0E7SUR0R0MsbUJBQUE7RVJza0NEO0FBQ0Y7QVMxOUJFO0VBQ0UsY0FBQTtBVDQ5Qko7QVEzbENFO0VDOEhBO0lEN0hDLHFCQUFBO0VSOGxDRDtBQUNGO0FRM2xDQztFQUVDO0lDdUhBO01EdEhDLDJFQWJlO0lSMG1DZDtFQUNGO0VRM2xDQTtJQ21IQTtNRGxIQywyREFBQTtJUjhsQ0M7RUFDRjtBQUNGO0FRNWxDRTtFQzhHQTtJRDdHQyxtQkFBQTtFUitsQ0Q7QUFDRjtBUzUrQkU7RUFDRSxjQUFBO0FUOCtCSjtBUXBuQ0U7RUNxSUE7SURwSUMscUJBQUE7RVJ1bkNEO0FBQ0Y7QVFwbkNDO0VBRUM7SUM4SEE7TUQ3SEMsMkVBYmU7SVJtb0NkO0VBQ0Y7RVFwbkNBO0lDMEhBO01EekhDLDJEQUFBO0lSdW5DQztFQUNGO0FBQ0Y7QVFybkNFO0VDcUhBO0lEcEhDLG1CQUFBO0VSd25DRDtBQUNGO0FTOS9CRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FUZ2dDSjtBUTlvQ0U7RUM0SUE7SUQzSUMsdUJBQUE7RVJpcENEO0FBQ0Y7QVE5b0NDO0VBRUM7SUNxSUE7TURwSUMsZ0ZBaEJjO0lSZ3FDYjtFQUNGO0VROW9DQTtJQ2lJQTtNRGhJQyw4REFBQTtJUmlwQ0M7RUFDRjtBQUNGO0FRL29DRTtFQzRIQTtJRDNIQyx1QkFBQTtFUmtwQ0Q7QUFDRjtBU3hnQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FUMGdDRjtBU3ZnQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw0REFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FUeWdDSjtBU3BnQ0U7RUFDRSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7QVRzZ0NKOztBU3I3QkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QVR3N0JGO0FTdjdCRTtFQUxGO0lBTUksMEJBQUE7RVQwN0JGO0FBQ0Y7QVNwN0JBO0VBQ0UsZUFBQTtFQUVBLGlDQUFBO0FUcTdCRjtBU3A3QkU7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QVRxN0JKO0FRL3NDRTtFQ3NSQTtJRHJSQyxrQkFBQTtFUmt0Q0Q7QUFDRjtBUS9zQ0M7RUFFQztJQytRQTtNRDlRQyx1RUFoQmM7SVJpdUNiO0VBQ0Y7RVEvc0NBO0lDMlFBO01EMVFDLHVEQUFBO0lSa3RDQztFQUNGO0FBQ0Y7QVFodENFO0VDc1FBO0lEclFDLGVBQUE7RVJtdENEO0FBQ0Y7QVFydUNFO0VDc1JBO0lEclJDLG1CQUFBO0VSd3VDRDtBQUNGO0FRcnVDQztFQUVDO0lDK1FBO01EOVFDLDBFQWhCYztJUnV2Q2I7RUFDRjtFUXJ1Q0E7SUMyUUE7TUQxUUMsNERBQUE7SVJ3dUNDO0VBQ0Y7QUFDRjtBUXR1Q0U7RUNzUUE7SURyUUMscUJBQUE7RVJ5dUNEO0FBQ0Y7QVMzOUJFO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtBVDQ5Qko7QVEvdkNFO0VDZ1NBO0lEL1JDLGVBQUE7RVJrd0NEO0FBQ0Y7QVEvdkNDO0VBRUM7SUN5UkE7TUR4UkMsdUVBaEJjO0lSaXhDYjtFQUNGO0VRL3ZDQTtJQ3FSQTtNRHBSQyw0REFBQTtJUmt3Q0M7RUFDRjtBQUNGO0FRaHdDRTtFQ2dSQTtJRC9RQyxtQkFBQTtFUm13Q0Q7QUFDRjs7QVFyeENFO0VDMFNFO0lEelNELHNCQUFBO0VSeXhDRDtBQUNGO0FRdHhDQztFQUVDO0lDbVNFO01EbFNELCtFQWJlO0lScXlDZDtFQUNGO0VRdHhDQTtJQytSRTtNRDlSRCw4REFBQTtJUnl4Q0M7RUFDRjtBQUNGO0FRdnhDRTtFQzBSRTtJRHpSRCxzQkFBQTtFUjB4Q0Q7QUFDRjtBU3YvQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUVBLDZCQUFBO0VBSUEseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FUcS9CRjtBUXR6Q0U7RUNxVEY7SURwVEcsbUJBQUE7RVJ5ekNEO0FBQ0Y7QVF0ekNDO0VBRUM7SUM4U0Y7TUQ3U0csd0VBaEJjO0lSdzBDYjtFQUNGO0VRdHpDQTtJQzBTRjtNRHpTRyx3REFBQTtJUnl6Q0M7RUFDRjtBQUNGO0FRdnpDRTtFQ3FTRjtJRHBTRyxpQkFBQTtFUjB6Q0Q7QUFDRjtBUTUwQ0U7RUNxVEY7SURwVEcsb0JBQUE7RVIrMENEO0FBQ0Y7QVE1MENDO0VBRUM7SUM4U0Y7TUQ3U0csNkVBYmU7SVIyMUNkO0VBQ0Y7RVE1MENBO0lDMFNGO01EelNHLDZEQUFBO0lSKzBDQztFQUNGO0FBQ0Y7QVE3MENFO0VDcVNGO0lEcFNHLG1CQUFBO0VSZzFDRDtBQUNGO0FVbjZDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QVZxNkNKOztBVWw2Q0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FWcTZDRjtBVWw2Q0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QVZvNkNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInNhc3M6bWF0aFxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQvNGW0LrRgdC40L3RltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGI0YDQuNGE0YLRltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vJmRpc3BsYXk9c3dhcCAtINC00L7QtNCw0YLQuCDQv9GA0Lgg0L/RltC00LrQu9GO0YfQtdC90L3RliDRh9C10YDQtdC3INC/0LvQsNCz0ZbQvVxcclxcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NzAwJmRpc3BsYXk9c3dhcCk7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R29sb3MrVGV4dDp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuLy8g0J/RltC00LrQu9GO0YfQuNGC0LgsINGP0LrRidC+INGUINC70L7QutCw0LvRjNC90ZYg0YTQsNC50LvQuCDRiNGA0LjRhNGC0ZbQslxcclxcbkBpbXBvcnQgXFxcImZvbnRzL2ZvbnRzXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGW0LrQvtC90LrQvtCy0LjRhSDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0YTQsNC50Lsg0ZbQutC+0L3QutC+0LLQvtCz0L4g0YjRgNC40YTRgtGDXFxyXFxuQGltcG9ydCBcXFwiZm9udHMvaWNvbnNcXFwiO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINGI0LDQsdC70L7QvdGDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8INGI0YDQuNGE0YIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuJGZvbnRGYW1pbHk6IFxcXCJHb2xvcyBUZXh0XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4kZm9udFNpemU6IHJlbSgxNik7IC8vINC00LUgMTQocHgpIC0g0YDQvtC30LzRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8INC3INC80LDQutC10YLRg1xcclxcblxcclxcbi8vINCe0YHQvdC+0LLQvdGWINC60L7Qu9GM0L7RgNC4XFxyXFxuLy90ZXh0XFxyXFxuJG1haW5Db2xvcjogIzE2MTYxNjsgLy8g0JrQvtC70ZbRgCDRiNGA0LjRhNGC0YMg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxcclxcbiRkYXJrR3JheTogIzc1NzU3NTtcXHJcXG4kbGlnaHRHcmF5OiAjOWY5ZjlmO1xcclxcblxcclxcbi8vYmdcXHJcXG4kbGlnaHRCbGFjazogIzIwMjIyNjtcXHJcXG4kZGFya1doaXRlOiAjZjRmNWY4O1xcclxcblxcclxcbi8vdGFnc1xcclxcbiRyZWQ6ICNkMjE5MjQ7XFxyXFxuJGJsdWU6ICMyOTQ5YjU7XFxyXFxuJGdyZWVuOiAjMzA4ZDc3O1xcclxcblxcclxcbi8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDQsNC00LDQv9GC0LjQstC90L7RlyDRgdGW0YLQutC4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0JzRltC90ZbQvNCw0LvRjNC90LAg0YjQuNGA0LjQvdCwINGB0YLQvtGA0ZbQvdC60LhcXHJcXG4kbWluV2lkdGg6IDMyMDtcXHJcXG4vLyDQqNC40YDQuNC90LAg0L/QvtC70L7RgtC90LAgKNC80LDQutC10YLRgylcXHJcXG4kbWF4V2lkdGg6IDEyODA7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC+0LHQvNC10LbRg9GO0YfQvtCz0L4g0LrQvtC90YLQtdC50L3QtdGA0LAgKDAgPSDQvdC10LzQsNGUINC+0LHQvNC10LbQtdC90L3RjylcXHJcXG4kbWF4V2lkdGhDb250YWluZXI6IDEyMDA7XFxyXFxuLy8g0JfQsNCz0LDQu9GM0L3QuNC5INCy0ZbQtNGB0YLRg9C/INGDINC60L7QvdGC0LXQudC90LXRgNCwXFxyXFxuLy8gKDMwID0g0L/QviAxNXB4INC70ZbQstC+0YDRg9GHINGWINC/0YDQsNCy0L7RgNGD0YcsIDAgPSDQvdC10LzQsNGUINCy0ZbQtNGB0YLRg9C/0YMpXFxyXFxuJGNvbnRhaW5lclBhZGRpbmc6IDMwO1xcclxcblxcclxcbi8vINCo0LjRgNC40L3QsCDRgdC/0YDQsNGG0YzQvtCy0YPQstCw0L3QvdGPINC/0LXRgNGI0L7Qs9C+INCx0YDQtdC50LrQv9C+0ZbQvdGC0YNcXHJcXG4kY29udGFpbmVyV2lkdGg6ICRtYXhXaWR0aENvbnRhaW5lciArICRjb250YWluZXJQYWRkaW5nO1xcclxcblxcclxcbi8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4XFxyXFxuJHBjOiBlbShcXHJcXG4gICRjb250YWluZXJXaWR0aFxcclxcbik7IC8vINCf0JosINC90L7Rg9GC0LHRg9C60LgsINC00LXRj9C60ZYg0L/Qu9Cw0L3RiNC10YLQuCDRgyDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC80YMg0L/QvtC70L7QttC10L3QvdGWXFxyXFxuJHRhYmxldDogZW0oOTkxLjk4KTsgLy8g0J/Qu9Cw0L3RiNC10YLQuCwg0LTQtdGP0LrRliDRgtC10LvQtdGE0L7QvdC4INCyINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LzRgyDQv9C+0LvQvtC20LXQvdC90ZZcXHJcXG4kbW9iaWxlOiBlbSg3NjcuOTgpOyAvLyDQotC10LvQtdGE0L7QvdC4IExcXHJcXG4kbW9iaWxlU21hbGw6IGVtKDQ3OS45OCk7IC8vINCi0LXQu9C10YTQvtC90LggU1xcclxcblxcclxcbi8vINCi0LjQvyDQsNC00LDQv9GC0LjQstCwOlxcclxcbi8vIDEgPSDRh9GD0LnQvdGW0YHRgtGMICjRgyDQutC+0L3RgtC10LnQvdC10YDQsCDQvdC10LzQsNGUINCx0YDQtdC50LrQv9C+0ZbQvdGC0ZbQsiksXFxyXFxuLy8gMiA9INC/0L4g0LHRgNC10LnQui3Qv9C+0ZfQvdGCICjQutC+0L3RgtC10LnQvdC10YAg0LfQvNGW0L3RjtGUINGB0LLQvtGOINGI0LjRgNC40L3RgyDQv9C+INCx0YDQtdC50Lot0L/QvtGX0L3RgilcXHJcXG4kcmVzcG9uc2l2ZVR5cGU6IDE7XFxyXFxuXFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vINCe0LHQvdGD0LvQtdC90L3RjyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuQGltcG9ydCBcXFwiYmFzZS9udWxsXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGC0LXQs9CwIEJPRFkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIC8vINCh0LrRgNC+0LvQuyDQt9Cw0LHQu9C+0LrQvtCy0LDQvdC+XFxyXFxuICAubG9jayAmIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xcclxcbiAgICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8g0KHQsNC50YIg0LfQsNCy0LDQvdGC0LDQttC10L3QuNC5XFxyXFxuICAubG9hZGVkICYge1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQntCx0L7Qu9C+0L3QutCwIHdyYXBwZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgQHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xcclxcbiAgICBvdmVyZmxvdzogY2xpcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vINCf0YDQuNGC0LjRgdC60LDRlNC80L4gZm9vdGVyXFxyXFxuICA+IG1haW4ge1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vINCk0ZbQutGBINC00LvRjyDRgdC70LDQudC00LXRgNGW0LJcXHJcXG4gID4gKiB7XFxyXFxuICAgIG1pbi13aWR0aDogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy/QlNC70Y8g0YLQvtCz0L4g0YfRgtC+0LHRiyDQvdC1INC70L7QvNCw0LvRgdGPINGB0LvQsNC50LTQtdGAINC/0YDQuCDRgNC10YHQsNC50LfQtVxcclxcbmlmcmFtZSN3ZWJwYWNrLWRldi1zZXJ2ZXItY2xpZW50LW92ZXJsYXkge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vLyDQntCx0LzQtdC20YPRjtGH0LjQuSDQutC+0L3RgtC10LnQvdC10YAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8qXFxyXFxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XFxyXFxu0LLRgdGW0YUg0LrQu9Cw0YHRltCyLCDRidC+INC80ZbRgdGC0Y/RgtGMICpfX2NvbnRhaW5lclxcclxcbtCd0LDQv9GA0LjQutC70LDQtCBoZWFkZXJfX2NvbnRhaW5lciwgbWFpbl9fY29udGFpbmVyINGWINGCLtC/LlxcclxcbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XFxyXFxuKi9cXHJcXG5AaWYgKCRyZXNwb25zaXZlVHlwZT09MSkge1xcclxcbiAgLy8g0KfRg9C50L3QsFxcclxcbiAgW2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuICAgIEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IHJlbSgkY29udGFpbmVyV2lkdGgpO1xcclxcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcbiAgICAgIEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuICAgICAgfSBAZWxzZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcclxcbiAgICAgICAgICBcXFwicGFkZGluZy1sZWZ0XFxcIixcXHJcXG4gICAgICAgICAgbWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpLFxcclxcbiAgICAgICAgICAxNVxcclxcbiAgICAgICAgKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxyXFxuICAgICAgICAgIFxcXCJwYWRkaW5nLXJpZ2h0XFxcIixcXHJcXG4gICAgICAgICAgbWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpLFxcclxcbiAgICAgICAgICAxNVxcclxcbiAgICAgICAgKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59IEBlbHNlIHtcXHJcXG4gIC8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtCw0LzQuFxcclxcbiAgW2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcblxcclxcbiAgICBAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiByZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG4gICAgfSBAZWxzZSB7XFxyXFxuICAgICAgQGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHBjKSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiByZW0oOTcwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xcclxcbiAgICAgIG1heC13aWR0aDogcmVtKDc1MCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgQGlmICgkY29udGFpbmVyUGFkZGluZz4wIGFuZCAkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcbiAgICAgICAgcGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQsdCw0LfQvtCy0LjRhSDRgdGC0LjQu9GW0LIsINGI0LDQsdC70L7QvdGW0LIgKNC30LDQs9C+0YLRltCy0LXQu9GMKSDRgtCwINC00L7Qv9C+0LzRltC20L3QuNGFINC60LvQsNGB0ZbQslxcclxcbi8vINCU0LvRjyDQv9GW0LTQutC70Y7Rh9C10L3QvdGPL9Cy0LjQvNC60L3QtdC90L3RjyDQutC+0L3QutGA0LXRgtC90LjRhSDRgdGC0LjQu9GW0LIg0LTQuNCy0LjRgdGMIGJhc2Uuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2VcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC30LDQs9Cw0LvRjNC90LjRhSDQtdC70LXQvNC10L3RgtGW0LIg0L/RgNC+0LXQutGC0YNcXHJcXG5AaW1wb3J0IFxcXCJjb21tb25cXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC+0LrRgNC10LzQuNGFINCx0LvQvtC60ZbQslxcclxcbkBpbXBvcnQgXFxcImhlYWRlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwiZm9vdGVyXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJhZHZhbnRhZ2VzXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDRgdGC0L7RgNGW0L3QvtC6XFxyXFxuQGltcG9ydCBcXFwiaG9tZVxcXCI7XFxyXFxuXCIsXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogaWNvbnM7XFxuXFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcblxcdHNyYzogdXJsKFxcXCIuLi9mb250cy9pY29ucy53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9mb250cy9pY29ucy53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcclxcblwiLFwiJWljIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiaWNvbnNcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuW2NsYXNzKj1cXFwiX2ljb24tXFxcIl0ge1xcclxcbiAgJjpiZWZvcmUge1xcclxcbiAgICBAZXh0ZW5kICVpYztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5faWNvbi1zZXR0aW5nczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTAwXFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLWNhc2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwMVxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1kZWxpdmVyeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTAyXFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLXJlbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwM1xcXCI7XFxyXFxufVxcclxcbi5faWNvbi15b3V0dWJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDRcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24taW5zdGFncmFtOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDVcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tZ3VhcmFudGVlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDZcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tc2FsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTA3XFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLWFycm93LWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwOFxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1idXJnZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwOVxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1maWx0ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwYVxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1jbG9zZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTBiXFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLWFsbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTBkXFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLXNlYXJjaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTBlXFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLWNhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwZlxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1zZXJ2aWNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MTJcXFwiO1xcclxcbn1cXHJcXG5cIixcIioge1xcclxcblxcdHBhZGRpbmc6IDBweDtcXHJcXG5cXHRtYXJnaW46IDBweDtcXHJcXG5cXHRib3JkZXI6IDBweDtcXHJcXG59XFxyXFxuKixcXHJcXG4qOmJlZm9yZSxcXHJcXG4qOmFmdGVyIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46Zm9jdXMsXFxyXFxuOmFjdGl2ZSB7XFxyXFxuXFx0Ly8gb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuYTpmb2N1cyxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuXFx0Ly8gb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0bWluLXdpZHRoOiAkbWluV2lkdGggKyBweDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0Y29sb3I6ICRtYWluQ29sb3I7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcblxcdGZvbnQtc2l6ZTogJGZvbnRTaXplO1xcclxcblxcdC8vdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG5cXHQtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcblxcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbmEge1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxudWwgbGkge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmltZyB7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXCIsXCIvLzxCVVRUT05TIChhLmJ0bit0YWIpPlxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogYnRuXFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodEJsYWNrO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUsICNmZmYpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyMCwgMTYpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmQzMjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJi5fZncge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gICZfZ3JheSB7XFxyXFxuICAgIGNvbG9yOiAjMTYxNjE2O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya1doaXRlO1xcclxcbiAgICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX3doaXRlIHtcXHJcXG4gICAgY29sb3I6ICMxNjE2MTY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmODtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIvLzxJTlBVVD5cXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGlucFxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMTZweCAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyMCwgMTYpO1xcclxcblxcclxcbiAgJi5fZm9ybS1mb2N1cyB7XFxyXFxuICB9XFxyXFxuICAmLl9mb3JtLWVycm9yIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWdyYXksICNmNGY1ZjgpO1xcclxcbn1cXHJcXG4uaW5wdXRbcGxhY2Vob2xkZXJdOm5vdChbZGF0YS1wbGFjZWhvbGRlci1ub2hpZGVuXSkge1xcclxcbiAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWdyYXktZGFyay1iZywgIzlmOWY5Zik7XFxyXFxuICB9XFxyXFxuICAmOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhLmlucHV0IHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDBweCAwcHg7XFxyXFxufVxcclxcblwiLFwiLy8g0JfQsNCz0LDQu9GM0L3QuNC5INGE0LDQudC7INC10LvQtdC80LXQvdGC0ZbQsiDRhNC+0YDQvFxcclxcbi8vINCU0LvRjyDQv9GW0LTQutC70Y7Rh9C10L3QvdGPL9Cy0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LXQu9C10LzQtdC90YLQsCDRhNC+0YDQvNC4INC00LjQstC40YHRjCBiYXNlL2Zvcm1zL2Zvcm1zLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlL2Zvcm1zL2Zvcm1zXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC/0L7Qv9Cw0L/RltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9wb3B1cFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgdC/0L7QudC70LXRgNGW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nwb2xsZXJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGC0LDQsdGW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3RhYnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LzQsNC/XFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9tYXBzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINCx0LvQvtC60YMgXFxcItC/0L7QutCw0LfQsNGC0Lgg0YnQtVxcXCJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nob3dtb3JlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQu9C40L/QutC+0LPQviDQsdC70L7QutGDXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zdGlja3lcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC/0L7QstC90L7QtdC60YDQsNC90L3QvtCz0L4g0LHQu9C+0LrRg1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvZnVsbHNjcmVlblxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0L/QvtC10LrRgNCw0L3QvtGXINC/0YDQvtC60YDRg9GC0LrQuFxcclxcbi8vIFN0eWxlcyBmb3IgZnVsbHBhZ2Ugc2Nyb2xsXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9mdWxscGFnZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8gcmlwcGxlINC10YTQtdC60YLRg1xcclxcbi8vIFN0eWxlcyBmb3IgcmlwcGxlIGVmZmVjdFxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvcmlwcGxlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQutCw0YHRgtC+0LzQvdC+0LPQviDQutGD0YDRgdC+0YDRg1xcclxcbi8vIFN0eWxlcyBmb3IgY3VzdG9tIGN1cnNvclxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvY3Vyc29yXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDRh9GD0LnQvdC40YUg0LrQsNGA0YLQuNC90L7QuiAoSUJHKVxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaWJnIChkaXYg0Lcg0LrQsNGA0YLQuNC90LrQvtGOINGC0LAg0LrQu9Cw0YHQsNC80LgpXFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpYmdhIChhINC3INC60LDRgNGC0LjQvdC60L7RjiDRgtCwINC60LvQsNGB0LDQvNC4KVxcclxcbltjbGFzcyo9XFxcIi1pYmdcXFwiXSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbltjbGFzcyo9XFxcIi1pYmdfY29udGFpblxcXCJdIHtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQqNCw0LHQu9C+0L3QuCAo0LfQsNCz0L7RgtGW0LLQu9GWKVxcclxcbi8vIEBleHRlbmQgJdGW0Lwn0Y8g0YjQsNCx0LvQvtC90YM7XFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKFNDU1MpOiBleFxcclxcblxcclxcbi8vINCb0ZbRh9C40LvRjNC90LjQuiDQtNC70Y8g0YHQv9C40YHQutGDXFxyXFxuJWxpc3RDb3VudGVyIHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0Y291bnRlci1yZXNldDogaXRlbTtcXHJcXG5cXHRsaSB7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdCY6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRjb3VudGVyLWluY3JlbWVudDogaXRlbTtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBjb3VudGVyKGl0ZW0pO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90LUg0LLRltC00LXQvlxcclxcbiVyZXNwb25zaXZlVmlkZW8ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGhlaWdodDogMDtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQktGW0LTQtdC+INGP0Log0YTQvtC9XFxyXFxuJXZpZGVvQmFja2dyb3VuZCB7XFxyXFxuXFx0dmlkZW8sXFxyXFxuXFx0aWZyYW1lLFxcclxcblxcdG9iamVjdCxcXHJcXG5cXHRlbWJlZCB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdHRvcDogNTAlO1xcclxcblxcdFxcdGxlZnQ6IDUwJTtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR3aWR0aDogYXV0bztcXHJcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0ei1pbmRleDogLTEwMDtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHRltGA0LjQuSDRhNGW0LvRjNGC0YBcXHJcXG4lZ3JheWZpbHRlciB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcXHJcXG5cXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG5cXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQodC60LDRgdGD0LLQsNGC0Lgg0LLQuNC00ZbQu9C10L3QvdGPXFxyXFxuJW5vc2VsZWN0IHtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLy8g0JTQt9C10YDQutCw0LvRjNC90LUg0LLRltC00L7QsdGA0LDQttC10L3QvdGPXFxyXFxuJW1pcnJvciB7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxyXFxufVxcclxcbi8vINCf0LvQsNCy0L3QuNC5INGB0LrRgNC+0LvQu1xcclxcbiVzbW9vdGhzY3JvbGwge1xcclxcblxcdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG59XFxyXFxuLy8g0KHRhdC+0LLQsNGC0Lgg0YHQutGA0L7Qu9C7XFxyXFxuJWhpZGVzY3JvbGwge1xcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICAvLyAuaGVhZGVyX190b3BcXHJcXG5cXHJcXG4gICZfX3RvcCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuaGVhZGVyX19ib2R5XFxyXFxuXFxyXFxuICAmX19ib2R5IHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLnRvcC1oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ncmF5LCAjZjRmNWY4KTtcXHJcXG4gIHBhZGRpbmc6IHJlbSgxOCkgMDtcXHJcXG4gIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAyOCwgNSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDAuMnM7XFxyXFxuICAubWVudS1vcGVuICYge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0xMDAlKTtcXHJcXG4gIH1cXHJcXG4gIC8vIC50b3AtaGVhZGVyX19jb250YWluZXJcXHJcXG5cXHJcXG4gICZfX2NvbnRhaW5lciB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19yaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWdyYXktbGlnaHQtYmcsICM3NTc1NzUpO1xcclxcbiAgICBmb250LXNpemU6IHJlbSgxNCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigxNiwgMTQpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCA4MCwgMzIsIDAsIDEyODAsIDEwMjQpO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1sZWZ0XFxcIiwgOTQsIDI1LCAwLCA3NjgsIDMyMCk7XFxyXFxuICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXJpZ2h0XFxcIiwgNjksIDAsIDAsIDc2OCwgMzIwKTtcXHJcXG4gICAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDYxMCkpIHtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IHJlbSg1KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fbGlua3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGNvbHVtbi1nYXA6IHJlbSgzMik7XFxyXFxuICAgIHJvdy1nYXA6IHJlbSg1KTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBlbSg2MTApKSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLy8gLnRvcC1oZWFkZXJfX2NvbnRlbnRcXHJcXG5cXHJcXG4gICZfX2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAudG9wLWhlYWRlcl9fbG9nb1xcclxcblxcclxcbiAgJl9fbG9nbyB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAudG9wLWhlYWRlcl9fY29udGFjdHNcXHJcXG5cXHJcXG4gICZfX2NvbnRhY3RzIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC50b3AtaGVhZGVyX19yaWdodFxcclxcblxcclxcbiAgJl9fcmlnaHQge1xcclxcbiAgfVxcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIC8vIC5oZWFkZXJfX2JvdHRvbVxcclxcblxcclxcbiAgJl9fYm90dG9tIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmJvdHRvbS1oZWFkZXIge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwLjJzO1xcclxcbiAgLm1lbnUtb3BlbiAmIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMTc1JSk7XFxyXFxuICB9XFxyXFxuICAvLyAuYm90dG9tLWhlYWRlcl9fY29udGFpbmVyXFxyXFxuXFxyXFxuICAmX19jb250YWluZXIge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmJvdHRvbS1oZWFkZXJfX2NvbnRlbnRcXHJcXG5cXHJcXG4gICZfX2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxuICAmX19sZWZ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IHJlbSg4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzLXRvcC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGNvbHVtbi1nYXA6IHJlbSgzMik7XFxyXFxuICByb3ctZ2FwOiByZW0oNSk7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmNvbnRhY3RzLXRvcC1oZWFkZXJfX2xpbmtcXHJcXG5cXHJcXG4gICZfX2xpbmsge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBjb2xvcjogJG1haW5Db2xvcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4ucmlnaHQtdG9wLWhlYWRlciB7XFxyXFxuICAvLyAucmlnaHQtdG9wLWhlYWRlcl9fbGlua1xcclxcblxcclxcbiAgJl9fbGluayB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGNvbG9yOiAkbWFpbkNvbG9yO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAucmlnaHQtdG9wLWhlYWRlcl9fTGlua1xcclxcbn1cXHJcXG4uYm9keS1oZWFkZXIge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDEwMjQpKSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IHJlbSg4KTtcXHJcXG4gIH1cXHJcXG4gIC8vIC5ib2R5LWhlYWRlcl9fY29udGFpbmVyXFxyXFxuXFxyXFxuICAmX19jb250YWluZXIge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmJvZHktaGVhZGVyX19jb250ZW50XFxyXFxuXFxyXFxuICAmX19jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5ib2R5LWhlYWRlcl9fbWVudVxcclxcblxcclxcbiAgJl9fbWVudSB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYm9keS1oZWFkZXJfX3JpZ2h0XFxyXFxuXFxyXFxuICAmX19yaWdodCB7XFxyXFxuICB9XFxyXFxufVxcclxcbi50b3AtbWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICZfX2xvZ28ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogZW0oNjEwKSkge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IHJlbSg0NCk7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLm1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC8vIC5tZW51X19pY29uXFxyXFxuXFxyXFxuICAvLyAubWVudV9fYm9keVxcclxcblxcclxcbiAgJl9fYm9keSB7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBlbSg2MTApKSB7XFxyXFxuICAgICAgcGFkZGluZzogcmVtKDI0KSByZW0oMTYpO1xcclxcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIGxlZnQ6IC0xMDAlO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrV2hpdGU7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG4gICAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICAgIC5tZW51LW9wZW4gJiB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDAuMnM7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLm1lbnVfX2xpc3RcXHJcXG5cXHJcXG4gICZfX2xpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IHJlbSg4KTtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogZW0oNjEwKSkge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgICAgbWF4LWhlaWdodDogNjAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubWVudV9faXRlbVxcclxcblxcclxcbiAgJl9faXRlbSB7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBlbSg2MTApKSB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5tZW51X19saW5rXFxyXFxuXFxyXFxuICAmX19saW5rIHtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDYxMCkpIHtcXHJcXG4gICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1ib2R5LWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IHJlbSg4KTtcXHJcXG4gIC8vIC5yaWdodC1ib2R5LWhlYWRlcl9fbGlua1xcclxcblxcclxcbiAgJl9fbGluayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNDRweDtcXHJcXG4gICAgaGVpZ2h0OiA0NHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZm9ybSB7XFxyXFxuICB9XFxyXFxuICAvLyAucmlnaHQtYm9keS1oZWFkZXJfX2J0blxcclxcblxcclxcbiAgJl9fYnRuIHtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDYxMCkpIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBib3R0b206IDI0cHg7XFxyXFxuICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDBweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX2lucHV0IHtcXHJcXG4gICAgLy8gIHdpZHRoOiA0NHB4O1xcclxcbiAgICAvLyAgaGVpZ2h0OiA0NHB4O1xcclxcbiAgICAvLyAgJjo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgIC8vICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLy8gICAgaGVpZ2h0OiAxZW07XFxyXFxuICAgIC8vICAgIHdpZHRoOiAxZW07XFxyXFxuICAgIC8vICAgIGJvcmRlci1yYWRpdXM6IDUwZW07XFxyXFxuICAgIC8vICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3Byby5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTAuMC9zdmdzL3NvbGlkL3RpbWVzLWNpcmNsZS5zdmcpXFxyXFxuICAgIC8vICAgICAgbm8tcmVwZWF0IDUwJSA1MCU7XFxyXFxuICAgIC8vICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgLy8gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgLy8gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIC8vICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5mb3JtLXJpZ2h0LWJvZHktaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAmX19pbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgJjo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19saW5rIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gIH1cXHJcXG4gICZfX2Nsb3NlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQ0cHg7XFxyXFxuICAgIGhlaWdodDogNDRweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vL0J1cmdlclxcclxcblxcclxcbi5pY29uLW1lbnUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBlbSg2MTApKSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDEzcHggN3B4O1xcclxcbiAgICB3aWR0aDogcmVtKDQ0KTtcXHJcXG4gICAgaGVpZ2h0OiByZW0oNDQpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbiAgICBAbWVkaWEgKGFueS1ob3Zlcjogbm9uZSkge1xcclxcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgfVxcclxcbiAgICBzcGFuLFxcclxcbiAgICAmOjpiZWZvcmUsXFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbiAgICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHdpZHRoOiBwZXJjZW50KDIwLCA0NCk7XFxyXFxuICAgICAgaGVpZ2h0OiByZW0oMyk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICB0b3A6IHBlcmNlbnQoMTIsIDQ0KTtcXHJcXG4gICAgfVxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgYm90dG9tOiBwZXJjZW50KDEyLCA0NCk7XFxyXFxuICAgIH1cXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgdG9wOiBjYWxjKDUwJSAtIHJlbSgxLjUpKTtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudS1vcGVuICYge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICByaWdodDogMTZweDtcXHJcXG4gICAgICB6LWluZGV4OiAzO1xcclxcbiAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgd2lkdGg6IDA7XFxyXFxuICAgICAgfVxcclxcbiAgICAgICY6OmJlZm9yZSxcXHJcXG4gICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgfVxcclxcbiAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gcmVtKDEuNSkpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpIHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICBib3R0b206IGNhbGMoNTAlIC0gcmVtKDEuNSkpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLy/Qn9GW0LTQutC70Y7Rh9C10L3QvdGPINGI0YDQuNGE0YLRg1xcclxcbkBtaXhpbiBmb250KCRmb250X25hbWUsICRmaWxlX25hbWUsICR3ZWlnaHQsICRzdHlsZSkge1xcclxcblxcdEBmb250LWZhY2Uge1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAkZm9udF9uYW1lO1xcclxcblxcdFxcdGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG5cXHRcXHRzcmM6IHVybChcXFwiLi4vZm9udHMvI3skZmlsZV9uYW1lfS53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogI3skd2VpZ2h0fTtcXHJcXG5cXHRcXHRmb250LXN0eWxlOiAjeyRzdHlsZX07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vL1BlcmNlbnRcXHJcXG5AZnVuY3Rpb24gcGVyY2VudCgkcHgsICRmcm9tKSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkZnJvbSkgKiAxMDAlO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuLy9SRU1cXHJcXG5AZnVuY3Rpb24gcmVtKCRweCkge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgMTYpICsgcmVtO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuLy9FTVxcclxcbkBmdW5jdGlvbiBlbSgkcHgsICRjdXJyZW50OiAxNikge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGN1cnJlbnQpICsgZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vL0N1cnJlbmN5XFxyXFxuQG1peGluIGN1cnJlbmN5KCRzeW0pIHtcXHJcXG5cXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0Y29udGVudDogXFxcIiN7JHN5bX1cXFwiO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gR3JpZHNcXHJcXG5AbWl4aW4gZ3JpZENhcmRzKCR0eXBlOiBmaXQsICRtaW46IDI4MHB4LCAkbWF4OiAxZnIsICRnYXA6IDMwcHgpIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdhcDogJGdhcDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLSN7JHR5cGV9LCBtaW5tYXgoJG1pbiwgJG1heCkpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90LAg0LLQu9Cw0YHRgtC40LLRltGB0YLRjCAoY2xhbXApXFxyXFxuQG1peGluIGFkYXB0aXZlVmFsdWUoJHByb3BlcnR5LCAkc3RhcnRTaXplLCAkbWluU2l6ZSwgJGtlZXBTaXplOiAwLCAkd2lkdGhGcm9tOiAkY29udGFpbmVyV2lkdGgsICR3aWR0aFRvOiAkbWluV2lkdGgpIHtcXHJcXG5cXHRAaWYgKCRzdGFydFNpemU9PTApIHtcXHJcXG5cXHRcXHQkc3RhcnRTaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0QGlmICgkbWluU2l6ZT09MCkge1xcclxcblxcdFxcdCRtaW5TaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JTQu9GPIGNhbGMoKTtcXHJcXG5cXHQkYWRkU2l6ZTogbWF0aC5kaXYoJHN0YXJ0U2l6ZSAtICRtaW5TaXplLCAxNik7XFxyXFxuXFxyXFxuXFx0QGlmICgkd2lkdGhGcm9tID09ICRjb250YWluZXJXaWR0aCBhbmQgJG1heFdpZHRoQ29udGFpbmVyID09IDApIHtcXHJcXG5cXHRcXHQkd2lkdGhGcm9tOiAkbWF4V2lkdGg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4INCyIEVNXFxyXFxuXFx0JHdpZHRoRnJvbU1lZGlhOiBlbSgkd2lkdGhGcm9tKTtcXHJcXG5cXHQkd2lkdGhUb01lZGlhOiBlbSgkd2lkdGhUbyk7XFxyXFxuXFxyXFxuXFx0Ly8g0KTQvtGA0LzRg9C70LAg0L/Qu9Cw0LLQsNGO0YfQvtCz0L4g0LfQvdCw0YfQtdC90L3Rj1xcclxcblxcdC8vINCY0YHRgtC+0YfQvdC40Lo6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vbGluZWFybHktc2NhbGUtZm9udC1zaXplLXdpdGgtY3NzLWNsYW1wLWJhc2VkLW9uLXRoZS12aWV3cG9ydC9cXHJcXG5cXHQkc2xvcGU6IG1hdGguZGl2KCgkc3RhcnRTaXplIC0gJG1pblNpemUpLCAoJHdpZHRoRnJvbSAtICR3aWR0aFRvKSk7XFxyXFxuXFx0JHlJbnRlcnNlY3Rpb246IC0kd2lkdGhUbyAqICRzbG9wZSArICRtaW5TaXplO1xcclxcblxcdEBpZiAoJHlJbnRlcnNlY3Rpb249PTApIHtcXHJcXG5cXHRcXHQkeUludGVyc2VjdGlvbjogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcdCRmbHlWYWx1ZTogI3tyZW0oJHlJbnRlcnNlY3Rpb24pfVxcXCIgKyBcXFwiICN7JHNsb3BlICogMTAwfXZ3O1xcclxcblxcclxcblxcdC8vINCe0YLRgNC40LzQsNC90L3RjyDQt9C90LDRh9C10L3QvdGPINCy0LvQsNGB0YLQuNCy0L7RgdGC0ZZcXHJcXG5cXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiByZW0oJG1pblNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdC8vINCv0LrRidC+INC90LXQs9Cw0YLQuNCy0L3RliDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0QGlmICgkbWluU2l6ZSA+ICRzdGFydFNpemUpIHtcXHJcXG5cXHRcXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiByZW0oJHN0YXJ0U2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgcmVtKCRtaW5TaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0LfQvdCw0YfQtdC90L3RjyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuXFx0QGlmICRrZWVwU2l6ZSAhPSAxIGFuZCAka2VlcFNpemUgIT0gMyB7XFxyXFxuXFx0XFx0QG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogcmVtKCRzdGFydFNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0JDQtNCw0L/RgtGD0ZTQvNC+INGA0L7Qt9C80ZbRgCDRgyDQv9GA0L7QvNGW0LbQutGDINC80ZbQtiDQt9Cw0LfQvdCw0YfQtdC90LjQvNC4INGI0LjRgNC40L3QsNC80Lgg0LIn0Y7Qv9C+0YDRgtGDXFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aFRvTWVkaWEpIGFuZCAobWF4LXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHQvLyDQr9C60YnQviDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyAoI3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC8vINCv0LrRidC+INC90LUg0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRcXHRAc3VwcG9ydHMgbm90ICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiBjYWxjKCN7cmVtKCRtaW5TaXplKX0gKyAjeyRhZGRTaXplfSAqICgxMDB2dyAtICN7cmVtKCR3aWR0aFRvKX0pIC8gI3ttYXRoLmRpdigkd2lkdGhGcm9tLCAxNikgLSBtYXRoLmRpdigkd2lkdGhUbywgMTYpfSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAyIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHdpZHRoVG9NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogcmVtKCRtaW5TaXplKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5mb290ZXIge1xcclxcbiAgLy8gLmZvb3Rlcl9fZm9ybVxcclxcblxcclxcbiAgJl9fZm9ybSB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuZm9vdGVyX19ib3R0b21cXHJcXG5cXHJcXG4gICZfX2JvdHRvbSB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5mb3JtLWZvb3RlciB7XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDEyMCwgNjApO1xcclxcbiAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxMjAsIDYwKTtcXHJcXG4gIC8vIC5mb3JtLWZvb3Rlcl9fY29udGFpbmVyXFxyXFxuXFxyXFxuICAmX19jb250YWluZXIge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmZvcm0tZm9vdGVyX19jb250ZW50XFxyXFxuXFxyXFxuICAmX19jb250ZW50IHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ibGFjaywgIzIwMjIyNik7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgNjAsIDEyLCAwLCAxMDI0LCAzMjApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDYwLCAxMiwgMCwgMTAyNCwgMzIwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgNDAsIDEyLCAwLCAxMDI0LCAzMjApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwgNDAsIDEyLCAwLCAxMDI0LCAzMjApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDExNiwgMTYpO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5mb3JtLWZvb3Rlcl9fbGVmdFxcclxcblxcclxcbiAgJl9fbGVmdCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuZm9ybS1mb290ZXJfX3JpZ2h0XFxyXFxuXFxyXFxuICAmX19yaWdodCB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5sZWZ0LWZvcm0tZm9vdGVyIHtcXHJcXG4gIGZsZXg6IDAgMSA0NTFweDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgfVxcclxcbiAgLy8gLmxlZnQtZm9ybS1mb290ZXJfX3RpdGxlXFxyXFxuXFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlLCAjZmZmKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgNDAsIDI0KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDQ4LCA0MCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAyMCwgMTIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmxlZnQtZm9ybS1mb290ZXJfX2Rlc2NcXHJcXG5cXHJcXG4gICZfX2Rlc2Mge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWRhcmstYmcsICM5ZjlmOWYpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNiwgMTQpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjAsIDE2KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LWZvcm0tZm9vdGVyIHtcXHJcXG4gIGZsZXg6IDAgMSA1NTJweDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgfVxcclxcbiAgLy8gLnJpZ2h0LWZvcm0tZm9vdGVyX19mb3JtXFxyXFxuXFxyXFxuICAmX19mb3JtIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5yaWdodC1mb3JtLWZvb3Rlcl9faW5wdXRcXHJcXG5cXHJcXG4gICZfX2lucHV0IHtcXHJcXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMjAsIDgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19idG4ge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tdG9wXFxcIiwgNDQsIDMyKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ncmF5LCAjZjRmNWY4KTtcXHJcXG4gIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMjQsIDE2KTtcXHJcXG4gIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMjQsIDE2KTtcXHJcXG4gIC8vIC5ib3R0b20tZm9vdGVyX19jb250YWluZXJcXHJcXG5cXHJcXG4gICZfX2NvbnRhaW5lciB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYm90dG9tLWZvb3Rlcl9fY29udGVudFxcclxcblxcclxcbiAgJl9fY29udGVudCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYm90dG9tLWZvb3Rlcl9fdG9wXFxyXFxuXFxyXFxuICAmX190b3Age1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmJvdHRvbS1mb290ZXJfX21pZFxcclxcblxcclxcbiAgJl9fbWlkIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5ib3R0b20tZm9vdGVyX19zb2NpYWxzXFxyXFxuXFxyXFxuICAmX19zb2NpYWxzIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5ib3R0b20tZm9vdGVyX19ib3R0b21cXHJcXG5cXHJcXG4gICZfX2JvdHRvbSB7XFxyXFxuICB9XFxyXFxufVxcclxcbi50b3AtYm90dG9tLWZvb3RlciB7XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDI4LCAyMCk7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcXHJcXG4gIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA0MCwgNTIpO1xcclxcbiAgLy8gLnRvcC1ib3R0b20tZm9vdGVyX19sb2dvXFxyXFxuXFxyXFxuICAmX19sb2dvIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm1pZC1ib3R0b20tZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCAyMzMsIDE2LCAwLCAxMjAwLCA5NDQpO1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIC8vICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gbWlubWF4KDI4OHB4LCAzODlweCkgMWZyIDI4OHB4IDI4OHB4O1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDEwMjQpKSB7XFxyXFxuICAgIC8vICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIC8gbWlubWF4KDI4OHB4LCAzODlweCkgMTZweCAyODhweDtcXHJcXG4gICAgLy8gIHJvdy1nYXA6IDQwcHg7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAvLyAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XFxyXFxuICAgIC8vICBjb2x1bW4tZ2FwOiAxNnB4O1xcclxcbiAgICAvLyAgcm93LWdhcDogNjJweDtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlU21hbGwpIHtcXHJcXG4gICAgLy8gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8vICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvLyAgcm93LWdhcDogNTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5taWQtYm90dG9tLWZvb3Rlcl9fbGVmdFxcclxcblxcclxcbiAgJl9fbGVmdCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubWlkLWJvdHRvbS1mb290ZXJfX21pZFxcclxcblxcclxcbiAgJl9fbWlkIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5taWQtYm90dG9tLWZvb3Rlcl9fcmlnaHRcXHJcXG5cXHJcXG4gICZfX3JpZ2h0IHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmxlZnQtbWlkLWZvb3RlciB7XFxyXFxuICBmbGV4OiAwIDEgMzg5cHg7XFxyXFxuICAvLyAgIGdyaWQtcm93OiBzcGFuIDI7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDYyLCA1OCk7XFxyXFxuICB9XFxyXFxuICAvLyAubGVmdC1taWQtZm9vdGVyX190ZXh0XFxyXFxuXFxyXFxuICAmX190ZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2ssICMxNjE2MTYpO1xcclxcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFxcXCJsaWdhXFxcIiBvZmY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDI0LCAxOCk7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyOCwgMjQpO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmxlZnQtbWlkLWZvb3Rlcl9fc3RyZWV0XFxyXFxuXFxyXFxuICAmX19zdHJlZXQge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDI0LCAzMik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubGVmdC1taWQtZm9vdGVyX19waG9uZVxcclxcblxcclxcbiAgJl9fcGhvbmUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDgsIDE2KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5sZWZ0LW1pZC1mb290ZXJfX2VtYWlsXFxyXFxuXFxyXFxuICAmX19lbWFpbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMjQsIDMyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5sZWZ0LW1pZC1mb290ZXJfX2J0bnNcXHJcXG5cXHJcXG4gICZfX2J0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDYyLCAzOCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubGVmdC1taWQtZm9vdGVyX19idG5cXHJcXG5cXHJcXG4gICZfX2J0biB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubGVmdC1taWQtZm9vdGVyX19zb2NpYWxzXFxyXFxuXFxyXFxuICAmX19zb2NpYWxzIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLnNvY2lhbHMtbGVmdC1taWQtZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICAvLyAuc29jaWFscy1sZWZ0LW1pZC1mb290ZXJfX2l0ZW1cXHJcXG5cXHJcXG4gICZfX2l0ZW0ge1xcclxcbiAgICBtaW4td2lkdGg6IDQ0cHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIG1heC13aWR0aDogNDRweDtcXHJcXG4gICAgbWF4LWhlaWdodDogNDRweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItb3ItZGV2aWRlci1saWdodC1iZywgI2U5ZTllOSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLnNvY2lhbHMtbGVmdC1taWQtZm9vdGVyX19kZXNjXFxyXFxuXFxyXFxuICAmX19kZXNjIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWdyYXktbGlnaHQtYmcsICM3NTc1NzUpO1xcclxcbiAgICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjAsIDE2KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLy8gLm1pZC1taWQtYm90dG9tLWZvb3RlciB7XFxyXFxuLy8gICBncmlkLWNvbHVtbjogMztcXHJcXG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuLy8gICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbi8vICAgICBncmlkLXJvdzogMjtcXHJcXG4vLyAgIH1cXHJcXG4vLyAgIC8vIC5taWQtbWlkLWJvdHRvbS1mb290ZXJfX3RpdGxlXFxyXFxuXFxyXFxuLy8gICAmX190aXRsZSB7XFxyXFxuLy8gICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrLCAjMTYxNjE2KTtcXHJcXG4vLyAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDE2KTtcXHJcXG4vLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4vLyAgICAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDI0LCAyMCk7XFxyXFxuLy8gICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XFxyXFxuLy8gICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAzMiwgMjQpO1xcclxcbi8vICAgfVxcclxcblxcclxcbi8vICAgLy8gLm1pZC1taWQtYm90dG9tLWZvb3Rlcl9fbGlzdFxcclxcblxcclxcbi8vICAgJl9fbGlzdCB7XFxyXFxuLy8gICB9XFxyXFxuLy8gfVxcclxcbi8vIC5saXN0LW1pZC1ib3R0b20tZm9vdGVyIHtcXHJcXG4vLyAgIC8vIC5saXN0LW1pZC1ib3R0b20tZm9vdGVyX19pdGVtXFxyXFxuXFxyXFxuLy8gICAmX19pdGVtIHtcXHJcXG4vLyAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4vLyAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMTIsIDIwKTtcXHJcXG4vLyAgICAgfVxcclxcbi8vICAgfVxcclxcblxcclxcbi8vICAgLy8gLmxpc3QtbWlkLWJvdHRvbS1mb290ZXJfX2xpbmtcXHJcXG5cXHJcXG4vLyAgICZfX2xpbmsge1xcclxcbi8vICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNiwgMTQpO1xcclxcbi8vICAgfVxcclxcbi8vIH1cXHJcXG4vLyAucmlnaHQtbWlkLWJvdHRvbS1mb290ZXIge1xcclxcbi8vICAgZ3JpZC1jb2x1bW46IDQ7XFxyXFxuLy8gICBAbWVkaWEgKG1heC13aWR0aDogZW0oMTAyNCkpIHtcXHJcXG4vLyAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuLy8gICAgIGdyaWQtcm93OiAyO1xcclxcbi8vICAgfVxcclxcbi8vICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4vLyAgICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuLy8gICAgIGdyaWQtcm93OiAyO1xcclxcbi8vICAgfVxcclxcbi8vICAgLy8gLnJpZ2h0LW1pZC1ib3R0b20tZm9vdGVyX190aXRsZVxcclxcblxcclxcbi8vICAgJl9fdGl0bGUge1xcclxcbi8vICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaywgIzE2MTYxNik7XFxyXFxuLy8gICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxNik7XFxyXFxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuLy8gICAgIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyNCwgMjApO1xcclxcbi8vICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xcclxcbi8vICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMzIsIDI0KTtcXHJcXG4vLyAgIH1cXHJcXG5cXHJcXG4vLyAgIC8vIC5yaWdodC1taWQtYm90dG9tLWZvb3Rlcl9fbGlzdFxcclxcblxcclxcbi8vICAgJl9fbGlzdCB7XFxyXFxuLy8gICB9XFxyXFxuLy8gfVxcclxcbi8vIC5saXN0LXJpZ2h0LWJvdHRvbS1mb290ZXIge1xcclxcbi8vICAgLy8gLmxpc3QtcmlnaHQtYm90dG9tLWZvb3Rlcl9faXRlbVxcclxcblxcclxcbi8vICAgJl9faXRlbSB7XFxyXFxuLy8gICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuLy8gICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDEyLCAyMCk7XFxyXFxuLy8gICAgIH1cXHJcXG4vLyAgIH1cXHJcXG5cXHJcXG4vLyAgIC8vIC5saXN0LXJpZ2h0LWJvdHRvbS1mb290ZXJfX2xpbmtcXHJcXG5cXHJcXG4vLyAgICZfX2xpbmsge1xcclxcbi8vICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNiwgMTQpO1xcclxcbi8vICAgfVxcclxcbi8vIH1cXHJcXG4ucmlnaHQtbWlkLWJvdHRvbS1mb290ZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGNvbHVtbi1nYXA6IDE2cHg7XFxyXFxuICByb3ctZ2FwOiA0MHB4O1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDEwMjQpKSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcbiAgLy8gLnJpZ2h0LW1pZC1ib3R0b20tZm9vdGVyX19pdGVtXFxyXFxuXFxyXFxuICAmX19pdGVtIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLml0ZW0tcmlnaHQtZm9vdGVyIHtcXHJcXG4gIGZsZXg6IDAgMSAyODhweDtcXHJcXG4gIC8vIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fdGl0bGVcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrLCAjMTYxNjE2KTtcXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDE2KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDI0LCAyMCk7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAzMiwgMjQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLml0ZW0tcmlnaHQtZm9vdGVyX19saXN0XFxyXFxuXFxyXFxuICAmX19saXN0IHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTYsIDE0KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDIwLCAxNik7XFxyXFxuICB9XFxyXFxufVxcclxcbi5saXN0LWl0ZW0tcmlnaHQtZm9vdGVyIHtcXHJcXG4gIC8vIC5saXN0LWl0ZW0tcmlnaHQtZm9vdGVyX19pdGVtXFxyXFxuXFxyXFxuICAmX19pdGVtIHtcXHJcXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMTIsIDIwKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmxpc3QtaXRlbS1yaWdodC1mb290ZXJfX2xpbmtcXHJcXG5cXHJcXG4gICZfX2xpbmsge1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLWJvdHRvbS1mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHJvdy1nYXA6IDhweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMjQsIDE2KTtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllOWU5O1xcclxcbiAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXRvcFxcXCIsIDQyLCA1Mik7XFxyXFxuICAvLyAuYm90dG9tLWJvdHRvbS1mb290ZXJfX2NvcHlyaWdodFxcclxcblxcclxcbiAgY29sb3I6IHZhcigtLXRleHQtZ3JheS1saWdodC1iZywgIzc1NzU3NSk7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDIwLCAxNik7XFxyXFxuICAmX19jb3B5cmlnaHQge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmJvdHRvbS1ib3R0b20tZm9vdGVyX19wb2xpY3lcXHJcXG5cXHJcXG4gICZfX3BvbGljeSB7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblwiLFwiLmFkdmFudGFnZXMge1xcclxcbiAgLy8gLmFkdmFudGFnZXNfX2NvbnRhaW5lclxcclxcblxcclxcbiAgJl9fY29udGFpbmVyIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5hZHZhbnRhZ2VzX19jb250ZW50XFxyXFxuXFxyXFxuICAmX19jb250ZW50IHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5hZHZhbnRhZ2VzX19jYXJkc1xcclxcblxcclxcbiAgJl9fY2FyZHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIG1hcmdpbjogMCByZW0oLTgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uY2FyZC1hZHZhbnRhZ2VzIHtcXHJcXG4gIGZsZXg6IDAgMSAzMy4zMzMlO1xcclxcbiAgcGFkZGluZzogMCByZW0oOCk7XFxyXFxuICAvLyAuY2FyZC1hZHZhbnRhZ2VzX19ib2R5XFxyXFxuXFxyXFxuICAmX19ib2R5IHtcXHJcXG4gICAgbWluLXdpZHRoOiA2MHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmNhcmQtYWR2YW50YWdlc19faW1nLWliZ1xcclxcblxcclxcbiAgJl9faW1nLWliZyB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuY2FyZC1hZHZhbnRhZ2VzX19jb250ZW50XFxyXFxuXFxyXFxuICAmX19jb250ZW50IHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5jYXJkLWFkdmFudGFnZXNfX3RpdGxlXFxyXFxuXFxyXFxuICAmX190aXRsZSB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuY2FyZC1hZHZhbnRhZ2VzX19kZXNjXFxyXFxuXFxyXFxuICAmX19kZXNjIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU0MzI0Yjk4MzkxYThmYmE1YmQzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9